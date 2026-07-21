import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  //uuid
  @PrimaryGeneratedColumn('uuid')
  id: string;
  // description
  @Column({ type: 'text', nullable: true })
  description: string;
  //images
  @Column({ type: 'text', array: true, nullable: true })
  images: string[];
  //stock
  @Column({ type: 'numeric', default: 0, nullable: false })
  stock: number;
  // price
  @Column({ type: 'numeric', default: 0, nullable: false })
  price: number;
  //sizes
  @Column({ type: 'text', array: true, nullable: false })
  sizes: string[];
  @Column({ type: 'text', nullable: false, unique: true })
  //slug
  slug: string;
  //type
  @Column({ type: 'text', nullable: false })
  type: string;
  //tags
  @Column({ type: 'text', array: true, default: [], nullable: true })
  tags: string[];
  //title
  @Column({ type: 'text', nullable: false })
  title: string[];
  //gender
  @Column({ type: 'text', nullable: false })
  gender: string[];
}
