import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()//sql table will be generated with name of class 'coffee'(lowercase!!)
// the name of the sql table will be the name you pass it as a parameter to the @Entity decorator. 
export class Coffee
{
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	brand: string;

	@Column('json', {nullable: true})
	flavors: string[];
}