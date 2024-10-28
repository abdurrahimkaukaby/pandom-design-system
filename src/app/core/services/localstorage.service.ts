import { Injectable } from '@angular/core';
import { LocalStorageServiceInterface } from '../interfaces/localstorage.service.interface';
import * as Crypto from 'crypto-js';
import collect, { Collection } from 'collect.js';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService implements LocalStorageServiceInterface{

  private _result: string = '';
  private storageSubjects: { [key: string]: BehaviorSubject<string> } = {};

  constructor() {
    // Listen to changes in localStorage (e.g., from other tabs or components)
    window.addEventListener('storage', this.handleStorageEvent.bind(this));
  }

  // Save data and emit new value to subscribers
  saveData(key: string, data: string): void {
    const encryptedData = this.encrypt(data);
    localStorage.setItem(key, encryptedData);
    this.emitValueForKey(key, encryptedData);
  }

  // Remove data and emit null value to subscribers
  removeData(key: string): void {
    localStorage.removeItem(key);
    this.emitValueForKey(key, null);
  }

  // Clear all data and reset all subjects
  clearData(): void {
    localStorage.clear();
    Object.keys(this.storageSubjects).forEach(key => {
      this.emitValueForKey(key, null);
    });
  }

  // Get data and decrypt
  getData(key: string): this {
    const encryptedData = localStorage.getItem(key) || '';
    this._result = this.decrypt(encryptedData);
    return this;
  }

  // Public method to observe data changes for a specific key
  getDataObservable(key: string): Observable<string | null> {
    if (!this.storageSubjects[key]) {
      const initialValue = localStorage.getItem(key) || '';
      this.storageSubjects[key] = new BehaviorSubject<string | null>(this.decrypt(initialValue));
    }
    return this.storageSubjects[key].asObservable();
  }

  // Emit the new value (after encryption/decryption) to the subject for the given key
  private emitValueForKey(key: string, encryptedValue: string | null): void {
    if (this.storageSubjects[key]) {
      const decryptedValue = encryptedValue ? this.decrypt(encryptedValue) : null;
      this.storageSubjects[key].next(decryptedValue);
    }
  }

  // Handle changes made to localStorage from other tabs or sources
  private handleStorageEvent(event: StorageEvent): void {
    if (event.key && this.storageSubjects[event.key]) {
      const newValue = event.newValue || ''; // Value after encryption
      this.emitValueForKey(event.key, newValue);
    }
  }

  toString(): string {
    return this._result as string;
  }

  toCollection<T>(): Collection<T> {
    const _temp = this._result !== undefined || this._result !== '' ? JSON.parse(this._result as string) : {}; 
    return collect(_temp);
  }

  toObject<T>(): T {
    return JSON.parse(this._result);
  }

  private encrypt(data: string): string {
    return Crypto.AES.encrypt(data, environment.localKey,).toString();
  }

  private decrypt(data: string): string {
    return Crypto.AES.decrypt(data, environment.localKey).toString(Crypto.enc.Utf8);
  }
}
