export enum CreditCardTypes {
    AmericanExpress = "amex",
    Dankort = "dankort",
    DinersClub = "dinersclub",
    Discover = "discover",
    Elo = "elo",
    Hipercard = "hipercard",
    JCB = "jcb",
    Maestro = "maestro",
    MasterCard = "mastercard",
    Troy = "troy",
    Unidentified = "unidentified",
    UnionPay = "unionpay",
    Visa = "visa",
    VisaElectron = "visaelectron",
    Laser = "laser",
    Mir = "mir"
}

export type ValidationResult = {
    number: string;
    type: CreditCardTypes;
};


export type CreditCardConfig = {
    type: CreditCardTypes;
    pattern: RegExp;
    format: RegExp;
    length: number[];
    cvcLength: number[];
    luhn: boolean;
};
