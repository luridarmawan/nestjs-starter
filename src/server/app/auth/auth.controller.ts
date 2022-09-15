import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request } from 'express';
const utils = require('../../utils/utils');
//const logger = require('../../utils/logger');
//const Constant = require('../../constants');
//const utils = import('../../utils/utils');

@Controller('auth')
export class AuthController {
  @Get()
  async auth(@Res() res) {
    return res.redirect('/auth/cognito');
  }

  @Post('login')
  async login(@Req() req: Request) {
    return req.body;
  }

  @Post('logout')
  async logout(@Req() req: Request) {
    return req.body;
  }

  @Post('register')
  async register(@Req() req: Request) {
    return req.body;
  }
}
