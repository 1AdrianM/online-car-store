import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  SuccessAlert(title:string, text:string){
    return Swal.fire(
    {
      icon:"success",
      title:title,
      text:text
    }
    )

  }
QuestionAlert(title:string, text:string, ConfirmButtonText:string,
  CancelButtonText:string
){


  return Swal.fire({
    title:title,
    text:text,
    backdrop: "white",
    showCancelButton:true,
    confirmButtonColor:"#0d6efd",
    cancelButtonColor:"#dc3545",
    confirmButtonText:ConfirmButtonText,
    cancelButtonText:CancelButtonText


  })
}
}
