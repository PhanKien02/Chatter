import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: 'admin',
    database: 'taleNet',
    synchronize: true,
    autoLoadEntities: true
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
