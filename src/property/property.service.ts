import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Property } from "./property.entity";
import { Repository } from "typeorm";
@Injectable()
export class PropertyService {
    constructor(
        @InjectRepository(Property)
        private propertyRepository: Repository<Property>,
    ) { }

    getAll() {
        return this.propertyRepository.find();
    }

    getById(id: number) {
        return this.propertyRepository.findOneBy({ id });
    }

    async register(property) {
        return await this.propertyRepository
            .createQueryBuilder()
            .insert()
            .into(Property)
            .values(property)
            .execute()
    }

    async delete(id: number) {
        await this.propertyRepository.delete(id)
    }

    async update(id: number, payload: Property) {
        await this.propertyRepository
            .createQueryBuilder()
            .update()
            .set(payload)
            .where("id = :id", { id: id })
            .execute()
    }
}