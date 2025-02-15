import { useState } from "react";
import PropTypes from "prop-types";

const CheckoutButton = ({ priceId }) => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        if (!priceId) {
            console.error("Missing priceId");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/create-checkout-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ priceId }) // ✅ Изпращаме priceId към бекенда
            });

            if (!response.ok) {
                throw new Error("Failed to create checkout session");
            }

            const data = await response.json();
            window.location.href = data.url; // ✅ Препраща към Stripe checkout
        } catch (error) {
            console.error("❌ Checkout error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button 
            className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 disabled:opacity-50"
            onClick={handleCheckout} 
            disabled={loading}
        >
            {loading ? "Processing..." : "Get started today"}
        </button>
    );
};

// PropTypes за валидация
CheckoutButton.propTypes = {
    priceId: PropTypes.string.isRequired,
};

export default CheckoutButton;
