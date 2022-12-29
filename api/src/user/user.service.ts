import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { SearchUserDto } from './dto/search-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  findByCondition(condition: LoginUserDto) {
    return this.repository.findOneBy(condition);
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }

  async search(dto: SearchUserDto) {
    const queryBuilder = this.repository.createQueryBuilder('u');
    queryBuilder.limit(dto.limit || 0);
    queryBuilder.take(dto.take || 10);

    if (dto.fullName) {
      queryBuilder.andWhere(`u.fullName ILIKE :fullName`);
    }

    if (dto.email) {
      queryBuilder.andWhere(`u.email ILIKE :email`);
    }

    queryBuilder.setParameters({
      fullName: `%${dto.fullName}%`,
      email: `%${dto.email}%`,
    });

    const [items, total] = await queryBuilder.getManyAndCount();

    return {
      items,
      total,
    };
  }
}
