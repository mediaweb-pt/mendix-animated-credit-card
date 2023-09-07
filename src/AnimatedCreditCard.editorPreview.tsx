import { ReactElement, createElement } from "react";
import { AnimatedCreditCardPreviewProps } from "../typings/AnimatedCreditCardProps";
import CreditCard from "./components/CreditCard";

export function preview(props:AnimatedCreditCardPreviewProps): ReactElement {

    const _isflipped = () => {
        let result:boolean; 
        
        if( props.dynamicFlipMode === "dynamic"){
            result = (props.isFlippedExpression?.toLowerCase?.() === 'true');
        }else{
            result = props.isFlipped;
        }

        return result
    }
    
    return <CreditCard 
                number={props.cardNumber}
                cvc={props.cardCVC} 
                name={props.cardName} 
                expirationDate={new Date(props.cardExpirationDate)} 
                isFlipped={_isflipped()}
            />
}

export function getPreviewCss(): string {
    return require("./ui/credit-card.scss");
}
