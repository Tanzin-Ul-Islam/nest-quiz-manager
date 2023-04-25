import { IsEmpty, IsNotEmpty } from "class-validator";

export class CreateOptionDto{
    @IsNotEmpty({message:'Text required!'})
    text: string;

    @IsNotEmpty({message:'isCorrect required!'})
    isCorrect: boolean;

    @IsNotEmpty({message: 'questionId required'})
    questionId: number;
}