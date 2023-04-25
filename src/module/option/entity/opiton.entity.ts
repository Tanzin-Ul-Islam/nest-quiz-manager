import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Question } from "src/module/question/entities/question.entity";
@Entity('options')
export class Option{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'text'})
    text: string;

    @Column({type: 'boolean'})
    isCorrect: boolean;

    @ManyToOne(()=>Question, (question)=>question.options)
    question:Question;
}