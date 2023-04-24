import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  previewUrl: string | null | undefined;
  onFileChanged(event: { target: { files: any[]; }; }) {
    const file = event.target.files[0];
    this.previewUrl = file ? URL.createObjectURL(file) : null;
  }

  // onFileChanged(event: { target: { files: any[]; }; }) {
  //   const file = event.target.files[0];
  //   this.previewUrl = file ? URL.createObjectURL(file) : null;
  // }

  constructor(public productoService:ProductoService,
   private router:Router) { }
   ngOnInit(): void {
  }




submitForm(productoForm:NgForm) {
   if(productoForm.value.id==null){
      this.productoService.createProducto(productoForm.value)
      .subscribe((response)=>{
       this.router.navigate([""]);
     });
    }else{
            this.productoService.updateProducto(productoForm.value.id,productoForm.value)
             .subscribe((response)=>{
              this.router.navigate([""]);
            });
        }
        this.resetForm;

      }






  resetForm(productoForm:NgForm){
     if(productoForm!=null){
     productoForm.reset();
  this.productoService.selectProducto=new Producto();
    }
  }
}



