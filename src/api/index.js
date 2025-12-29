import axios from "axios";

const API = axios.create({
  // baseURL: "/api",  // Correct concatenation
  baseURL: "https://super-admin.hindtechitsolutions.com/api", // Correct concatenation
});
const AuthToken = "abc123";
// get api

export const GetRepoters = () => async () =>
  await API.post(
    "/reporters-uses-my-patrakar",
    {},
    {
      headers: {
        Authorization: AuthToken,
      },
    }
  );

export const getLanguages = async () => {
  return await API.get(
    "/recommded-language",
    {
      headers: {
        Authorization: AuthToken,
      },
    }
  );
};

export const GetFeature = async () =>
  await API.post(
    "/features-in-my-patrakar",
    {},
    {
      headers: {
        Authorization: AuthToken,
      },
      // withCredentials:true
    }
  );

export const DownloadBochure = async () =>
  await API.post(
    "/download-brochure",
    {},
    {
      responseType: "blob",
      headers: {
        Authorization: AuthToken,
      },
    }
  );

export const GetPriceDetails = async () =>
  await API.post(
    "/pricing-in-my-patrakar",
    {},
    {
      headers: {
        Authorization: AuthToken,
      },
    }
  );

// export const GetFeature = async () => await API.get("/features-in-my-patrakar");
export const OrderDetails = async () =>
  await API.get("/pricing-in-my-patrakar", {
    headers: {
      Authorization: AuthToken,
    },
  });
export const GetResources = async () =>
  await API.get("/resources-in-my-patrakar", {
    headers: {
      Authorization: AuthToken,
    },
  });

export const ContactDetails = async () =>
  await API.get("/contact", {
    headers: {
      Authorization: AuthToken,
    },
  });
export const CustomerProfile = async (id) =>
  await API.post(
    `/get-customer-profile`,
    { customer_id: id },
    {
      headers: {
        Authorization: AuthToken,
      },
    }
  );
export const GetPortalList = async (customer_id) =>
  await API.post(
    `/get-portal-list`,
    { customer_id: customer_id },
    {
      headers: {
        Authorization: AuthToken,
      },
    }
  );

// export const PaymentDetails = async () => await API.get("/payment-details");
export const BlogCategoryId = async () =>
  await API.get("/blog-category", {
    headers: {
      Authorization: AuthToken,
    },
  });
export const FindBlogs = async (blog_category) =>
  await API.post("/blog-by-category", blog_category, {
    headers: {
      Authorization: AuthToken,
    },
  });
export const PrivacyAndPolicy = async () =>
  await API.get("/privacy-policy", {
    headers: {
      Authorization: AuthToken,
    },
  });
export const Terms_Conditions = async () =>
  await API.get("/term-condition", {
    headers: {
      Authorization: AuthToken,
    },
  });
// post api
export const ContactSupport = async (data) =>
  await API.post("/contact-support", data, {
    headers: {
      Authorization: AuthToken,
    },
  });
//for login
export const LoginSendOtp = async (data) =>
  await API.post("/auth-login", data, {
    headers: {
      Authorization: AuthToken,
    },
  });

export const VerifyLoginOtp = async (data) =>
  await API.post("/auth-verify", data, {
    headers: {
      Authorization: AuthToken,
    },
  });

//for signup
export const SignupSendOtp = async (data) =>
  await API.post("/send-signup-otp", data, {
    headers: {
      Authorization: AuthToken,
    },
  });

export const VerifySignUpOtp = async (data) =>
  await API.post("/verify-signup-otp", data, {
    headers: {
      Authorization: AuthToken,
    },
  });
// for logout
export const Logout = async (customer_id) =>
  await API.post("/auth-logout", customer_id, {
    headers: {
      Authorization: AuthToken,
    },
  });

export const PackageByRegion = async (region) =>
  await API.post("/package-by-region", region, {
    headers: {
      Authorization: AuthToken,
    },
  });
export const CreateNewPortal = async (data) =>
  await API.post("/create-portal", data, {
    headers: {
      Authorization: AuthToken,
    },
  });
export const ApplyCoupon = async (data) =>
  await API.post("/apply-coupon", data, {
    headers: {
      Authorization: AuthToken,
    },
  });
export const PaymentStatus = async () =>
  await API.post("/make-payment", {
    headers: {
      Authorization: AuthToken,
    },
  });
export const PaymentMethod = async (data) =>
  await API.post("/payment/payment-method", data); //customer card details

export const CreateAppOrWebCustomer = async (data) => {
  console.log(data);
  // return await API.post("/create-app-or-web", data, {
  return await API.post("/create-app-or-web", data, {
    headers: {
      Authorization: AuthToken,
    },
  });
};

// encrypt string or ids
export const EncryptString = async (id) =>
  await API.get(`/encrypt-string/:${id}`, {
    headers: {
      Authorization: AuthToken,
    },
  });

// decrypting string or ids
export const DecryptString = async (id) =>
  await API.get(`/decrypt-string/:${id}`, {
    headers: {
      Authorization: AuthToken,
    },
  });

// get states with the help of country
export const getSates = async () =>
  await API.post(
    `/getStates`,
    { name: "India" },
    {
      headers: {
        Authorization: AuthToken,
      },
    }
  );

// get cities with the help of state
export const getCitiesBySates = async (name) =>
  await API.post(
    `/getCities`,
    {
      name: name,
    },
    {
      headers: {
        Authorization: AuthToken,
      },
    }
  );

// get package tetails selected by user
export const getPurchaseDetails = async (purchase_id) =>
  await API.post(
    `/purchased-details`,
    {
      purchase_id: purchase_id,
    },
    {
      headers: {
        Authorization: AuthToken,
      },
    }
  );

// make payment or razorpay
export const makePayment = async (data) =>
  await API.post(
    `/make-payment`,
    {
      purchase_id: data.purchase_id,
      transection_id: data.transection_id,
    },
    {
      headers: {
        Authorization: AuthToken,
      },
    }
  );
