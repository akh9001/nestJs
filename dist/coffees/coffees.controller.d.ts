import { CoffeesService } from './coffees.service';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    findAll(paginaionQuery: any): import("./entity/coffee.entity").Coffee[];
    findOne(id: number): import("./entity/coffee.entity").Coffee;
    create(body: any): number;
    update(id: number, body: any): void;
    remove(id: number): void;
}
