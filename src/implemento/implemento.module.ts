import { Module } from '@nestjs/common';
import { ImplementoService } from './implemento.service';
import { ImplementoController } from './implemento.controller';

@Module({
  controllers: [ImplementoController],
  providers: [ImplementoService],
})
export class ImplementoModule {}
