import { Test, TestingModule } from '@nestjs/testing';
import { UploadCloudinaryController } from './upload-cloudinary.controller';
import { UploadCloudinaryService } from './upload-cloudinary.service';

describe('UploadCloudinaryController', () => {
  let controller: UploadCloudinaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadCloudinaryController],
      providers: [UploadCloudinaryService],
    }).compile();

    controller = module.get<UploadCloudinaryController>(UploadCloudinaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
