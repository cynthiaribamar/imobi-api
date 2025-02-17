import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { userTypes } from 'src/types/userTypes';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    findOne(email: string){
        return this.userRepository.findOneBy({email});
    }

    async createUser(payload: userTypes) {
        return await this.userRepository
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(payload)
            .execute()
    }

}
