import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import storageFileLocal from 'src/common/multer/upload-local.multer';
import { ResponseMessage } from 'src/common/decorator/response-message.decorator';
import { Public } from 'src/common/decorator/public.decorator';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Public()
  @ResponseMessage(`successfully updated file locally`)
  @Post(`file-local`)
  @UseInterceptors(FileInterceptor('img', { storage: storageFileLocal }))
  uploadFileLocal(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return file.filename;
  }
}
