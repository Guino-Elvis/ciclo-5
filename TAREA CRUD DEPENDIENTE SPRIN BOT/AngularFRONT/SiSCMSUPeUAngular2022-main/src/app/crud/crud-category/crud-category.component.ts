import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-category',
  templateUrl: './crud-category.component.html',
  styleUrls: ['./crud-category.component.css']
})
export class CrudCategoryComponent implements OnInit {

  constructor(private router:Router) {  }

  ListarCategoria(){
    this.router.navigate(["list-category"])
  }
  agregarCategoria(){
    this.router.navigate(["add-category"])
  }
  ngOnInit(): void {
  }

}
