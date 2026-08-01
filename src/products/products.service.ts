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

  async findAll(): Promise<Product[]> {
    try {
      const allProducts: Product[] = await this.productRepository.find();
      return allProducts;
    } catch (error: any) {
      this.logger.error(
        error?.detail
          ? error.detail
          : 'Product Service - findAll - Error getting all products',
      );
      throw new ConflictException(
        error?.detail ? error.detail : 'Error getting all products',
      );
    }
  }

  async findOne(uuid: string): Promise<Product[]> {
    try {
      const singleProductID: Product[] = await this.productRepository.findBy({
        id: uuid,
      });
      return singleProductID;
    } catch (error: any) {
      this.logger.error(
        error?.detail
          ? error.detail
          : 'Product Service - findOne - Error getting single product by ID',
      );

      throw new ConflictException(
        error?.detail ? error.detail : 'Error getting single product by ID',
      );
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
//
