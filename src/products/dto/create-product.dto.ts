import { Transform } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsIn,
  IsInt,
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
  @Transform(({ value }) =>
    value?.length >= 10
      ? value
      : 'A great new product in our shop, specially made for you <3',
  )
  description?: string;

  //images
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @Transform(({ value }) =>
    value?.length >= 1
      ? value
      : [
          'https://res.cloudinary.com/dkr08foul/image/upload/v1778102512/WhatsApp_Image_2026-05-05_at_9.43.32_PM_2_eiwwan.jpg',
        ],
  )
  images?: string[];

  //stock
  @IsInt()
  @IsPositive()
  stock!: number;

  //price
  @IsNumber()
  @Min(0)
  price!: number;

  //sizes
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  sizes!: string[];

  //slug
  @IsString()
  @MinLength(10)
  slug!: string;

  //type
  @IsString()
  @MinLength(3)
  type!: string;

  //tags
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @Transform(({ value }) =>
    value?.length >= 1 ? value : ['xs', 's', 'm', 'l', 'xl'],
  )
  tags!: string[];

  //title
  @IsString()
  @MinLength(3)
  title!: string;

  //gender
  @IsString()
  @MinLength(3)
  @IsIn(['men', 'woman', 'boy', 'girl'])
  gender!: string;
}
