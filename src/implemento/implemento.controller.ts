import { BadRequestException, Controller, InternalServerErrorException, NotFoundException, ParseUUIDPipe, UploadedFile, UseInterceptors } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ImplementoService } from './implemento.service';
import { CreateImplementoDto } from './dto/create-implemento.dto';
import { UpdateImplementoDto } from './dto/update-implemento.dto';

@Controller()
export class ImplementoController {
  constructor(private readonly implementoService: ImplementoService) {}

  @MessagePattern('createImplemento')
  create(@Payload() createImplementoDto: CreateImplementoDto) {
    try {
      console.log(createImplementoDto);
      
      return this.implementoService.create(createImplementoDto);
    } catch (error) {
      throw new BadRequestException(error.message)
    }
    
  }

  @MessagePattern('findAllImplemento')
  findAll() {
    return this.implementoService.findAll();
  }

  @MessagePattern('findOneImplemento')
  async findOne(id: string) {
  try {
    return await this.implementoService.findOne(id);
  } catch (error) {
    throw new InternalServerErrorException(error.message); 
  }
}

  @MessagePattern('updateImplemento')
  update(@Payload() updateImplementoDto: UpdateImplementoDto) {
    return this.implementoService.update(updateImplementoDto.id, updateImplementoDto);
  }

  @MessagePattern('removeImplemento')
  remove(@Payload() id: string) {
    return this.implementoService.remove(id);
  }
}
