import { Module } from "@nestjs/common";
import { OpitonController } from "./opiton.controller";
import { OptionService } from "./opiton.service";
import { Option } from "./entity/opiton.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OptionRepository } from "./opiton.repository";
@Module({
    controllers:[OpitonController],
    imports:[TypeOrmModule.forFeature([Option])],
    providers:[OptionService, OptionRepository],
})
export class OptionModule{}