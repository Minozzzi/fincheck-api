import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findMany(findMany: Prisma.CategoryFindManyArgs) {
    return this.prismaService.category.findMany(findMany);
  }
}
