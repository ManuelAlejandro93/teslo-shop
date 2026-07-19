import { initialData, SeedData } from '@/seed';

export class SeedHelpers {
  private static seed: SeedData = { products: [] };
  public static startSeed = (): void => {
    SeedHelpers.seed = initialData;
  };
  public static getSeed = (): SeedData => {
    return SeedHelpers.seed;
  };
}
