//added makeSound function to each animal class
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function () {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "makeSound", {
        get: function () {
            return 'Woef';
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function () {
            return 'cat';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "makeSound", {
        get: function () {
            return 'Miauw';
        },
        enumerable: false,
        configurable: true
    });
    return Cat;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "makeSound", {
        get: function () {
            return 'I am a pirate';
        },
        enumerable: false,
        configurable: true
    });
    return Parrot;
}());
//added class Fox
var Fox = /** @class */ (function () {
    function Fox() {
    }
    Object.defineProperty(Fox.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fox.prototype, "type", {
        get: function () {
            return 'fox';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fox.prototype, "makeSound", {
        get: function () {
            return 'Chacha-chacha-chacha-chow!';
        },
        enumerable: false,
        configurable: true
    });
    return Fox;
}());
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
        //removed the giant switch from the Zoo class.
        /*
       public makeSound() {
    
           switch(animal.type) {
               case 'cat':
                   return 'Miauw';
               case 'dog':
                   return 'Woef';
               case 'parrot':
                   return 'I am a pirate';
               case 'fox':
                   return 'Chacha-chacha-chacha-chow!';
               default:
                   throw new Error('Unknown type: '+ animal.type);
           }
       }
       */
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Fox);
//added nex Fox
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");
});
//changed zoo.makeSound(animal) to animal.makeSound
