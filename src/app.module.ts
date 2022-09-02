import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesModule } from './coffees/coffees.module';
import {TypeOrmModule} from '@nestjs/typeorm';

//* Decorators can be applied to classes, methods, parameters, properties, and variables.
@Module({//@Module is a decorator that tells Nest that this class is a module. the @Module() decorator is a function that applies a logic ?? 
  imports:[
	CoffeesModule,
	TypeOrmModule.forRoot({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		password: 'dbpass',
		database: 'postgres',
		autoLoadEntities: true,// load modules automatically instead of specifying the entities Array.
		synchronize: true,// ensures that our TypeORM database is synced with our entities every time we start the server.
	})
],
  controllers:	[AppController],
  providers:	[AppService],
})
export class AppModule { }
