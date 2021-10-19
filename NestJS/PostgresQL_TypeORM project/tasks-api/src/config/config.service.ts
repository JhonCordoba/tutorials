import * as fs from 'fs';
import { parse } from 'dotenv';

/**
 * Its function is load all settings from .env file, when
 * is development enviroment.
 */

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv: boolean = process.env.NODE_ENV !== 'production';

    if (isDevelopmentEnv) {
      const envFilePath: string = __dirname + '/../../.env';
      const existsPath: boolean = fs.existsSync(envFilePath);

      if (!existsPath) {
        console.log('.env file does not exist');
        process.exit(0);
      }

      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      this.envConfig = {
        PORT: process.env.PORT,
      };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
