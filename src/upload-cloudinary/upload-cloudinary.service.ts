import { Injectable } from '@nestjs/common';
import { CreateUploadCloudinaryDto } from './dto/create-upload-cloudinary.dto';
import { UpdateUploadCloudinaryDto } from './dto/update-upload-cloudinary.dto';

@Injectable()
export class UploadCloudinaryService {
  create(createUploadCloudinaryDto: CreateUploadCloudinaryDto) {
    // createUploadCloudinaryDto;
    const { image } = createUploadCloudinaryDto;

    return { image };
  }

  findAll() {
    return `This action returns all uploadCloudinary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadCloudinary`;
  }

  update(id: number, updateUploadCloudinaryDto: UpdateUploadCloudinaryDto) {
    updateUploadCloudinaryDto;
    return `This action updates a #${id} uploadCloudinary`;
  }

  remove(id: number) {
    return `This action removes a #${id} uploadCloudinary`;
  }
}
