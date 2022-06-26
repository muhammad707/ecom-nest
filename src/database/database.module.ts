import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "src/config/configuration";
import { databaseProviders } from "./database.providers";

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
  imports: [ConfigModule.forRoot({
    load: [configuration]
  })]
})
export class DatabaseModule { }