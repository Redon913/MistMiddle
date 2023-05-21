export interface Product {
  ProductUnit: string;
  ProductUnitQuantity: string;
  productCategory: string;
  productDescription: string;
  productId: number;
  productName: string;
  productUnitPrice: number;
}

export interface SelectItem<T = any> {
  label?: string;
  value: T;
  styleClass?: string;
  icon?: string;
  title?: string;
  disabled?: boolean;
}

export interface Blog {
  BlogId: number;
  title: string;
  content: string;
  image: string;
  pCount: number;
}
