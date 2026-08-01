import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from '@/products';
import { Product, ProductDTOHelpers } from '@/products';

@Injectable()
export class ProductsService {
  public constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private logger: Logger,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const fullUpDTO: CreateProductDto =
      ProductDTOHelpers.fillDTO(createProductDto);
    const entityFormatProduct: Product =
      this.productRepository.create(fullUpDTO);
    try {
      const DBResponse: Product =
        await this.productRepository.save(entityFormatProduct);
      return DBResponse;
    } catch (error: any) {
      this.logger.error(
        error.detail,
        'Product Service - create funtion - Error adding a new product',
      );
      throw new ConflictException(error.detail);
    }
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
//
