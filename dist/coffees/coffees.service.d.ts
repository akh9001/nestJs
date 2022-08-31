import { Coffee } from './entity/coffee.entity';
export declare class CoffeesService {
    private coffees;
    findAll(): Coffee[];
    findOne(id: number): Coffee;
    create(createCoffeeDto: any): number;
    update(id: number, updateDto: any): void;
    remove(id: number): void;
}
