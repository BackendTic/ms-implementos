import { BadRequestException, Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateImplementoDto } from './dto/create-implemento.dto';
import { UpdateImplementoDto } from './dto/update-implemento.dto';
import { PrismaClient, TipoImplemento } from '@prisma/client';

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
    return this.implemento.findMany({
      where:{estado: true}
    });
  }

  async findOne(id: string) {
    const implemento = await this.implemento.findUnique({
      where: { id, estado:true  },
    });
    return implemento
  }

  update(id: string, updateImplementoDto: UpdateImplementoDto) {
    return this.implemento.update({
      where: { id },
      data: updateImplementoDto,
    });
  }

 remove(id: string) {
  return this.implemento.update({
    where: { id},
    data: {
      estado:false
    },
  });
  }

  findImplementsDiscipline(Disciplina: TipoImplemento) {
    return this.implemento.findMany({
      where:{disciplina: Disciplina, estado:true}
    });
  }
}
