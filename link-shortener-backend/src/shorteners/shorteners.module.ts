import { Module } from '@nestjs/common';
import { ShortenersService } from './shorteners.service';
import { ShortenersController } from './shorteners.controller';

@Module({
  controllers: [ShortenersController],
  providers: [ShortenersService],
})
export class ShortenersModule {}
