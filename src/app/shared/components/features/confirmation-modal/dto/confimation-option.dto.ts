export interface ConfirmationOption {
    title : string;
    message : string;
    confirmButtonText : string;
    cancelButtonText : string;
    confirmButtonColor : 'blue' | 'red'
    backgroundColor : 'black' | 'transparent'
    positionX: 'left' | 'right' | 'center'
}