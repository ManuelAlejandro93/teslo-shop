import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class AllProductPaginationDTO {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(2)
  @Max(5)
  public limit?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  public offset?: number;
}
