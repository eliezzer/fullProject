import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = { name: "", costPrice: 0, salePrice: 0, markup: 0 };
  ngOnInit(): void {
    console.log('nnnoooo');
    
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((p) => (this.product = p));
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage("Produto Excluído!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
  @Output() confirmarExclusaoEvent = new EventEmitter<boolean>();
  @Output() fecharModalEvent = new EventEmitter<boolean>();


  fecharModal() {
    this.fecharModalEvent.emit(true);
  }
}
