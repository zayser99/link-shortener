import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShortenerDto } from './dto/create-shortener.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShortenersService {
  constructor(private prisma: PrismaService) {}

  async create(createShortenerDto: CreateShortenerDto, baseUrl: string) {
    const { originalUrl } = createShortenerDto;
    const hash = Math.random().toString(36).substring(2, 8);
    const savedUrl = await this.prisma.url.create({
      data: { originalUrl, hash },
    });
    return { shortUrl: `${baseUrl}/${savedUrl.hash}` };
  }

  async findOne(hash: string) {
    const urlRecord = await this.prisma.url.findUnique({
      where: { hash },
    });

    if (!urlRecord) {
      throw new NotFoundException(`No existe Url para el código "${hash}"`);
    }

    return urlRecord.originalUrl;
  }
}
