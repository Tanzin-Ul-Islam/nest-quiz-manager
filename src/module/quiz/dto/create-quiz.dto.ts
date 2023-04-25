import { IsEmpty, IsNotEmpty } from "class-validator";

export class CreateQuizDto{
    @IsNotEmpty({message: 'Title is required'})
    title: string;

    @IsEmpty()
    description: string;
}