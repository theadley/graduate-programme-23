import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradsModule } from './grads/grads.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GradsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('grads');
  }
}
