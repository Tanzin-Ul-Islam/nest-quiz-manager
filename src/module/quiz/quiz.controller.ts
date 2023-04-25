import { Controller, Get, Post, Patch, Delete, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';


@Controller('quiz')
export class QuizController {
    constructor(private quizSerivce: QuizService) { }

    @Post('')
    @UsePipes(new ValidationPipe())
    async createQuiz(@Body() dto: CreateQuizDto) {
        const response = await this.quizSerivce.createQuiz(dto)
        return {
            'quiz': response
        }
    }

    @Get('')
    async getAllQuiz() {
        const response = await this.quizSerivce.getAllQuiz();
        return {
            'quiz': response
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const response = await this.quizSerivce.findOne(Number(id));
        return response;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
        const response = await this.quizSerivce.update(Number(id), updateQuizDto);
        return response;
    }

    @Delete(':id')
    async remove(@Param() id:string){
        const response = await this.quizSerivce.remove(Number(id));
        return response;
    }
}
