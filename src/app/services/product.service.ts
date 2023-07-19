import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Product } from "../components/products/product.model";
import { EMPTY, Observable, catchError, map, retry } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3090/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "Fechar", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(product: Product): Observable<Product> {
    const url = `${this.baseUrl}`
    return this.http.post<Product>(url, product).pipe(map(obj => obj), catchError(e => this.errorHandler(e)))
  }
  errorHandler( e: any): Observable<Product> {
    this.showMessage('Ocorreu um erro', true)
    return EMPTY;
  }
  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
  readById(_id:any): Observable<Product> {
    const url = `${this.baseUrl}/${_id}`
    return this.http.get<Product>(url)
  }
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product._id}`
    return this.http.put<Product>(url, product).pipe(map(obj => obj), catchError(e => this.errorHandler(e)))
  }
  delete(product: Product): Observable<Product> {
    console.log(product);

    const url = `${this.baseUrl}/${product._id}`

    return this.http.delete<Product>(url).pipe(map(obj => obj), catchError(e => this.errorHandler(e)))
  }
}
