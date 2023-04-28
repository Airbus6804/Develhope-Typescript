/**
 * START: Follow the instructions below.
 */

// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.

const currencies = ["Euro", "Dollar"]

enum Currency {
    France = 0,
    US = 1,
    Italy = 0,
    New_Zealand = 1
}

// Update the type for the `currency` property in this interface to use
// the `Currency` enum.

interface Country {
    name: string;
    currency: string;
}

// Replace the string values for the `currency` properties below with

const countries: Country[] = [
    {
        name: "France",
        currency: currencies[Currency.France],
    },
    {
        name: "United States of America",
        currency: currencies[Currency.US],
    },
    {
        name: "Italy",
        currency: currencies[Currency.Italy],
    },
    {
        name: "New Zealand",
        currency: currencies[Currency.New_Zealand],
    },
];

// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.

enum LanguageStatus {
    Primary = "primary",
    Secondary = "secondary"
}

const countryLanguages = [
    { language: "Spanish", status: LanguageStatus.Primary },
    { language: "English", status: LanguageStatus.Secondary },
];

// ----

export {};
