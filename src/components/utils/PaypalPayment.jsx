import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default class PayPalPayment extends Component {
  render() {
    const { total, clearCart, history } = this.props;
    return (
      <PayPalButton
        options={{
          clientId:
            "AR3CZFRiiPhn9dcN6dI_cbS6YksiOy7qn0TBImR1lW_3GJIp4_Q-leNenwiRfbl-TAICWf97s1TjJVbZ",
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],

            // application_context: {
            //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
            // }
          });
        }}
        onApprove={(data, actions) => {
          // Capture the funds from the transaction
          return actions.order.capture().then(function (details) {
            // Show a success message to your buyer
            alert(
              "Your transaction is successful, thank you for shopping with us " +
                details.payer.name.given_name
            );
            clearCart();
            history.push("/");
            // OPTIONAL: Call your server to save the transaction
            // return fetch("/paypal-transaction-complete", {
            //   method: "post",
            //   body: JSON.stringify({
            //     orderID: data.orderID,
            //   }),
            // });
          });
        }}
      />
    );
  }
}
