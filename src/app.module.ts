import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { dbRoot, ormDB } from './dbCon/dbCon';

@Module({
  imports: [dbRoot, ormDB, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
