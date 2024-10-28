import { Component, ElementRef, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UploadFileService } from '../../../../core/services/upload-file.service';
import { ToasterService } from '../../features/toaster/toaster.service';
import { catchError, EMPTY, tap } from 'rxjs';

export interface photoDataDTO {
  photoFile: File;
  photoLocalUrl: string;
}

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css'
})
export class FileInputComponent {
  @Input() id : string = 'id'
  @Input() folder : string = 'equipment'
  @Input() maxAllowedFiles : number = 1
  @Input() maxFileSize : number = 2
  @Input() control = new FormControl('');

  @Output() onEmitPhoto: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDeletedPhoto: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('fileInput') fileInput: ElementRef;

  isValidation: boolean = false;
  isLoading = signal(false)
  // photoData : string[] = []
  fileControl = new FormControl(null)

  constructor(
    private uploadFileService : UploadFileService,
    private toasterService: ToasterService,
  ){}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer!.dropEffect = 'copy';
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer!.files;
    this.validateAndHandleFiles(files);
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    this.validateAndHandleFiles(files);
  }

  validateAndHandleFiles(files: FileList): void {
    const allowedTypes = ['image/jpeg', 'image/png'];
    this.isLoading.set(true)

    const totalPhotos = files.length; // Total foto saat ini ditambah dengan foto baru

    if (totalPhotos > this.maxAllowedFiles) {
      this.isValidation = true;
      return;
    }

    // this.photoData = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Validasi tipe file
      if (!allowedTypes.includes(file.type)) {
        this.isValidation = true;
        continue;
      }

      // Validasi ukuran file
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > this.maxFileSize) {
        this.isValidation = true;
        continue;
      }
      this.isValidation = false;

      const formData = new FormData();

      formData.append('file', file);
      formData.append('folder', this.folder);

      this.uploadFileService
        .storeData(formData)
        .pipe(
          catchError((err) => {

            console.log('error => ', err)

            if (err.status === 400){
              this.toasterService.error( err?.errorsDetails?.at(0)?.message || 'Failed  uploading image.' , 3000);
            } else {
              this.toasterService.error('Failed uploading image.', 3000);
            }

            this.isLoading.set(false)
  
            return EMPTY
          }),
          tap(uploadedData => {
            this.toasterService.success('Successfully upload image.', 3000);
            this.isLoading.set(false)
            this.onEmitPhoto.emit(uploadedData?.data?.fullPath)
          })
        ).subscribe();
          
      // const photoUrl = URL.createObjectURL(file); // Buat URL lokal untuk gambar
      // this.photoData.push({
      //   photoFile: file,
      //   photoLocalUrl: photoUrl, // URL lokal untuk menampilkan gambar
      // })
    }

  }

  onDelete(event: MouseEvent){
    event.stopPropagation();
    this.resetForm()
    this.onDeletedPhoto.emit()

    setTimeout(()=> {
    }, 200)
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  resetForm(){
    this.isValidation = false;
    this.fileControl.reset()
  }

}
