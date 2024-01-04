import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    fullname!: string;

    @Column()
    email!: string;

    @Column()
    photo!: string;

    @Column()
    phone!: string;

    // @Column()
    // companyId!: number;

}