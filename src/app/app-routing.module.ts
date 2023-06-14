import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import "./views/home/home.component";
import { HomeComponent } from "./views/home/home.component";
import "./views/product-crud/product-crud.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductsCreateComponent } from "./components/products/products-create/products-create.component";
import { ProductUpdateComponent } from "./components/products/product-update/product-update.component";
import { ProductDeleteComponent } from "./components/products/product-delete/product-delete.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductCrudComponent,
  },
  {
    path: "products/create",
    component: ProductsCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
