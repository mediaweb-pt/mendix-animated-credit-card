## AnimatedCreditCard
This widget empowers you to customize the content displayed on a virtual credit card. You can define the card number, cardholder name, expiry date, and CVC number. Additionally, you have the flexibility to switch between displaying the card's front and back dynamically during runtime.

Built upon Jesse Pollack's [library](https://github.com/jessepollak/card).


### Widget Configuration

- **Card Number (expression)**: This parameter allows you to specify the card number to be displayed. The card's image and type adapt according to the provided number.

- **Card Name (expression)**: Use this parameter to define the cardholder's name, which will appear below the card number.
Card Expiration Date (expression): Set this parameter to define the expiration date, displayed in the bottom right corner of the card.

- **Flip Mode(boolean)**: Choose between "Static" and "Dynamic." Static mode allows you to set the display mode (front or back) and cannot be changed dynamically. Dynamic mode provides an expression field for real-time switching between front and back views.

- **Show Back Side (boolean | expression)**: This parameter determines which side of the card to display. It can switch between radio buttons and an expression field, depending on the selected Flip Mode.

## Demo project
You have a demo mendix application on the `test/testProject`

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
