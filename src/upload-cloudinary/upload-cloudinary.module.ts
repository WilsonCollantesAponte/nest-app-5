import { Module } from '@nestjs/common';
import { UploadCloudinaryService } from './upload-cloudinary.service';
import { UploadCloudinaryController } from './upload-cloudinary.controller';

@Module({
  controllers: [UploadCloudinaryController],
  providers: [UploadCloudinaryService],
})
export class UploadCloudinaryModule {}
