import { ReactElement, createElement } from "react";

import { AnimatedCreditCardContainerProps } from "../typings/AnimatedCreditCardProps";
import CreditCard from "./components/CreditCard";
// import { ValueStatus } from "mendix"

import "./ui/credit-card.scss";

const AnimatedCreditCard = (props:AnimatedCreditCardContainerProps): ReactElement => {

    const _isflipped = () => {
        let result:boolean; 
        
        if( props.dynamicFlipMode === "dynamic"){
            if (props.isFlippedExpression?.status && props.isFlippedExpression.status === "available") {
                result = props.isFlippedExpression.value;
            }else{
                result = false;
            }
        }else{
            result = props.isFlipped;
        }

        return result
    }


    return <CreditCard 
                id = {props.name}
                classes={props.class}
                style={props.style}
                number = {props.cardNumber?.value ?? ""}
                name = {props.cardName?.value ?? ""}
                expirationDate = {props.cardExpirationDate?.value}
                cvc = {props.cardCVC?.value}
                isFlipped = {_isflipped()}
            />
}

export default AnimatedCreditCard