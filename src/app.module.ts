import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [TasksModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
