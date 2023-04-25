import { Controller, Get } from "@nestjs/common";
import { OptionService } from "./opiton.service";

@Controller('option')
export class OpitonController{
    constructor(private readonly optionService: OptionService){}
    @Get()
    async getAllOption(){
        return await this.optionService.getAllOption();
    }
}