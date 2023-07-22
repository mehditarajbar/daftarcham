import Swal from 'sweetalert2'


const toast =(title,position,icon)=>Swal.fire({
    title: title,
    toast: true,
    position: position,
    iconColor: 'white',
    showConfirmButton: false,
    icon: icon,
    timer: 3500,
    timerProgressBar: true,
    customClass: {
      popup: 'colored-toast'
    },
})

export default toast;