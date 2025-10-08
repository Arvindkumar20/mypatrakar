import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerProfile, makePayment } from "../../../api";

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
  console.log(user_id)
  const userId=user_id.includes(":") 
        ? user_id.split(":")[1] 
        : user_id
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
        currency: region == 0 ? "INR" : "USD",
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
            navigate("/portal/createApporWeb");
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
    <div style={styles.container}>
      {/* <h2>
        {" "}
        {region == "0" ? "₹" : "$"} <span> {amount}</span>
      </h2> */}

      {error && <div style={styles.error}>{error}</div>}

      <button
        onClick={handlePayment}
        disabled={loading}
        style={loading ? styles.buttonDisabled : styles.button}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "1.5rem",
    // border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
  },
  error: {
    color: "red",
    margin: "1rem 0",
  },
  button: {
    background: "red",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
  buttonDisabled: {
    background: "#ccc",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "not-allowed",
  },
};

export default PaymentPage;
