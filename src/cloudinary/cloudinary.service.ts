import { Injectable } from '@nestjs/common';

@Injectable()
export class CloudinaryService {
  create(data: any) {
    // data;
    return { data };
  }
}
