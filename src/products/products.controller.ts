import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  CreateProductDto,
  UpdateProductDto,
  AllProductPaginationDTO,
} from '@/products';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query() allProductPaginationDTO: AllProductPaginationDTO) {
    return this.productsService.findAll(allProductPaginationDTO);
  }

  @Get(':uuid')
  findOne(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.productsService.findOne(uuid);
  }

  @Patch(':uuid')
  update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(uuid, updateProductDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.productsService.remove(uuid);
  }
}
