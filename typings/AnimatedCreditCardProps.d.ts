/**
 * This file was generated from AnimatedCreditCard.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type DynamicFlipModeEnum = "static" | "dynamic";

export interface AnimatedCreditCardContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    cardNumber?: DynamicValue<string>;
    cardName?: DynamicValue<string>;
    cardExpirationDate?: DynamicValue<Date>;
    cardCVC?: DynamicValue<string>;
    dynamicFlipMode: DynamicFlipModeEnum;
    isFlipped: boolean;
    isFlippedExpression?: DynamicValue<boolean>;
}

export interface AnimatedCreditCardPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    cardNumber: string;
    cardName: string;
    cardExpirationDate: string;
    cardCVC: string;
    dynamicFlipMode: DynamicFlipModeEnum;
    isFlipped: boolean;
    isFlippedExpression: string;
}
