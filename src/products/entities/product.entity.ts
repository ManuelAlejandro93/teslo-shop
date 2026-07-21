import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true, type: 'text' })
  titulo: string;
  @Column({ type: 'numeric', default: 0 })
  price: string;
  @Column({ type: 'text', default: 'No tengo nada', nullable: false })
  description: string;
}
