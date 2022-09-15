import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request } from 'express';
import { util } from 'prettier';
const utils = require('../../utils/utils');
const Constants = require('./../../constants');
//const logger = require('../../utils/logger');
//const utils = import('../../utils/utils');

@Controller('auth')
export class AuthController {
  @Get()
  async auth(@Res() res) {
    return res.redirect('/auth/cognito');
  }

  @Post('login')
  async login(@Req() req: Request) {
    return utils.Output(0, 'OK', req.body);
  }

  @Post('logout')
  async logout(@Req() req: Request) {
    return utils.Output(400, Constants.ERR_NOT_PERMITTED, req.body);
  }

  @Post('register')
  async register(@Req() req: Request) {
    return utils.Output(400, Constants.ERR_NOT_PERMITTED, req.body);
  }
}
