import { ApiProperty } from '@nestjs/swagger';

export class FileUploadAvatarDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
