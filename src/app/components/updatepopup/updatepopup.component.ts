import { Component, Inject, OnInit ,inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/services/auth.service';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  constructor(private builder: FormBuilder,private service:AuthService,
    @Inject(MAT_DIALOG_DATA) public data:any, private toastr:ToastrService,
    private dialog:MatDialogRef<UpdatepopupComponent>) {

  }
  rolelist:any;

  registerform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control('',),
    password: this.builder.control('',),
    email: this.builder.control('', ),
    gender: this.builder.control('male'),
    role: this.builder.control('',Validators.required),
    isactive: this.builder.control(false)
  });


  UpdateUser() {
    console.log('Form value:', this.registerform.value);
    if (this.registerform.valid) {
      this.service.Updateuser(this.registerform.value.id, this.registerform.value).subscribe(res => {
        this.toastr.success('Actualizado exitosamente.');
        this.dialog.close();
      });
    } else {
      const roleControl = this.registerform.get('role');

      if (roleControl && roleControl.hasError('required')) {
        console.log('Role control has required error.');
        this.toastr.warning('Por favor, selecciona un Rol ome gonorrea.');
      } else {
        console.log('Other form validation errors.');
        this.toastr.warning('Por favor, completa todos los campos obligatorios.');
      }
    }
  }



  editdata : any;

  ngOnInit(): void {
    this.service.GetAllRole().subscribe(res=>{
      this.rolelist=res;
    })
    if(this.data.usercode!=null && this.data.usercode!=''){
      this.service.Getbycode(this.data.usercode).subscribe(res => {
        this.editdata = res;
        this.registerform.setValue({
          id:this.editdata.id,
          name:this.editdata.name,
          email:this.editdata.email,
          password:this.editdata.password,
          role:this.editdata.role,
          gender:this.editdata.gender,
          isactive:this.editdata.isactive
        })
      })
    }
  }
}
