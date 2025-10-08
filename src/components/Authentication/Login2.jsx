import React from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// files imported here
import Description from "./Description";
import SelectCountry from "./SelectCountry";
// import { loginAuthSetup } from "./loginAuthSetup";
// import { users } from "./users";
import OtpVerificationDialog from "./OtpVerificationDialog";
import OtpMethodSelector from "./OtpMethodSelector";
import { LoginSendOtp } from "../../api";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

// function created here
export default function Login() {
  const { t } = useTranslation();
  const guid = [
    {
      heading: t("signIn.featureHeading1"),
      para: t("signIn.featureDesc1"),
    },
    {
      heading: t("signIn.featureHeading2"),
      para: t("signIn.featureDesc2"),
    },
    {
      heading: t("signIn.featureHeading3"),
      para: t("signIn.featureDesc3"),
    },
  ];
  const [match, setMatch] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [otpMethod, setOtpMethod] = useState("");
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [open, setOpen] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [loginUserData, setLoginUserData] = useState({
    mobileNumber: "",
    otpMethod: "",
  });

  const handleChange = (e) => {
    setLoginUserData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    setEmpty(false);
  };

  const navigate = useNavigate();

  //submit button click handler
  const handleUsersAuth = async (e) => {
    e.preventDefault();
    if (!otpMethod) {
      setError("Please select an OTP method");
      return;
    }
    if (!loginUserData.mobileNumber) {
      setEmpty((pre) => !pre);
      return null;
    }
    const user = await authLoginUser();
    // const user = users.find(
    //   (user) => user.mobileNumber == loginUserData.mobileNumber
    // );
    if (!user) {
      setMatch((pre) => !pre);
      navigate("/login");
    }
    // setUserId(user.id);
    setOpen(true);
  };

  const authLoginUser = async () => {
    try {
      const res = await LoginSendOtp({ mobile: loginUserData.mobileNumber });
      // console.log(res);
      setAuthToken(res.data.response);
    } catch (error) {
      setError(error.response.data.errors.mobile[0]);
      // console.log(error)
    }
  };
  return (
    <>
      <Helmet>
        <title>Sign In | MyPatrakar - Access Your News Portal</title>
        <meta
          name="description"
          content="Sign in to your MyPatrakar account to manage your news portal, publish content, and engage with your audience. Secure and easy login."
        />
        <meta
          name="keywords"
          content="MyPatrakar sign in, news portal login, journalist account, media dashboard access, news website management"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="flex flex-col md:flex-row lg:mx-10 md:mx-3 mx-2 items-center md:justify-evenly justify-center ">
        {/* Description Section */}
        <div className=" lg:w-1/2 md:1/3 flex items-start">
          <Description guid={guid} />
        </div>
        {/* Form Section */}
        <div className="lg:mt-10 mt-20 flex items-center justify-center   lg:w-1/3 md:w-1/2 sm:w-1/2  lg:px-10 px-4 py-10 bg-white rounded-lg shadow-xl border shadow-gray-400">
          <form>
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* Heading */}
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-red-600">Log In</h1>
                {match ? (
                  <p className="text-md font-medium text-red-500">{error}</p>
                ) : empty && !match ? (
                  <p className="text-md font-medium text-red-500">
                    All fields are required
                  </p>
                ) : (
                  <p className="text-md font-medium text-gray-500">
                    Get Started in 2 minutes
                  </p>
                )}
              </div>
              {/* Country Select */}
              <div className="p-3 border-2 rounded w-full">
                <SelectCountry setCountryCode={setCountryCode} />
              </div>
              {/* Mobile Number Input */}
              <div className="w-full">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  pattern="^[0-9]{10}$" // Allow only 10-digit numbers
                  title="Phone number must be 10 digits" // Tooltip for invalid input
                  required
                  minLength={10}
                  maxLength={12}
                  value={loginUserData.mobileNumber}
                  onChange={handleChange}
                  className="p-3 border-2 rounded w-full outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              {/* OTP Options */}
              <div className="w-full">
                <p className="text-gray-700">
                  How do you want to receive the OTP?
                </p>
                <div className="flex gap-6 mt-2">
                  <OtpMethodSelector
                    otpMethod={otpMethod}
                    setOtpMethod={setOtpMethod}
                    error={error}
                    setError={setError}
                  />
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                
                className="p-3 rounded bg-red-600 text-white font-semibold w-full hover:bg-red-700 transition"
                onClick={handleUsersAuth}
              >
                CONTINUE
              </button>
              {/* </Link> */}

              {/* Sign Up and Policy Links */}
              <p className="text-gray-700">
                {` Don't`} have an Account?{" "}
                <Link
                  to="/signup"
                  className="text-red-600 hover:no-underline hover:text-red-700 focus:text-red-600 focus:no-underline"
                >
                  Sign Up
                </Link>
              </p>
              <p className="text-left text-gray-700">
                By continuing, you agree to our{" "}
                <Link
                  to="/privacy-policy"
                  target="_blank"
                  className="text-red-600 hover:no-underline hover:text-red-700 focus:text-red-600 focus:no-underline"
                >
                  Policy
                </Link>{" "}
                and{" "}
                <Link
                  to={"/terms-and-conditions"}
                  target="_blank"
                  className="text-red-600 hover:no-underline hover:text-red-700 focus:text-red-600 focus:no-underline"
                >
                  Terms & Conditions
                </Link>
                .
              </p>
            </div>
          </form>
          {open && (
            <OtpVerificationDialog
              open={open}
              otpMethod={otpMethod}
              countryCode={countryCode}
              setOpen={setOpen}
              authToken={authToken}
              mobile={loginUserData.mobileNumber}
            />
          )}
        </div>
      </div>
    </>
  );
}
