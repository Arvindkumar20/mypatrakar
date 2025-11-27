import React, { useState } from "react";
import { AiOutlineExclamationCircle, AiOutlinePhone } from "react-icons/ai";

export default function ContactForm({ t, onSuccess }) {
  const [warn, setWarn] = useState("");
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState({ mobileNumber: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!info.mobileNumber) {
      setWarn("Mobile number is required");
    } else if (!/^\d{10}$/.test(info.mobileNumber)) {
      setWarn("Please enter a valid 10-digit mobile number");
    } else if (!info.message) {
      setWarn("Message is required");
    } else {
      setWarn("");
      setSuccess(true);
      onSuccess();
      setInfo({ mobileNumber: "", message: "" });
    }
  };

  return (
    <div>
      <form className="space-y-4">
        <div>
          <label className="text-sm text-gray-300 mb-1 block">
            {t("footer.top.form.phone")}
          </label>

          <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl px-4 py-3">
            {/* Country Code Dropdown */}
            <select
              value={info.countryCode}
              onChange={(e) =>
                setInfo({ ...info, countryCode: e.target.value })
              }
              className="bg-transparent text-white outline-none pr-"
            >
              <option className="text-black" value="+91">
                +91
              </option>
              <option className="text-black" value="+65">
                +65
              </option>
              <option className="text-black" value="+1">
                +1
              </option>
              <option className="text-black" value="+44">
                +44
              </option>
              <option className="text-black" value="+971">
                {" "}
                +971
              </option>
            </select>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-600 mx-3"></div>

            {/* Phone Input */}
            <input
              type="tel"
              value={info.mobileNumber}
              onChange={(e) => {
                // Remove any non-digit characters
                const onlyDigits = e.target.value.replace(/\D/g, "");
                // Limit to 10 digits
                if (onlyDigits.length <= 10) {
                  setInfo({ ...info, mobileNumber: onlyDigits });
                }
              }}
              className="flex-1 bg-transparent text-white outline-none"
              placeholder="Enter your mobile number"
              maxLength={10}
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-300 mb-1 mt-2 block">
            {t("footer.top.form.message")}
          </label>

          <textarea
            name="message"
            value={info.message}
            placeholder={t("footer.top.form.messagePlaceholder")}
            onChange={(e) => {
              setWarn("");
              setInfo({ ...info, message: e.target.value });
            }}
            className="w-full h-12 px-4 pt-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-red-500 resize-none"
          ></textarea>
        </div>

        {warn && (
          <div className="flex items-center gap-2 p-3 bg-red-900/20 rounded-lg border border-red-800">
            <AiOutlineExclamationCircle className="text-red-500 text-xl" />
            <p className="text-red-400 text-sm">{warn}</p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className={`w-full py-3 mt-3 rounded-xl font-bold text-white transition-all ${
            success
              ? "bg-red-600 hover:bg-red-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {success
            ? t("footer.top.form.button2")
            : t("footer.top.form.button1")}
        </button>
      </form>
    </div>
  );
}
