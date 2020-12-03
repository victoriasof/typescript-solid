//added makeSound function to each animal class

class Dog {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }

    get makeSound(){
        return 'Woef';
    }

}

class Cat {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }

    get makeSound(){
        return 'Miauw';
    }
}

class Parrot {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }

    get makeSound(){
        return 'I am a pirate';
    }
}

//added class Fox
class Fox {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'fox';
    }

    get makeSound(){
        return 'Chacha-chacha-chacha-chow!';
    }
}

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }

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

let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Fox);

//added nex Fox

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");
});

//changed zoo.makeSound(animal) to animal.makeSound
