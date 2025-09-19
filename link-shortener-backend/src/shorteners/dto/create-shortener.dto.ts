import { IsUrl } from 'class-validator';

export class CreateShortenerDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsUrl({}, { message: 'La URL proporcionada no es válida' })
  originalUrl: string;
}
