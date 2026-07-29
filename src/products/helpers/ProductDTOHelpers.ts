import { CreateProductDto } from '@/products';

export class ProductDTOHelpers {
  public static fillDTO = (
    createProductDto: CreateProductDto,
  ): CreateProductDto => {
    return {
      ...createProductDto,
      description: ProductDTOHelpers.addDTODefaultDescription(),
      images: ProductDTOHelpers.addDTODefaultImages(),
      tags: ProductDTOHelpers.addDTODefaultTags(),
    };
  };

  private static addDTODefaultDescription = (): string => {
    return 'A great new product in our shop, specially made for you <3';
  };

  private static addDTODefaultImages = (): string[] => {
    return [
      'https://res.cloudinary.com/dkr08foul/image/upload/v1778102512/WhatsApp_Image_2026-05-05_at_9.43.32_PM_2_eiwwan.jpg',
    ];
  };

  private static addDTODefaultTags = (): string[] => {
    return ['xs', 's', 'm', 'l', 'xl'];
  };
}
