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
    <form className="space-y-">
      <div>
        <label className="text-sm text-gray-300 mb-1 block">
          {t("footer.top.form.phone")}
        </label>

        <div className="relative">
          <input
            type="tel"
            name="mobileNumber"
            value={info.mobileNumber}
            placeholder={t("footer.top.form.phonePlaceholder")}
            onChange={(e) => {
              setWarn("");
              setInfo({ ...info, mobileNumber: e.target.value });
            }}
            className="w-full py-3 px-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-red-500"
          />
          <AiOutlinePhone className="absolute right-4 top-4 text-gray-400 -rotate-90" />
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
        className={`w-full py-3 mt-2 rounded-xl font-bold text-white transition-all ${
          success
            ? "bg-red-600 hover:bg-red-700"
            : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {success ? t("footer.top.form.button2") : t("footer.top.form.button1")}
      </button>
    </form>
  );
}


