import { Transform } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  //?...........................
  //uuid
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  //?...........................
  //todo: centralize @transform logic
  // description
  @Column({ type: 'text' })
  @Transform(({ value }) =>
    value?.length >= 10
      ? value
      : 'A great new product in our shop, specially made for you <3',
  )
  description!: string;

  //?...........................
  //todo: centralize @transform logic
  //images
  @Column({ type: 'text', array: true })
  @Transform(({ value }) =>
    value?.length >= 1
      ? value
      : [
          'https://res.cloudinary.com/dkr08foul/image/upload/v1778102512/WhatsApp_Image_2026-05-05_at_9.43.32_PM_2_eiwwan.jpg',
        ],
  )
  images!: string[];

  //?...........................
  //stock
  @Column({ type: 'numeric', default: 0, nullable: false })
  stock!: number;

  //?...........................
  // price
  @Column({ type: 'numeric', default: 0, nullable: false })
  price!: number;

  //?...........................
  //sizes
  @Column({ type: 'text', array: true, nullable: false })
  sizes!: string[];

  //?...........................
  //slug
  @Column({ type: 'text', nullable: false, unique: true })
  slug!: string;

  //?...........................
  //type
  @Column({ type: 'text', nullable: false })
  type!: string;

  //?...........................
  //todo: centralize @transform logic
  //tags
  @Column({ type: 'text', array: true })
  @Transform(({ value }) =>
    value?.length >= 1 ? value : ['xs', 's', 'm', 'l', 'xl'],
  )
  tags!: string[];

  //?...........................
  //title
  @Column({ type: 'text', nullable: false })
  title!: string[];

  //?...........................
  //gender
  @Column({ type: 'text', nullable: false })
  gender!: string[];
}
