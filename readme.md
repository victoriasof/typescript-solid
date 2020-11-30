# Title: Using TypeScript

- Repository: `typescript-solid`
- Type of Challenge: `Learning Challenge`
- Duration: `1 week`
- Deployment strategy : `NA`
- Team challenge : `solo`

## Learning objectives
- Installing Typescript
- Installing Parcel
- Work with TypeScript
- Understanding SOLID principles for better

## The Mission: Prologue
Javascript is a great language but it does not come **Type Safety** out of the box. This is the ability for the programmer to define input and output variables for a function (like in PHP) and so having more stability in their code.
This is why we are going to explore a a new language called TypeScript, which builds on JavaScript, which adds static type definitions.

For example, trying to pass a String to function that expects a number will throw an error on compilation, even before testing it in the browser! This way you get very fast feedback in your editor when there are problems in your code.
In code this looks like this:

```javascript
function sum(a, b) {
    return a+b;
}
```

becomes

```typescript
function sum(a : number, b : number) : number {
    return a+b;
}
```

Trying to pass a string to this function will now immediately trigger an error in your console.

Start by reading [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

### Installation
Typescript will transform all of your code to Javascript, making it work again in any browser (So all Typescript code is in the JS code). However, in order for this to work you will need to install a compiler.
Luckily this is rather simple, go to the [installation page](https://www.typescriptlang.org/download) and choose the option for your OS. 

#### PhpStorm integration
At this point you should no longer be surprised, but PHPStorm comes with support for TypeScript out of the box. However, in order for this to work you might need to install [node.js](https://nodejs.org/en/).

There are 2 ways of working with TypesScript in your IDE, the first option is to make it so all TypeScript files are compiled the moment you change something in the file.
To do this go to ```File | Settings | Languages & Frameworks | TypeScript```. Make sure to check the correct checkbox.

![install-phpstorm-on-change](install-phpstorm-1.png)

Another option is to click on the "compile" button at the bottom of your editor. You can then either recompile the file your are currently in, or all files in the entire project.
![install-phpstorm-compile-button](install-phpstorm-2.png)

### Working with Parcel
Parcel is a web application bundler, that will compile all the JS code

[You also need to install parcel](https://parceljs.org/getting_started.html), after which you should be able to run `parcel index.html` in your project directory.

### SOLID
SOLID is a set of 5 principles that helps you write good OOP code, and is considered one of the leading theories for modern code.

## The Mission
This all probably means very little to you, which is why we are going to see each principle separably on small refactor exercises.

* [Single Responsibility Principle](SOLID/0.S/readme.md) — Classes should have a single responsibility and thus only a single reason to change.
* [Open–closed principle](SOLID/1.O/readme.md) — Classes and other entities should be open for extension but closed for modification.
* [Liskov Substitution Principle](SOLID/2.L/readme.md) — Objects should be replaceable by their subtypes. See also design by contract. = polymorpism
* [Interface Segregation Principle](SOLID/3.I/readme.md) — Interfaces should be client specific rather than general.
* Dependency Inversion Principle — Depend on abstractions rather than concretions.

## Tips
- [Read more about solid](https://medium.com/@severinperez/maintainable-code-and-the-open-closed-principle-b088c737262)
- [TypeScript with Solid principles](https://itnext.io/brutally-solid-typescript-ba745585f440)



