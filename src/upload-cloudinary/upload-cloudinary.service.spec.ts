import { Test, TestingModule } from '@nestjs/testing';
import { UploadCloudinaryService } from './upload-cloudinary.service';

describe('UploadCloudinaryService', () => {
  let service: UploadCloudinaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadCloudinaryService],
    }).compile();

    service = module.get<UploadCloudinaryService>(UploadCloudinaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
