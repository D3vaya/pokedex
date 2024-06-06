import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adaptar';

@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
})
export class CommonModule {}
