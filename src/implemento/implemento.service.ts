import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateImplementoDto } from './dto/create-implemento.dto';
import { UpdateImplementoDto } from './dto/update-implemento.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ImplementoService extends PrismaClient implements OnModuleInit{

  private readonly logger = new Logger()
  
  async onModuleInit() {
    await this.$connect()
    this.logger.log('Database conected')
  }

  create(createImplementoDto: CreateImplementoDto) {
    return this.implemento.create({
      data: createImplementoDto
    });
  }

  findAll() {
    return this.implemento.findMany({});
  }

  findOne(id: string) {
    return this.implemento.findUnique({
      where: { id },
    });
  }

  update(id: string, updateImplementoDto: UpdateImplementoDto) {
    return this.implemento.update({
      where: { id },
      data: updateImplementoDto,
    });
  }

 remove(id: string) {
  return this.implemento.update({
    where: { id },
    data: {
      estado:false
    },
  });
  }
}
