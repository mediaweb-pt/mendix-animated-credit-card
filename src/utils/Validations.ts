import { CreditCardTypes, ValidationResult, CreditCardConfig} from "./Types";


export const validateCardType = (cardNumber: string): ValidationResult => {
    let number: string,
        pob: CreditCardConfig,
        result: [CreditCardConfig, RegExpMatchArray] | undefined,
        mo: RegExpMatchArray | null,
        cardInfo: ValidationResult,
        i: number,
        c = /(\d{1,4})/g;

    const cardsList: CreditCardConfig[] = [
        {
            type: CreditCardTypes.AmericanExpress,
            pattern: /^3[47]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [4],
            luhn: true
        },
        {
            type: CreditCardTypes.Dankort,
            pattern: /^5019/,
            format: c,
            length: [16],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.DinersClub,
            pattern: /^(36|38|30[0-5])/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
            length: [14],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.Discover,
            pattern: /^(6011|65|64[4-9]|622)/,
            format: c,
            length: [16],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.Elo,
            pattern:
                /^401178|^401179|^431274|^438935|^451416|^457393|^457631|^457632|^504175|^627780|^636297|^636369|^636368|^(506699|5067[0-6]\d|50677[0-8])|^(50900\d|5090[1-9]\d|509[1-9]\d{2})|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])|^(65092[1-9]|65097[0-8])/,
            format: c,
            length: [16],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.Hipercard,
            pattern: /^(384100|384140|384160|606282|637095|637568|60(?!11))/,
            format: c,
            length: [14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.JCB,
            pattern:
                /^(308[8-9]|309[0-3]|3094[0]{4}|309[6-9]|310[0-2]|311[2-9]|3120|315[8-9]|333[7-9]|334[0-9]|352[8-9]|35[3-8][0-9])/,
            format: c,
            length: [16, 19],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.Laser,
            pattern: /^(6706|6771|6709)/,
            format: c,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.Maestro,
            pattern: /^(5018|5020|5038|5078|5[6-9]|6304|6703|6708|6759|676[1-3])/,
            format: c,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.MasterCard,
            pattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
            format: c,
            length: [16],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.Mir,
            pattern: /^220[0-4][0-9][0-9]\d{10}$/,
            format: c,
            length: [16],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.Troy,
            pattern: /^9792/,
            format: c,
            length: [16],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.UnionPay,
            pattern: /^62/,
            format: c,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: false
        },
        {
            type: CreditCardTypes.VisaElectron,
            pattern: /^4(026|17500|405|508|844|91[37])/,
            format: c,
            length: [16],
            cvcLength: [3],
            luhn: true
        },
        {
            type: CreditCardTypes.Visa,
            pattern: /^4/,
            format: c,
            length: [13, 16, 19],
            cvcLength: [3],
            luhn: true
        }
    ];

    number = cardNumber.replace(/\D/g, "");

    for (i = 0; i < cardsList.length; i++) {
        pob = cardsList[i];
        mo = number.match(pob.pattern);

        if (mo && (!result || mo[0].length > result[1][0].length)) {
            result = [pob, mo];
        }
    }

    cardInfo = {
        number: number,
        type: CreditCardTypes.Unidentified
    };

    if (result && result[0] && result[0].type) {
        cardInfo.type = result[0].type;
    }

    return cardInfo;
};