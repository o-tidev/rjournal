import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}

  create(dto: CreatePostDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findPopular() {
    const queryBuilder = this.repository.createQueryBuilder();
    queryBuilder.orderBy('views', 'DESC');
    queryBuilder.limit(10);
    const [items, total] = await queryBuilder.getManyAndCount();

    return {
      items,
      total,
    };
  }

  async search(dto: SearchPostDto) {
    const queryBuilder = this.repository.createQueryBuilder('search');
    queryBuilder.limit(dto.limit || 0);
    queryBuilder.take(dto.take || 10);

    if (dto.views) {
      queryBuilder.orderBy('views', dto.views);
    }

    if (dto.body) {
      queryBuilder.andWhere(`search.body ILIKE :body`);
    }

    if (dto.title) {
      queryBuilder.andWhere(`search.title ILIKE :title`);
    }

    if (dto.tag) {
      queryBuilder.andWhere(`search.tag ILIKE :tag`);
    }

    queryBuilder.setParameters({
      title: `%${dto.title}%`,
      body: `%${dto.body}%`,
      tag: `%${dto.tag}%`,
      views: dto.views || 'DESC',
    });

    const [items, total] = await queryBuilder.getManyAndCount();

    return {
      items,
      total,
    };
  }

  async findOne(id: number) {
    const find = await this.repository.findOneBy({ id });
    if (!find) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return find;
  }

  async update(id: number, dto: UpdatePostDto) {
    const find = await this.repository.findOneBy({ id });
    if (!find) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return this.repository.update(id, dto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
