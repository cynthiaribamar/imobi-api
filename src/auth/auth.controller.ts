import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userTypes } from 'src/types/userTypes';

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("register")
    async createUser(@Body() payload: userTypes) {
        return await this.authService.register(payload);
    }

    @Post("login")
    async login(@Body() payload: userTypes){
        return await this.authService.signIn(payload)
    }
}
