import { Controller, Get, Post, Delete, Body, Param, Put } from "@nestjs/common";
import { PropertyService } from "./property.service";
import { Property } from "./property.entity";

@Controller('/properties')
export class PropertyController {
    constructor(private readonly propertyService: PropertyService) { }

    @Get()
    getAll() {
        return this.propertyService.getAll();
    }

    @Get(":id")
    getById(@Param() params: any){
        return this.propertyService.getById(params.id);
    }

    @Post()
    registerProperty(@Body() property: Property) {
        return this.propertyService.register(property);
    }

    @Delete(":id")
    deleteProperty(@Param() params: any) {
        return this.propertyService.delete(params.id);
    }

    @Put(":id")
    updateProperty(@Param() params: any, @Body() payload: Property){
        return this.propertyService.update(params.id, payload)
    }
};