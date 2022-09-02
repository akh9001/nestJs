import { Body, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { runInThisContext } from 'vm';
import { Coffee } from './entity/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeesService 
{
	// private coffees: Coffee[] = [
	// 	{
	// 		id: 1,
	// 		name: 'Shipwrek Roast',
	// 		brand: 'Buddy Brew',
	// 		flavors: ['choclate', 'vanilla'],
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Nescafe',
	// 		brand: 'cafe',
	// 		flavors: ['dark_choclate', 'vanilla'],
	// 	},
	// ];

	constructor(@InjectRepository(Coffee) private readonly coffeeRepository: Repository<Coffee>) {}

	
	findAll() {
		return this.coffeeRepository.find();
	}

	asynfindOne(id: number) {
		const coffee = this.coffeeRepository.find((iterm) => (iterm.id === id));
		if (!coffee)
		throw new NotFoundException(`Coffee #${id} not found`);
		return coffee;
	}

	create(createCoffeeDto: any)
	{
		this.coffeeRepository.push(createCoffeeDto);
		console.log(createCoffeeDto instanceof CreateCoffeeDto);
		return createCoffeeDto;
	}

	update(id:number, updateDto:any)
	{
		const existingCoffee = this.findOne(id);
		if (existingCoffee)
		{
			//
		}
	}

	remove(id:number)
	{
		const coffeeIndex = this.coffeeRepository.findIndex(item => item.id === id);
		if (coffeeIndex >= 0)
		{
			this.coffeeRepository.splice(coffeeIndex, 1);
		}
	}
}
