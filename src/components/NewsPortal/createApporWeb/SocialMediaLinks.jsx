import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PreViewContext } from "../../../context/PreViewContext";

const SocialMediaLinks = ({
  setUserRequest,
  setEmpty,
  submitForm,
  setSubmitForm,
}) => {
  const {webPreview, updateWebPreview } = useContext(PreViewContext);
  const [links, setLinks] = useState({
    fb_link: "",
    insta_link: "",
    twitter_link: "",
    linkedin_link: "",
    youtube_link: "",
    whats_link: "",
    koo_link: "",
    telegram_link: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [activeField, setActiveField] = useState(null);

  // Platform-specific validation patterns
  const PLATFORM_PATTERNS = {
    fb_link: {
      domains: ["facebook.com"],
      example: "facebook.com/yourpage",
      prefixes: ["facebook.com", "www.facebook.com", "fb.com"],
    },
    insta_link: {
      domains: ["instagram.com"],
      example: "instagram.com/username",
      prefixes: ["instagram.com", "www.instagram.com"],
    },
    twitter_link: {
      domains: ["x.com", "twitter.com"],
      example: "x.com/username",
      prefixes: ["x.com", "twitter.com", "www.x.com", "www.twitter.com"],
    },
    linkedin_link: {
      domains: ["linkedin.com"],
      example: "linkedin.com/in/username",
      prefixes: ["linkedin.com", "www.linkedin.com"],
    },
    youtube_link: {
      domains: ["youtube.com"],
      example: "youtube.com/c/channelname",
      prefixes: ["youtube.com", "www.youtube.com", "youtu.be"],
    },
    koo_link: {
      domains: ["kooapp.com"],
      example: "kooapp.com/profile/username",
      prefixes: ["kooapp.com", "www.kooapp.com"],
    },
    telegram_link: {
      domains: ["t.me"],
      example: "t.me/username",
      prefixes: ["t.me"],
    },
  };

  // Format WhatsApp number automatically
  const formatWhatsAppNumber = (value) => {
    if (!value) return "";

    // Allow only numbers and +
    let cleaned = value.replace(/[^\d+]/g, "");

    // Auto-add country code if Indian number
    if (cleaned.length >= 10 && !cleaned.startsWith("+")) {
      if (cleaned.startsWith("0")) {
        cleaned = `+91${cleaned.substring(1)}`;
      } else if (cleaned.length === 10) {
        cleaned = `+91${cleaned}`;
      }
    }

    return cleaned.substring(0, 13); // limit length
  };

  // Complete partial URLs
  const completeUrl = (value, name) => {
    if (!value) return "";

    // Skip if already has protocol
    if (value.startsWith("http://") || value.startsWith("https://")) {
      return value;
    }

    const platform = PLATFORM_PATTERNS[name];
    if (!platform) return `https://${value}`;

    const hasDomain = platform.prefixes.some(
      (prefix) => value.startsWith(prefix) || value.includes(`.${prefix}`)
    );

    if (hasDomain) {
      return `https://${value}`;
    }

    const mainDomain = platform.domains[0];
    if (!value.startsWith("www.")) {
      return `https://www.${mainDomain}/${value.replace(/^\/+/, "")}`;
    }

    return `https://${value}`;
  };

  // Validate field: empty is allowed; non-empty must conform
  const validateField = (name, value) => {
    if (!value || !value.trim()) return ""; // optional

    if (name === "whats_link") {
      if (!/^\+?\d{10,15}$/.test(value)) {
        return "Enter valid WhatsApp number (e.g., +911234567890)";
      }
      return "";
    }

    try {
      const url = completeUrl(value, name);
      new URL(url); // throws if invalid

      const domain = url.split("/")[2]?.toLowerCase() || "";
      const validDomains = PLATFORM_PATTERNS[name]?.domains || [];

      if (
        validDomains.length &&
        !validDomains.some((d) => domain.includes(d))
      ) {
        return `URL must contain ${validDomains.join(" or ")}`;
      }

      return "";
    } catch {
      return "Please enter a valid URL";
    }
  };

  // Handle input changes with proper formatting
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpty(false);

    if (name === "whats_link") {
      const formatted = formatWhatsAppNumber(value);
      setLinks((prev) => ({ ...prev, [name]: formatted }));
      if (touched[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validateField(name, formatted),
        }));
      }
      return;
    }

    setLinks((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  // Handle focus/blur
  const handleFocus = (name) => {
    setActiveField(name);
    if (!touched[name]) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setActiveField(null);

    if (name !== "whats_link" && value) {
      const completedUrl = completeUrl(value, name);
      if (completedUrl !== value) {
        setLinks((prev) => ({ ...prev, [name]: completedUrl }));
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  // Sync formatted data upward
  useEffect(() => {
    const formattedLinks = { ...links };
 
    Object.keys(formattedLinks).forEach((key) => {
      if (key !== "whats_link" && formattedLinks[key]) {
        formattedLinks[key] = completeUrl(formattedLinks[key], key);
      }
    });
    // Correct way to update social media links in the preview
   updateWebPreview({...webPreview,socialMedia:formattedLinks});

    setUserRequest((prev) => ({ ...prev, socialMediaLinks: formattedLinks }));
  }, [links, setUserRequest]);

  // Validate on submitForm trigger
  useEffect(() => {
    if (submitForm) {
      const newErrors = {};
      let hasErrors = false;

      Object.keys(links).forEach((key) => {
        const val = links[key] || "";
        if (val.trim()) {
          newErrors[key] = validateField(key, val);
          if (newErrors[key]) hasErrors = true;
        } else {
          newErrors[key] = ""; // empty is fine
        }
      });

      setErrors(newErrors);
      setTouched(
        Object.keys(links).reduce((acc, key) => ({ ...acc, [key]: true }), {})
      );
      setSubmitForm(false);
      setEmpty(hasErrors);
    }
  }, [submitForm, links, setSubmitForm, setEmpty]);

  // Social media fields config
  const socialMediaFields = [
    {
      label: "Facebook",
      name: "fb_link",
      icon: "fab fa-facebook",
      color: "text-blue-600",
      prefix: "https://",
      ...PLATFORM_PATTERNS.fb_link,
    },
    {
      label: "Twitter/X",
      name: "twitter_link",
      icon: "fab fa-twitter",
      color: "text-black",
      prefix: "https://",
      ...PLATFORM_PATTERNS.twitter_link,
    },
    {
      label: "Instagram",
      name: "insta_link",
      icon: "fab fa-instagram",
      color: "text-pink-600",
      prefix: "https://",
      ...PLATFORM_PATTERNS.insta_link,
    },
    {
      label: "YouTube",
      name: "youtube_link",
      icon: "fab fa-youtube",
      color: "text-red-600",
      prefix: "https://",
      ...PLATFORM_PATTERNS.youtube_link,
    },
    {
      label: "Koo",
      name: "koo_link",
      icon: "fas fa-comment",
      color: "text-yellow-600",
      prefix: "https://",
      ...PLATFORM_PATTERNS.koo_link,
    },
    {
      label: "LinkedIn",
      name: "linkedin_link",
      icon: "fab fa-linkedin",
      color: "text-blue-500",
      prefix: "https://",
      ...PLATFORM_PATTERNS.linkedin_link,
    },
    {
      label: "WhatsApp",
      name: "whats_link",
      icon: "fab fa-whatsapp",
      color: "text-green-500",
      example: "+911111111111",
      helpText: "We'll automatically add country code if missing",
    },
    {
      label: "Telegram",
      name: "telegram_link",
      icon: "fab fa-telegram",
      color: "text-blue-400",
      prefix: "https://",
      ...PLATFORM_PATTERNS.telegram_link,
    },
  ];

  // arrange in rows of 3
  const rows = [];
  for (let i = 0; i < socialMediaFields.length; i += 3) {
    rows.push(socialMediaFields.slice(i, i + 3));
  }

  return (
    <div className="container mx-auto bg-white p-6 my-6 rounded-lg shadow-sm border border-gray-100">
      <h1 className="text-gray-800 font-semibold text-xl mb-6 flex items-center">
        <i className="fas fa-share-alt mr-2 text-blue-500"></i>
        Social Media Links
      </h1>

      {rows.map((rowFields, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
        >
          {rowFields.map((field) => {
            const isActive = activeField === field.name;
            const isTouched = touched[field.name];
            const error = errors[field.name];
            const showError = isTouched && error;
            const showHelp =
              isTouched && !error && (field.helpText || isActive);

            const inputValue =
              field.name === "whats_link"
                ? links[field.name]
                : links[field.name]?.replace(/^https?:\/\/(www\.)?/, "") || "";

            return (
              <div key={field.name} className="flex-1">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  <i className={`${field.icon} ${field.color} mr-2`}></i>
                  {field.label}
                </label>

                <div className="relative">
                  {field.prefix && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">{field.prefix}</span>
                    </div>
                  )}
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.name === "whats_link" ? "tel" : "text"}
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={() => handleFocus(field.name)}
                    onBlur={handleBlur}
                    placeholder={field.example}
                    className={`block w-full ${
                      field.prefix ? "pl-16" : "pl-3"
                    } py-2 border ${
                      showError
                        ? "border-red-500 focus:ring-red-500"
                        : isActive
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none transition-all duration-200`}
                    aria-describedby={`${field.name}-help`}
                  />
                </div>

                {showError && (
                  <p
                    id={`${field.name}-error`}
                    className="mt-1 text-sm text-red-600 animate-fadeIn"
                  >
                    <i className="fas fa-exclamation-circle mr-1"></i>
                    {error}
                  </p>
                )}

                {showHelp && (
                  <p
                    id={`${field.name}-help`}
                    className="mt-1 text-xs text-gray-500 animate-fadeIn"
                  >
                    {field.helpText || `Example: ${field.example}`}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

SocialMediaLinks.propTypes = {
  setUserRequest: PropTypes.func.isRequired,
  setEmpty: PropTypes.func.isRequired,
  submitForm: PropTypes.bool.isRequired,
  setSubmitForm: PropTypes.func.isRequired,
};

export default SocialMediaLinks;
