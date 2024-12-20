import Swal from 'sweetalert2';

export function ToastNotif(
  icon: 'success' | 'error' | 'info' | 'warning',
  message: string
) {
  const Toast = Swal.mixin({
    toast: icon === 'success' || icon === 'info',
    position: icon === 'success' || icon === 'info'? 'top' : 'center',
    showConfirmButton: false,
    timer: 3000,
    buttonsStyling: false,
    customClass:{popup:'swalPopup',},
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon, // Gunakan ikon yang diberikan sebagai parameter
    title: icon === 'success' || icon === 'info'? '': (icon.charAt(0).toUpperCase() + icon.slice(1) + '!'),
    html:  `${message}`, 
  });
}
