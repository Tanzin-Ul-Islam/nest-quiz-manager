import { IsNotEmpty } from "class-validator";

export class CreateQuestionDto {
    @IsNotEmpty({message: "Question required!"})
    question: string;

    @IsNotEmpty({message: "Quiz id required"})
    quizId: number;
}
