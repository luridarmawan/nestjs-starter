import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Provider } from 'src/server/common/types/user';
import { Order } from '../orders/order.entity';

@ObjectType()
@Entity("auth_users")
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  provider: Provider;

  @Field()
  @Column({ nullable: false })
  providerId: string;

  @Field()
  @Column({ nullable: false })
  username: string;

  @Field()
  @Column({ nullable: true })
  password: string;

  @Field()
  @Column({ nullable: false })
  name?: string;

  @Field((_type) => [Order], { nullable: 'items' })
  @OneToMany((_type) => Order, (order) => order.user)
  orders?: Order[];

  @Field()
  @Column({ type: 'json', nullable: true })
  options: string;

  @Field()
  @Column({ nullable: true })
  ip_addr: string;

  @Field()
  @Column({ nullable: true })
  @CreateDateColumn()
  last_visit: Date;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;

  @Field()
  @Column({ default: 0 })
  status_id: number;
}
