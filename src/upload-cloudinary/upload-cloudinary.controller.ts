import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UploadCloudinaryService } from './upload-cloudinary.service';
import { CreateUploadCloudinaryDto } from './dto/create-upload-cloudinary.dto';
import { UpdateUploadCloudinaryDto } from './dto/update-upload-cloudinary.dto';

@Controller('upload-cloudinary')
export class UploadCloudinaryController {
  constructor(private readonly uploadCloudinaryService: UploadCloudinaryService) {}

  @Post()
  create(@Body() createUploadCloudinaryDto: CreateUploadCloudinaryDto) {
    return this.uploadCloudinaryService.create(createUploadCloudinaryDto);
  }

  @Get()
  findAll() {
    return this.uploadCloudinaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadCloudinaryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadCloudinaryDto: UpdateUploadCloudinaryDto) {
    return this.uploadCloudinaryService.update(+id, updateUploadCloudinaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadCloudinaryService.remove(+id);
  }
}
