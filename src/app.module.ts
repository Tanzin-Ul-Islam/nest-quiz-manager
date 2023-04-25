import { Module } from '@nestjs/common';
import { QuizModule } from './module/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeOrmConfig';
import { QuestionModule } from './module/question/question.module';
import { OptionModule } from './module/option/option.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    QuizModule,
    QuestionModule,
    OptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
