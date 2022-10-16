"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function AddProperty() {
    return function (constructor) {
        console.log("Add property");
        constructor.prototype.modify = true;
    };
}
let Controller = class Controller {
    constructor() {
        this.id = 1;
    }
};
Controller = __decorate([
    Logger("LOGGING - CONTROLLER"),
    AddProperty()
], Controller);
;
const controller = new Controller();
console.log("Is controller?", controller.modify);
function AddTax(taxPercent) {
    return function (_, _2, descriptor) {
        const method = descriptor.value;
        return {
            configurable: true,
            enumerable: false,
            get() {
                return (...args) => {
                    const result = method.apply(this, args);
                    return result + (result / 100 * taxPercent);
                };
            },
        };
    };
}
;
class Payment {
    pay(money) {
        return money;
    }
    ;
}
__decorate([
    AddTax(20)
], Payment.prototype, "pay", null);
;
const payment = new Payment();
console.log(payment.pay(100));
function CheckEmail(target, name, position) {
    console.log('target', target);
    console.log('name', name);
    console.log('position', position);
}
;
class PersonD {
    setEmail(email) {
        console.log(email);
    }
    ;
}
__decorate([
    __param(0, CheckEmail)
], PersonD.prototype, "setEmail", null);
;
//# sourceMappingURL=decorators.js.map