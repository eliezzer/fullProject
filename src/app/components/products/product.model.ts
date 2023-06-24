export interface Product {
  id?: number | null // o ponto de interrogação significa que a interface nao vai obrigar usar o Id
  name: string
  costPrice: number | null
  salePrice: number | null
  markup: number | null
}