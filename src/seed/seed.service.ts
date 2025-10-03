import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productService: ProductsService) {}
  async runSeed() {
    await this.productService.deleteAllProducts();
    const products = initialData.products;
    const insertedPromises = products.map((product) =>
      this.productService.create(product),
    );
    await Promise.allSettled(insertedPromises);
    return 'seed';
  }
}
