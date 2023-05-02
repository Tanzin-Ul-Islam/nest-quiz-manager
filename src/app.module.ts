import { Module } from '@nestjs/common';
import { QuizModule } from './module/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'config/typeOrmConfig';
import { ConfigModule } from '@nestjs/config';
import { QuestionModule } from './module/question/question.module';
import { OptionModule } from './module/option/option.module';
import { UserModule } from './module/user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    QuizModule,
    QuestionModule,
    OptionModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
