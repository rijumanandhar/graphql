import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Company')
export class Company extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    logo!: string;

    @Column()
    phone!: string;

}