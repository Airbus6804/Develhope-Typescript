/**
 * START: Follow the instructions below.
 */

class Currency {
    // Add types for these fields and make them private.
    // Hint: Look at the type of values being passed when `new Currency()`
    // is called below.

    private name:string;
    private code:string;
    private symbol:string;

    // Add types to the constructor parameters.

    constructor(name:string, code:string, symbol:string) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;

        // Store the `code` and `symbol` parameter values in
        // their corresponding class fields.


    }

    // Methods are public by default.
    // Add a visibility modifier to make it clear this method is public.
    //
    // Add a return type for this method
    // Hint: Look at the inferred return type.

    public describe():void {
        // Replace the `null` values below with the appropriate field values.
        // Hint: Access field values with: this.fieldName

        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;

        console.log(description);
    }
}

// ----

const currencyNaira = new Currency("Naira", "NGN", "₦");

console.log(currencyNaira);

// Call the `describe()` method on the `currencyNaira` object.



// ----

const currencyUsDollar = new Currency("United States dollar", "USD", "$");

console.log(currencyUsDollar);

// Call the `describe()` method on the `currencyUsDollar` object.



// ----

export {};/**
 * START: Follow the instructions below.
 */

const populations = [
    1_412_600_000,
    60_317_116,
    69_950_850,
    10_678_632,
];

// The Array reduce method allows us to generate a single value from
// an array of values. Below we're using it to sum the values of the
// `populations` array.
//
// The `population` parameter in the callback has an inferred type of `number`.
// Change the initial value (`false`) to a value with the same type as `population`.
// This should fix the type error on Line 23.
//
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const sumOfPopulations = populations.reduce((total, population) => {
    return total + population;
}, 0);

console.log(sumOfPopulations);

// ----

export {};
