import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
@ObjectType()
export class Book {
  @Field(() => Int, { description: 'my primary key xD' })
  /**
   * My primary key
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Name of my book' })
  /**
   * Name of the book!
   */
  name: string;

  @Field(() => Int, { description: 'my example field' })
  /**
   *My example field
   */
  exampleField: number;
}
