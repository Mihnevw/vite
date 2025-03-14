import { PayPalButtons } from "@paypal/react-paypal-js";

<PayPalButtons
  createOrder={(data, actions) => {
    return actions.order.create({
      purchase_units: [{ amount: { value: "10.00" } }],
    });
  }}
  onApprove={(data, actions) => {
    return actions.order.capture().then((details) => {
      alert("Плащането е успешно, " + details.payer.name.given_name);
    });
  }}
/>;
