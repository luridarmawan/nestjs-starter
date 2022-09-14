import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
//const logger = require('../../utils/logger');
const utils = require('../../utils/utils');
const Constant = require('../../constants');

@Controller('auth')
export class AuthController {
  @Get()
  async auth(@Res() res) {
    return res.redirect('/auth/cognito');
  }

  @Post('login')
  async login(@Req() req: Request) {

    return utils.Output(400, Constant.ERR_NOT_PERMITTED);
  }

  @Post('logout')
  async logout(@Req() req: Request) {

    return utils.Output(400, Constant.ERR_NOT_PERMITTED);
  }

  @Post('register')
  async register(@Req() req: Request) {

    return utils.Output(400, Constant.ERR_NOT_PERMITTED);
  }
}
