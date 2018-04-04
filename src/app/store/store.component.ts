import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-store',
  moduleId: module.id,
  templateUrl: 'store.component.html'
})

export class StoreComponent {

  private defaultPage = 1;
  public selectedCategory: string = null;
  public productsPerPage = 4;
  public selectedPage = this.defaultPage;

  constructor(private repository: ProductRepository) { }

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(this.defaultPage);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newPageSize: number) {
    this.productsPerPage = Number(newPageSize);
    this.changePage(this.defaultPage);
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
  }
}
