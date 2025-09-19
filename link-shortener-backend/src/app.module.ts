import { Module } from '@nestjs/common';
import { ShortenersModule } from './shorteners/shorteners.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ShortenersModule,
  ],
})
export class AppModule {}
