import { Module } from "@nestjs/common";
import { PropertyController } from "./property.controller";
import { PropertyService } from "./property.service";
import { Property } from "./property.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Property])],
    providers: [PropertyService],
    controllers: [PropertyController]
})

export class PropertyModule { }