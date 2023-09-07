import { createElement, FunctionComponent, ReactElement, useCallback, Fragment } from "react";
import { CreditCardTypes } from "src/utils/Types";

interface CreditCardLogoProps{
    type:CreditCardTypes
}

const CreditCardLogo:FunctionComponent<CreditCardLogoProps> = ({type}:CreditCardLogoProps):ReactElement => {
    
    const setLogoContent = useCallback( (cardType:CreditCardTypes): ReactElement | string=> {
        let content:ReactElement | string;

        switch (cardType) {
            case CreditCardTypes.AmericanExpress:
                content = <Fragment></Fragment>
                break;
            case CreditCardTypes.Dankort:
                content = <div><div className="d"></div><div className="k"></div></div>
                break;
            case CreditCardTypes.DinersClub:
                content = "" //Missing Logo
                break;
            case CreditCardTypes.Discover:
                content = "discover"
                break;
            case CreditCardTypes.Elo:
                content = <Fragment><div className="e">e</div><div className="l">l</div><div className="o">o</div></Fragment>
                break;
            case CreditCardTypes.Hipercard:
                content = "Hipercard"
                break;
            case CreditCardTypes.JCB:
                content = <Fragment><div className="j">J</div><div className="c">C</div><div className="b">B</div></Fragment>
                break;
            case CreditCardTypes.Laser:
                content = "" //Missing logo
                break;
            case CreditCardTypes.Maestro:
                content = "Maestro"
                break;
            case CreditCardTypes.MasterCard:
                content = "Mastercard"
                break;
            case CreditCardTypes.Mir:
                content = "" //Missing logo
                break;
            case CreditCardTypes.Troy:
                content = "troy"
                break;
            case CreditCardTypes.UnionPay:
                content = "UnionPay"
                break;
            case CreditCardTypes.Visa:
                content = "visa"
                break;
            case CreditCardTypes.VisaElectron:
                content = <Fragment>Visa<div className="elec">Electron</div></Fragment>
                break;
            default:
                content = ""
                break;
        }

        return content
    }, []);
    
    return (
        <div className="mw-credit-card-logo">{setLogoContent(type)}</div>              
    )
}


export default CreditCardLogo;