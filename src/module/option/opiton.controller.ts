import { Controller, Get, Post, UsePipes, ValidationPipe, Body } from "@nestjs/common";
import { OptionService } from "./opiton.service";
import { CreateOptionDto } from "./dto/create-option.dto";

@Controller('option')
export class OpitonController{
    constructor(private readonly optionService: OptionService){}

    @Post()
    @UsePipes(new ValidationPipe())
    async createOption(@Body() createOptionDto: CreateOptionDto){
        return await this.optionService.createOption(createOptionDto);
    }
    @Get()
    async getAllOption(){
        return await this.optionService.getAllOption();
    }
}