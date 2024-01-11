import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataBaseInteraction } from '../../prisma/index';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    createUserDto;
    return 'This action adds a new user';
  }

  async findAll() {
    const response = await DataBaseInteraction.user.findMany();
    // response;
    // return `This action returns all user ??`;
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto;
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
