import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from '@/products';
import { Product, ProductDTOHelpers } from '@/products';

@Injectable()
export class ProductsService {
  public constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const fullUpDTO: CreateProductDto =
      ProductDTOHelpers.fillDTO(createProductDto);
    const entityFormatProduct = this.productRepository.create(fullUpDTO);

    await this.productRepository.save(entityFormatProduct);
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
