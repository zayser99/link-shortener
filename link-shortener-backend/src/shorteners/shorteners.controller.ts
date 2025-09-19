import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import express from 'express';
import { ShortenersService } from './shorteners.service';
import { CreateShortenerDto } from './dto/create-shortener.dto';

@Controller()
export class ShortenersController {
  constructor(private readonly shortenersService: ShortenersService) {}

  @Post('/api/shorten')
  @UsePipes(new ValidationPipe())
  create(
    @Body() createShortenerDto: CreateShortenerDto,
    @Req() req: express.Request,
  ) {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    return this.shortenersService.create(createShortenerDto, baseUrl);
  }

  @Get('/:shortCode')
  async findOne(
    @Param('shortCode') shortCode: string,
    @Res() res: express.Response,
  ) {
    const url = await this.shortenersService.findOne(shortCode);
    return res.redirect(302, url);
  }
}
