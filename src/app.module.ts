import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { UploadCloudinaryModule } from './upload-cloudinary/upload-cloudinary.module';

@Module({
  imports: [UserModule, CloudinaryModule, UploadCloudinaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
