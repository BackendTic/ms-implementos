import { Controller, ParseUUIDPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ImplementoService } from './implemento.service';
import { CreateImplementoDto } from './dto/create-implemento.dto';
import { UpdateImplementoDto } from './dto/update-implemento.dto';

@Controller()
export class ImplementoController {
  constructor(private readonly implementoService: ImplementoService) {}

  @MessagePattern('createImplemento')
  create(@Payload() createImplementoDto: CreateImplementoDto) {
    return this.implementoService.create(createImplementoDto);
    
  }

  @MessagePattern('findAllImplemento')
  findAll() {
    return this.implementoService.findAll();
  }

  @MessagePattern('findOneImplemento')
  findOne(id: string) {
    return this.implementoService.findOne(id);
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
