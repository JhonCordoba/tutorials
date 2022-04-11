import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TasksModule, ConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  public static port: number | string;
  private readonly _configService: ConfigService;

  constructor(_configService: ConfigService) {
    this._configService = _configService;
    AppModule.port = _configService.get(Configuration.PORT);
  }
}
