import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entity/coffee.entity';

//*  The module decorator takes  single object whose properties describe module and and all its context
@Module({

	imports: [TypeOrmModule.forFeature([Coffee])],// forFeature register TypeORM in this child module.// forRoot 
	controllers:	[CoffeesController],
  	providers: 		[CoffeesService]
})//controllers:[CoffeesController], providers: [CoffeeService]
//Module containes 4 main things :
//1- Controllers : API root that we want this module to instantiate
//2- Export : Here we can list providers within this current module that should be available anywhere
//3- Imports : list of other modules that this module requires
//4- Providers array : list our services that need to be instantiated by the NestJs
export class CoffeesModule 
{

}