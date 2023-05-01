import { Module } from '@nestjs/common';
import { QuizModule } from './module/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'config/typeOrmConfig';
import { QuestionModule } from './module/question/question.module';
import { OptionModule } from './module/option/option.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    QuizModule,
    QuestionModule,
    OptionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
