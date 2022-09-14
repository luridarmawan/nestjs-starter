import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity('auth_sessions')
export class Session {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Field()
  @Column({ nullable: false })
  token: string;

  @Field()
  @Column({ default: 0 })
  user_id: number;

  @Field()
  @Column({ nullable: true })
  ip_addr: string;

  @Field()
  @Column({ nullable: true })
  @CreateDateColumn()
  last_visit: Date;

  @Field()
  @Column({ nullable: true })
  vars: string;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
