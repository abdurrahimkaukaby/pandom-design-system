import { Component, EventEmitter, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from '../../../../../api/manage-users/models/user.dto';
import { ConfirmationService } from '../../confirmation-modal/confirmation-modal.service';
import { take } from 'rxjs';
import { ToasterService } from '../../toaster/toaster.service';
import { RoleDTO } from '../../../../../api/manage-users/models/role.dto';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit, OnChanges {
  @Input() selectedUser : UserDTO
  @Input() roleData : RoleDTO[]
  @Output() onCancelEmit = new EventEmitter<void>();
  @Output() onRefreshEmit = new EventEmitter<void>();

  userForm = new FormGroup({
    userName : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    role : new FormControl(null, Validators.required),
    password : new FormControl('', Validators.required),
  })

  isLoading: boolean = false;
  isRoleDropdown = false;
  AccessRoleDropdowns = signal<{value: string, description: string}[]>([])
  dropdownsRole : {id: number, value: string, description : string}[] =[]

  constructor(
    private confirmationService: ConfirmationService,
    private toasterService: ToasterService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['roleData'] &&
      changes['roleData']?.previousValue !== changes['roleData']?.currentValue!
    ) {
      if (this.roleData){
        this.dropdownsRole = [];
        this.roleData.forEach(role => {
          this.dropdownsRole.push({
            id: role.id,
            value: role.name,
            description: role.description
          })
        })
      }
    }
    if (
      changes['selectedUser'] &&
      changes['selectedUser']?.previousValue !== changes['selectedUser']?.currentValue!
    ) {
      if (this.selectedUser){
        
        this.userForm.setValue({
          userName: this.selectedUser?.username,
          email: this.selectedUser?.email,
          role: this.selectedUser?.role || '',
          password: this.selectedUser?.password || '',
        })
        console.log('sjkdhakjd', this.selectedUser, this.userForm);
      }
    }
  }

  ngOnInit(): void {
  }

  onSelectRole(role : {id: number, value: string, description : string}){
    console.log('role', role);
    
    this.userForm.controls.role.patchValue(role)
  }

  onOpenDropdownRole(){
    this.isRoleDropdown = !this.isRoleDropdown;
    
  }

  onBlurSelectRole(){
    setTimeout(() => {
        this.isRoleDropdown = false;
    }, 100)
  }

  onGeneratePassword(length: number){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    this.userForm.controls.password.patchValue(result)
  }

  onCancel(){
    if (!this.selectedUser){
      console.log('!this.selectedUser');
      
      if (this.userForm.dirty){
        this.onConfirmationModal()
      } else {
        this.confirmationService.onCloseModal()
        this.onCancelEmit.emit()
      };
    } else {
      console.log('this.selectedUser');
      if (
        this.userForm.controls.userName.value === this.selectedUser.username &&
        this.userForm.controls.email.value === this.selectedUser.email &&
        this.userForm.controls.role.value === this.selectedUser.role &&
        this.userForm.controls.password.value === this.selectedUser.password
      ){
        this.confirmationService.onCloseModal()
        this.onCancelEmit.emit()
      } else {
        this.onConfirmationModal()
      };
    }
  }

  onConfirmationModal(){
    this.confirmationService.openConfirmationDialog({
      title: 'Cancel add user',
      message: 'Are you sure? your progress will not be saved.',
      confirmButtonText: 'Yes, Cancel',
      cancelButtonText: 'Stay here',
      confirmButtonColor: 'red',
      backgroundColor: 'transparent',
      positionX: 'right'
    });
    // this.confirmationService.onStartLoading();

    this.confirmationService.confirmAction$
    .pipe(
      take(1)
    )
    .subscribe(confirmed => {
      if (confirmed) {
        // Proceed with the delete action
        console.log('Cancel confirmaed');
        this.confirmationService.onCloseModal()
        this.onCancelEmit.emit()
      } else {
        console.log('Cancel cancelled');
      }
    });
  }

  doNothing(event: MouseEvent){
    event.stopPropagation();
  }

  onSubmit(){
    this.isLoading = true
    console.log('submit')
    this.toasterService.success('Successfully changed data of user.', 3000);
  }

  generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    this.userForm.controls.password.patchValue(result)
  }
}
