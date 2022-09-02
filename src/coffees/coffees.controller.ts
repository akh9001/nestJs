import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')//this is how the app knews which url accesses which controller
export class CoffeesController 
{
	constructor(private readonly coffeesService: CoffeesService){}
	//private : allows us to both declare and initialize the CoffeesService member immediately in the same location.
	// as well as making it only accessible within the class itself, private.
	// readonly : so we cant modify it
	@Get()
	// findAll(){return "Here is your coffee!"}
	findAll(@Query() paginaionQuery)
	{
		// const {name, age} = paginaionQuery;
		// return `Your name is ${name}, your age is ${age} !`;
		return this.coffeesService.findAll();
	}
	@Get(':id')
	// findOne(@Param() param) //* @Param() decorator lets us grap all incoming request params and use them inside
	// 					//* when we dont pass anything inside the param decorator, we receive all the request parameters,
	// 					//* letting us access patams.id from the obj
	// {
	// 	return `This action returns #${param.id} coffee!`
	// } 
	findOne(@Param('id', ParseIntPipe) id:number) //* @Param() decorator lets us grap all incoming request params and use them inside
						//* when we dont pass anything inside the param decorator, we receive all the request parameters,
						//* letting us access patams.id from the obj
	{
		// return `This action returns #${id} coffee!`
		return this.coffeesService.findOne(id);
	} 
	// @Get('expresso')
	// findespresso(){return "Here is your expresso!"}
	//* @Post()
	//* create(@Body() body)
	//* {
	//* 	// return body.name;
	//* 	return this.coffeesService.create(body);
	//* }
	@Post()
	create(@Body() createCoffeeDto: CreateCoffeeDto)
	{
		// return body.name;
		return this.coffeesService.create(createCoffeeDto);
	}
	@Patch(':id')// id for what entity to update and requeste data to use to update
	update(@Param('id', ParseIntPipe) id:number, @Body() UpdateCoffeeDto: UpdateCoffeeDto)
	{
		// return `This action update #${id} coffee`;
		return this.coffeesService.update(id, UpdateCoffeeDto);
	}

	@Delete(':id')// id for what entity to update and requeste data to use to update
	remove(@Param('id', ParseIntPipe) id:number)
	{
		// return ` This action remove #${id} coffee`
		return this.coffeesService.remove(id);
	}
}
