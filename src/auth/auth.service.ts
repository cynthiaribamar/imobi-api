import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { userTypes } from '../types/userTypes';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async register({ email, password, name }: userTypes) {
        const user = await this.userService.findOne(email);

        if (user) {
            throw new ConflictException();
        }

        const encryptedPass = await bcrypt.hash(password, 10);

        return this.userService.createUser({ email, password: encryptedPass, name });
    }

    async signIn({ email, password }: userTypes) {
        const user = await this.userService.findOne(email);

        if (!user) {
            throw new NotFoundException("user not found");
        }

        const matches = await bcrypt.compare(password, user.password);

        if (matches) {
            const payload = { email: user.email, username: user.name };
            const token = await this.jwtService.signAsync(payload);
            return token;
        }
    }
}
