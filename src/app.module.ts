import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    PassportModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver, LocalStrategy],
})
export class AppModule {}
