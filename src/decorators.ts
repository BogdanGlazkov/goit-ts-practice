///////////////////////////// @ in classes

function Logger(logString: string) {
    return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
};
}

function AddProperty() {
    return function (constructor: Function) {
        console.log("Add property");
        constructor.prototype.modify = true;
};
}

@Logger("LOGGING - CONTROLLER")
@AddProperty()
class Controller {
    public id = 1;
    public modify?: boolean;
};

const controller = new Controller();
console.log("Is controller?", controller.modify);


///////////////////////////// @ in methods

function AddTax(taxPercent: number) {
    return function (_: any, _2: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value as Function;

        return {
            configurable: true,
            enumerable: false,
            get() {
                return (...args: any[]) => {
                    const result = method.apply(this, args);
                    return result + (result / 100 * taxPercent);
                };
            },
        };
    };
};

class Payment {
    @AddTax(20)
    pay(money: number) {
        return money;
    };
};

const payment = new Payment();
console.log(payment.pay(100));


///////////////////////////// @ in params

function CheckEmail(target: any, name: string, position: number) {
    console.log('target', target);
    console.log('name', name);
    console.log('position', position);
};

class PersonD {
    setEmail(@CheckEmail email: string) {
        console.log(email);
    };
};
