 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {
  listProductos:any=[];

  constructor(public cs:ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.loadProductos();
  }
  loadProductos(){
   return this.cs.getProductos().subscribe((data:{})=>{
      console.log(data);
    this.listProductos=data;
   })
  }
  onEdit(producto:Producto){
   console.log(producto);
    this.cs.selectProducto=Object.assign({},producto);
    this.router.navigate(["/add-producto"]);
  }

   onDelete(id:number){
     this.cs.deleteProducto(id).subscribe((response)=>{
     this.loadProductos();
    })
 }

}



