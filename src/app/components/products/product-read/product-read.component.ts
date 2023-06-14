import { ProductService } from "src/app/services/product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ["id", "name", "price", "action"];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
    this.productService.readById
  }
  exibirModalFlag = false;

  exibirModal() {
    this.exibirModalFlag = true;
  }

  confirmarExclusao() {
    // Lógica para excluir o item desejado
    alert('Item excluído com sucesso!');
    this.fecharModal();
  }

  fecharModal() {
    this.exibirModalFlag = false;
  }

}
