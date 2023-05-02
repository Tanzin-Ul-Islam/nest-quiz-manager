import { Column, CreateDateColumn, PrimaryGeneratedColumn, Entity, BaseEntity } from "typeorm";
@Entity('user')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:'varchar'})
    name: string;
    @Column({unique: true})
    email: string;
    @Column({type:'varchar'})
    password: string;
    @CreateDateColumn()
    createdAt: Date;
    @CreateDateColumn()
    updatedAt: Date;
}