import { Transform } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  //?...........................
  //uuid
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  //?...........................
  // description
  @Column({ type: 'text' })
  description!: string;

  //?...........................
  //images
  @Column({ type: 'text', array: true })
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
  //tags
  @Column({ type: 'text', array: true })
  tags!: string[];

  //?...........................
  //title
  @Column({ type: 'text', nullable: false })
  title!: string;

  //?...........................
  //gender
  @Column({ type: 'text', nullable: false })
  gender!: string;
}
