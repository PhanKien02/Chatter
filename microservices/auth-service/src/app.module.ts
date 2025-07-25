import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
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
  }), AuthModule, ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
