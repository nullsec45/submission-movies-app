import Swal from 'sweetalert2'


export function alertError(title, message) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: message,
    });
}