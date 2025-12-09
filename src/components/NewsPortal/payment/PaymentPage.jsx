import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerProfile, makePayment } from "../../../api";
import { Weight } from "lucide-react";

const PaymentPage = ({ amount, region, user_id, purchaseId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    wallet: "",
  });
  console.log(region);
  const userId = user_id.includes(":") ? user_id.split(":")[1] : user_id;
  const getProfile = async () => {
    try {
      // const userId = JSON.parse(sessionStorage.getItem("userData"));
      const res = await CustomerProfile({ customer_id: userId });
      // console.log(res)
      setUser(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  console.log(user.mobile);
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // 1. Load Razorpay script
      const loaded = await loadRazorpayScript();
      if (!loaded) throw new Error("Failed to load Razorpay");
      // 2. Directly initialize payment without order creation
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Your test/live key
        amount: amount * 100, // Paise
        currency:
          region == "0" || region == undefined || region == null
            ? "INR"
            : "USD",
        name: "MyPtrakar",
        description: "Payment for services",
        handler: async function (response) {
          console.log("Payment success:", response);
          console.log(response);
          const purchase_id = purchaseId.includes(":")
            ? purchaseId.replace(":", "")
            : purchaseId;

          try {
            const res = await makePayment({
              purchase_id: purchase_id,
              transection_id: response.razorpay_payment_id,
            });
            console.log(res);
            navigate("/portal/payment-reciept");
          } catch (error) {
            console.log(error);
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.mobile,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        setError(`Payment failed: ${response.error.description}`);
      });
      rzp.open();
    } catch (err) {
      setError(err.message || "Payment initialization failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      {error && <div style={styles.errorBox}>{error}</div>}

      <button
        onClick={handlePayment}
        disabled={loading}
        style={loading ? styles.buttonDisabled : styles.button}
      >
        {loading ? (
          <span style={{ opacity: 0.7 }}>Processing Payment...</span>
        ) : (
          "Pay Securely"
        )}
      </button>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
  },
  errorBox: {
    color: "#b91c1c",
    background: "#fee2e2",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "1rem",
    border: "1px solid #fecaca",
  },

  button: {
    width: "100%",
    background: "#ef4444",
    color: "white",
    padding: "14px 20px",
    border: "none",
    borderRadius: "10px",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.2s ease",
    boxShadow: "0 3px 10px rgba(255,0,0,0.2)",
  },

  buttonDisabled: {
    width: "100%",
    background: "#d1d5db",
    color: "#fff",
    padding: "14px 20px",
    border: "none",
    borderRadius: "10px",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "not-allowed",
  },

 
};

export default PaymentPage;
