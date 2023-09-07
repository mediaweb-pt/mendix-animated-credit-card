import { CSSProperties, createElement, FunctionComponent, ReactElement, useEffect, useState, useCallback } from "react";
import { CreditCardTypes } from "src/utils/Types";
import { validateCardType } from "src/utils/Validations";
import classNames from "classnames"
import CreditCardLogo from "./CreditCardLogo";

interface CreditCardProps {
    id?: string,
    classes?: string,
    style?: CSSProperties
    name: string,
    number: string,
    expirationDate: Date | undefined,
    cvc: string | undefined,
    isFlipped: boolean
}

const CreditCard: FunctionComponent<CreditCardProps> = (props: CreditCardProps): ReactElement => {

    const [type, setType] = useState(CreditCardTypes.Unidentified);
    const mainClasses = classNames('mw-credit-card', getClasses());
    const wrapperClasses = classNames('mw-credit-card-wrapper', props.classes)

    
    useEffect(() => {
        const validationInfo = validateCardType(props.number);
        if (type !== validationInfo.type) {
            setType(validationInfo.type);
        }
    }, [props.number])


    function getClasses(): string[] {
        const result = []

        if (type === CreditCardTypes.Unidentified) {
            result.push("mw--card-unidentified")
        } else {
            result.push(`mw--card-${type}`)
            result.push("mw--card-identified")
        }

        if (props.isFlipped) {
            result.push("mw-credit-card-flipped")
        }

        return result
    }

    const formatExpireDate = useCallback((date:Date | undefined):string | undefined => {
        if (!(date instanceof Date)) return undefined
        const month = (date.getMonth() + 1).toString();

        return `${month.length <= 1 ? 0 : ""}${month}/${date.getFullYear()}`
    },[])

    const formatCardNumber = useCallback((number:string):string => {        
        return number.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
    }, [])


    return (
        <div className={wrapperClasses} style={props.style}>
            <div className={mainClasses}>
                <div className="mw-credit-card-front">
                    <CreditCardLogo type={type} />
                    <div className="mw-credit-card-lower">
                        <div className="mw-credit-card-chip mw-card-display"></div>
                        <div className="mw-credit-card-number mw-card-display">
                            {!props.number && "**** **** **** ****"}
                            {props.number && formatCardNumber(props.number)}
                        </div>
                        <div className="mw-credit-card-name mw-card-display">{props.name}</div>
                        <div className="mw-credit-card-expiry mw-card-display" data-before="month/year" data-after="valid">
                            {!props.expirationDate && "**/****"}
                            {props.expirationDate && formatExpireDate(props.expirationDate)}
                        </div>
                    </div>
                </div>
                <div className="mw-credit-card-back">
                    <div className="mw-credit-card-bar"></div>
                    <div className="mw-credit-card-cvc mw-card-display">
                        {!props.cvc && "***"}
                        {props.cvc && props.cvc}
                    </div>
                    <div className="mw-credit-card-chip"></div>
                </div>
            </div>
        </div>
    )
}


export {
    CreditCardProps
}

export default CreditCard;