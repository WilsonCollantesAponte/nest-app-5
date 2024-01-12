import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // Req,
  // Res,
} from '@nestjs/common';
import { UploadCloudinaryService } from './upload-cloudinary.service';
import { CreateUploadCloudinaryDto } from './dto/create-upload-cloudinary.dto';
import { UpdateUploadCloudinaryDto } from './dto/update-upload-cloudinary.dto';
import {} from //  Request,
// Response,
'express';

@Controller('upload-cloudinary')
export class UploadCloudinaryController {
  constructor(
    private readonly uploadCloudinaryService: UploadCloudinaryService,
  ) {}

  @Post()
  create(
    @Body() createUploadCloudinaryDto: CreateUploadCloudinaryDto,
    // @Res() response: Response,
  ) {
    // create(@Req() request: Request, @Res() response: Response) {
    // return this.uploadCloudinaryService.create(createUploadCloudinaryDto);
    // const data = request.body;
    // return response.status(200).send('from upload-cloudinary');
    // return response.status(200).json({ createUploadCloudinaryDto });
    return { aditional: 'add', createUploadCloudinaryDto };
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
  update(
    @Param('id') id: string,
    @Body() updateUploadCloudinaryDto: UpdateUploadCloudinaryDto,
  ) {
    return this.uploadCloudinaryService.update(+id, updateUploadCloudinaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadCloudinaryService.remove(+id);
  }
}
