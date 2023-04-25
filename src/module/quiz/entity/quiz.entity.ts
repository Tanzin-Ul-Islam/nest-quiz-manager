import { BaseEntity, OneToMany } from 'typeorm'
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'
import { Question } from 'src/module/question/entities/question.entity';
@Entity('quizes')
export class Quiz extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    title: string;

    @Column({ type: "text" })
    description: string;
    
    @OneToMany(() => Question, (question) => question.quiz)
    questions: Question[];
}