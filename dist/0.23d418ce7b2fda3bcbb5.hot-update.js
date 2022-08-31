"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 11:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CoffeesService = void 0;
const common_1 = __webpack_require__(6);
const coffee_entity_1 = __webpack_require__(17);
const create_coffee_dto_1 = __webpack_require__(12);
const typeorm_1 = __webpack_require__(18);
const typeorm_2 = __webpack_require__(14);
let CoffeesService = class CoffeesService {
    constructor(coffeeRepository) {
        this.coffeeRepository = coffeeRepository;
        this.coffees = [
            {
                id: 1,
                name: 'Shipwrek Roast',
                brand: 'Buddy Brew',
                flavors: ['choclate', 'vanilla'],
            },
            {
                id: 2,
                name: 'Nescafe',
                brand: 'cafe',
                flavors: ['dark_choclate', 'vanilla'],
            },
        ];
    }
    findAll() {
        return this.coffees;
    }
    findOne(id) {
        const coffee = this.coffees.find((iterm) => (iterm.id === id));
        if (!coffee)
            throw new common_1.NotFoundException(`Coffee #${id} not found`);
        return coffee;
    }
    create(createCoffeeDto) {
        this.coffees.push(createCoffeeDto);
        console.log(createCoffeeDto instanceof create_coffee_dto_1.CreateCoffeeDto);
        return createCoffeeDto;
    }
    update(id, updateDto) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
        }
    }
    remove(id) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
};
CoffeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(coffee_entity_1.Coffee)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CoffeesService);
exports.CoffeesService = CoffeesService;


/***/ }),

/***/ 17:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Coffee = void 0;
class Coffee {
}
exports.Coffee = Coffee;


/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("71fcd9229af490172b88")
/******/ })();
/******/ 
/******/ }
;