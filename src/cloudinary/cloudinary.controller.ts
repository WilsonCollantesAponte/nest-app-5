import { Body, Controller, Get, Post } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post()
  create(@Body() data: any) {
    // const response = this.cloudinaryService.create(data);

    return { response: this.cloudinaryService.create(data) };
  }

  @Get()
  find() {
    return 'Here is cloudinary route - GET';
  }
}
