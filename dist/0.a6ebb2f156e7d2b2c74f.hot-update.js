"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCoffeeDto = void 0;
const mapped_types_1 = __webpack_require__(15);
const create_coffee_dto_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './dto/create-coffee.dto'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
class UpdateCoffeeDto extends (0, mapped_types_1.PartialType)(create_coffee_dto_1.CreateCoffeeDto) {
}
exports.UpdateCoffeeDto = UpdateCoffeeDto;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(16));


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inheritValidationMetadata = exports.inheritTransformationMetadata = exports.inheritPropertyInitializers = exports.applyIsOptionalDecorator = void 0;
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(25), exports);
var type_helpers_utils_1 = __webpack_require__(18);
Object.defineProperty(exports, "applyIsOptionalDecorator", ({ enumerable: true, get: function () { return type_helpers_utils_1.applyIsOptionalDecorator; } }));
Object.defineProperty(exports, "inheritPropertyInitializers", ({ enumerable: true, get: function () { return type_helpers_utils_1.inheritPropertyInitializers; } }));
Object.defineProperty(exports, "inheritTransformationMetadata", ({ enumerable: true, get: function () { return type_helpers_utils_1.inheritTransformationMetadata; } }));
Object.defineProperty(exports, "inheritValidationMetadata", ({ enumerable: true, get: function () { return type_helpers_utils_1.inheritValidationMetadata; } }));


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntersectionType = void 0;
const type_helpers_utils_1 = __webpack_require__(18);
function IntersectionType(classA, ...classRefs) {
    const allClassRefs = [classA, ...classRefs];
    class IntersectionClassType {
        constructor() {
            allClassRefs.forEach((classRef) => {
                (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef);
            });
        }
    }
    allClassRefs.forEach((classRef) => {
        (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, IntersectionClassType);
        (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, IntersectionClassType);
    });
    const intersectedNames = allClassRefs.reduce((prev, ref) => prev + ref.name, '');
    Object.defineProperty(IntersectionClassType, 'name', {
        value: `Intersection${intersectedNames}`,
    });
    return IntersectionClassType;
}
exports.IntersectionType = IntersectionType;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inheritPropertyInitializers = exports.inheritTransformationMetadata = exports.inheritValidationMetadata = exports.applyIsOptionalDecorator = void 0;
const common_1 = __webpack_require__(6);
const logger = new common_1.Logger('MappedTypes');
function applyIsOptionalDecorator(targetClass, propertyKey) {
    if (!isClassValidatorAvailable()) {
        return;
    }
    const classValidator = __webpack_require__(13);
    const decoratorFactory = classValidator.IsOptional();
    decoratorFactory(targetClass.prototype, propertyKey);
}
exports.applyIsOptionalDecorator = applyIsOptionalDecorator;
function inheritValidationMetadata(parentClass, targetClass, isPropertyInherited) {
    if (!isClassValidatorAvailable()) {
        return;
    }
    try {
        const classValidator = __webpack_require__(13);
        const metadataStorage = classValidator.getMetadataStorage
            ? classValidator.getMetadataStorage()
            : classValidator.getFromContainer(classValidator.MetadataStorage);
        const getTargetValidationMetadatasArgs = [parentClass, null, false, false];
        const targetMetadata = metadataStorage.getTargetValidationMetadatas(...getTargetValidationMetadatasArgs);
        return targetMetadata
            .filter(({ propertyName }) => !isPropertyInherited || isPropertyInherited(propertyName))
            .map((value) => {
            const originalType = Reflect.getMetadata('design:type', parentClass.prototype, value.propertyName);
            if (originalType) {
                Reflect.defineMetadata('design:type', originalType, targetClass.prototype, value.propertyName);
            }
            metadataStorage.addValidationMetadata(Object.assign(Object.assign({}, value), { target: targetClass }));
            return value.propertyName;
        });
    }
    catch (err) {
        logger.error(`Validation ("class-validator") metadata cannot be inherited for "${parentClass.name}" class.`);
        logger.error(err);
    }
}
exports.inheritValidationMetadata = inheritValidationMetadata;
function inheritTransformationMetadata(parentClass, targetClass, isPropertyInherited) {
    if (!isClassTransformerAvailable()) {
        return;
    }
    try {
        const transformMetadataKeys = [
            '_excludeMetadatas',
            '_exposeMetadatas',
            '_transformMetadatas',
            '_typeMetadatas',
        ];
        transformMetadataKeys.forEach((key) => inheritTransformerMetadata(key, parentClass, targetClass, isPropertyInherited));
    }
    catch (err) {
        logger.error(`Transformer ("class-transformer") metadata cannot be inherited for "${parentClass.name}" class.`);
        logger.error(err);
    }
}
exports.inheritTransformationMetadata = inheritTransformationMetadata;
function inheritTransformerMetadata(key, parentClass, targetClass, isPropertyInherited) {
    let classTransformer;
    try {
        classTransformer = __webpack_require__(19);
    }
    catch (_a) {
        classTransformer = __webpack_require__(20);
    }
    const metadataStorage = classTransformer.defaultMetadataStorage;
    while (parentClass && parentClass !== Object) {
        if (metadataStorage[key].has(parentClass)) {
            const metadataMap = metadataStorage[key];
            const parentMetadata = metadataMap.get(parentClass);
            const targetMetadataEntries = Array.from(parentMetadata.entries())
                .filter(([key]) => !isPropertyInherited || isPropertyInherited(key))
                .map(([key, metadata]) => {
                if (Array.isArray(metadata)) {
                    const targetMetadata = metadata.map((item) => (Object.assign(Object.assign({}, item), { target: targetClass })));
                    return [key, targetMetadata];
                }
                return [key, Object.assign(Object.assign({}, metadata), { target: targetClass })];
            });
            if (metadataMap.has(targetClass)) {
                const existingRules = metadataMap.get(targetClass).entries();
                metadataMap.set(targetClass, new Map([...existingRules, ...targetMetadataEntries]));
            }
            else {
                metadataMap.set(targetClass, new Map(targetMetadataEntries));
            }
        }
        parentClass = Object.getPrototypeOf(parentClass);
    }
}
function isClassValidatorAvailable() {
    try {
        __webpack_require__(13);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function isClassTransformerAvailable() {
    try {
        __webpack_require__(21);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function inheritPropertyInitializers(target, sourceClass, isPropertyInherited = (key) => true) {
    try {
        const tempInstance = new sourceClass();
        const propertyNames = Object.getOwnPropertyNames(tempInstance);
        propertyNames
            .filter((propertyName) => typeof tempInstance[propertyName] !== 'undefined' &&
            typeof target[propertyName] === 'undefined')
            .filter((propertyName) => isPropertyInherited(propertyName))
            .forEach((propertyName) => {
            target[propertyName] = tempInstance[propertyName];
        });
    }
    catch (_a) { }
}
exports.inheritPropertyInitializers = inheritPropertyInitializers;


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("class-transformer/cjs/storage");

/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("class-transformer/storage");

/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OmitType = void 0;
const type_helpers_utils_1 = __webpack_require__(18);
function OmitType(classRef, keys) {
    const isInheritedPredicate = (propertyKey) => !keys.includes(propertyKey);
    class OmitClassType {
        constructor() {
            (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef, isInheritedPredicate);
        }
    }
    (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, OmitClassType, isInheritedPredicate);
    (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, OmitClassType, isInheritedPredicate);
    return OmitClassType;
}
exports.OmitType = OmitType;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartialType = void 0;
const type_helpers_utils_1 = __webpack_require__(18);
function PartialType(classRef) {
    class PartialClassType {
        constructor() {
            (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef);
        }
    }
    const propertyKeys = (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, PartialClassType);
    (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, PartialClassType);
    if (propertyKeys) {
        propertyKeys.forEach((key) => {
            (0, type_helpers_utils_1.applyIsOptionalDecorator)(PartialClassType, key);
        });
    }
    Object.defineProperty(PartialClassType, 'name', {
        value: `Partial${classRef.name}`,
    });
    return PartialClassType;
}
exports.PartialType = PartialType;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PickType = void 0;
const type_helpers_utils_1 = __webpack_require__(18);
function PickType(classRef, keys) {
    const isInheritedPredicate = (propertyKey) => keys.includes(propertyKey);
    class PickClassType {
        constructor() {
            (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef, isInheritedPredicate);
        }
    }
    (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, PickClassType, isInheritedPredicate);
    (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, PickClassType, isInheritedPredicate);
    return PickClassType;
}
exports.PickType = PickType;


/***/ })
];
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("58259ad00e5be20d4dbd")
/******/ })();
/******/ 
/******/ }
;