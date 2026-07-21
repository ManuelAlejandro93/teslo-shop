import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  //description
  @IsOptional()
  @IsString()
  @MinLength(10)
  description: string;

  //images
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  images?: string[];

  //stock
  @IsNumber()
  @IsPositive()
  stock: number;

  //price
  @IsNumber()
  @Min(0)
  price: number;

  //sizes
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  sizes: string[];

  //slug
  @IsString()
  @MinLength(10)
  slug: string;

  //type
  @IsString()
  @MinLength(3)
  type: string;

  //tags
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  tags: string[];

  //title
  @IsString()
  @MinLength(3)
  title: string;

  //gender
  @IsString()
  @MinLength(3)
  gender: string;
}
