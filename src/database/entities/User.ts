import 'reflect-metadata';

import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn('uuid')
  id!: string;
  @Column()
  name!: string;
}
