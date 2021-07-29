import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, name, username, password } = configService.database;
        return {
          type: 'postgres',
          host,
          database: name,
          password,
          username,
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: false,
          migrationsTableName: 'migrations',
          migrations: ['src/database/migrations/*.ts'],
          cli: {
            migrationsDir: 'src/database/migrations',
          },
        };
      },
      inject: [config.KEY],
    }),
  ],
})
export class DatabaseModule {}
