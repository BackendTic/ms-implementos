import { Module } from '@nestjs/common';
import { ImplementoModule } from './implemento/implemento.module';

@Module({
  imports: [ImplementoModule],
})
export class AppModule {}
 