import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "src/module/quiz/entity/quiz.entity";
import { Option } from "src/module/option/entity/opiton.entity";
@Entity('questions')
export class Question extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    question: string;

    @ManyToOne(()=>Quiz, (quiz)=> quiz.questions)
    quiz: Quiz;

    @OneToMany(()=>Option, (option)=>option.question)
    options: Option[]


}