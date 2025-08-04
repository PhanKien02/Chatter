import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: "user-db",
    port: 3306,
    username: "user_user",
    password: "user_pass",
    database: "user_db",
    synchronize: true,
    autoLoadEntities: true
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
