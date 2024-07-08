// success popup

import Swal from "sweetalert2";

export const successPopup = (message) =>{
  return  Swal.fire({
        position: "top-end",
        icon: "success",
        iconColor:'#7E2553',
        title: message,
        showConfirmButton: false,
        timer: 2500
      });
}
// error popup

export const errorPopup = (message) =>{
   return Swal.fire({
        position: "top-end",
        icon: "error",
        iconColor:'#7E2553',
        title: message,
        showConfirmButton: false,
        timer: 2500
      });
}