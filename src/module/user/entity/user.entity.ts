import { Column, PrimaryGeneratedColumn } from "typeorm";
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:'varchar'})
    name: string;
}