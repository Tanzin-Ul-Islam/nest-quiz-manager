import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('options')
export class Option{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'text'})
    text: string;

    @Column({type: 'boolean'})
    isCorrect: boolean;
}