import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
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

  async findOne(uuid: string): Promise<Product> {
    try {
      const singleProduct: Product | null =
        await this.productRepository.findOneBy({
          id: uuid,
        });

      if (!singleProduct) {
        throw new NotFoundException(`Product with ${uuid} not found`);
      }
      return singleProduct;
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

  async update(uuid: string, updateProductDto: UpdateProductDto) {
    try {
      const oldSingleProduct: Product | null =
        await this.productRepository.findOneBy({
          id: uuid,
        });

      if (!oldSingleProduct) {
        throw new NotFoundException(`Product with ${uuid} not found`);
      }

      const updatedProduct = this.productRepository.merge(
        oldSingleProduct,
        updateProductDto,
      );

      const updatedUserInDB = await this.productRepository.save(updatedProduct);

      return updatedUserInDB;
    } catch (error: any) {
      this.logger.error(
        error?.detail
          ? error.detail
          : 'Product Service - update - Error updating a single product',
      );

      throw new ConflictException(
        error?.detail
          ? error.detail
          : 'Product Service - update - Error updating a single product',
      );
    }
  }

  async remove(uuid: string) {
    try {
      await this.findOne(uuid);
      await this.productRepository.delete(uuid);
      return {
        status: 'success',
        message: `Product with uuid ${uuid} deleted successfully.`,
      };
    } catch (error: any) {
      this.logger.error(
        error?.detail
          ? error.detail
          : 'Product Service - remove - Error deleting a single product',
      );

      throw new ConflictException(
        error?.detail
          ? error.detail
          : 'Product Service - remove - Error deleting a single product',
      );
    }
  }
}
//
