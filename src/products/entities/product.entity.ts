import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  //uuid
  @PrimaryGeneratedColumn('uuid')
  id: string;
  // description
  @Column({ type: 'text', nullable: true })
  description: string;
  // price
  @Column({ type: 'numeric', default: 0, nullable: false })
  price: string;
}
