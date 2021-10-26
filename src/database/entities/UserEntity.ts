import 'reflect-metadata';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id!: string;
  @Column()
  name!: string;

  @CreateDateColumn()
  readonly createdAt!: Date;
  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
