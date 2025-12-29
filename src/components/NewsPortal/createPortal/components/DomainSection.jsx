import { useState, useEffect, useContext } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { IoMdRefresh, IoMdRefreshCircle } from "react-icons/io";
import { PaymentContext } from "../../../../context/PaymentContext";

export default function DomainSection({
  formData,
  setFormData,
  domainResult,
  setDomainResult,
  validation,
  hasError,
  handleChange,
  handleBlur,
  getInputBorder,
  checkDomainAvailability,
}) {
  const [ownDomain, setOwnDomain] = useState(false);
  const [appliedDomain, setAppliedDomain] = useState(null);
  const [typing, setTyping] = useState(null);
  const [domainTouched, setDomainTouched] = useState(false);

  const { setPortalRequestDetails, portalRequestDetail } =
    useContext(PaymentContext);
  const domain = String(formData.free_domain || "")
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .toLowerCase();

  // ---------------------------------------------------------
  // AUTO SEARCH WHEN USER STOPS TYPING (500ms delay)
  // ---------------------------------------------------------
  useEffect(() => {
    if (!domain) {
      setDomainResult(null);
      return;
    }

    if (appliedDomain) return; // already selected – don’t recheck

    if (typing) clearTimeout(typing);

    const delay = setTimeout(() => {
      if (ownDomain) {
        checkIfDomainExists(domain);
      } else {
        checkDomainAvailability(domain);
      }
    }, 600);

    setTyping(delay);
  }, [domain, ownDomain]);

  // ---------------------------------------------------------
  // USER OWNS DOMAIN → ONLY CHECK DOMAIN EXISTS (NO PRICE)
  // ---------------------------------------------------------
  const checkIfDomainExists = async (domainName) => {
    if (!domainName) return;

    setDomainResult({ loading: true });

    try {
      const res = await fetch(`https://dns.google/resolve?name=${domainName}`);
      const data = await res.json();

      if (data && data.Answer) {
        setDomainResult({
          exists: true,
          message: "Domain verified successfully.",
        });
      } else {
        setDomainResult({
          exists: false,
          error: "Domain does not exist. Please enter a valid domain.",
        });
      }
    } catch (err) {
      setDomainResult({
        exists: false,
        error: "Unable to verify domain. Please try again.",
      });
    }
  };

  // ---------------------------------------------------------
  // Apply & Change domain (normal mode)
  // ---------------------------------------------------------
  const onApplyDomain = () => {
    setAppliedDomain(formData.free_domain);
  };

  const onChangeDomain = () => {
    setAppliedDomain(null);
    setDomainResult(null);
      setDomainTouched(false);
    setFormData((p) => ({ ...p, free_domain: "" }));
  };
useEffect(() => {
  if (!formData.website_name || domainTouched || appliedDomain || ownDomain) {
    return;
  }

  const slug = formData.website_name
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "")
    .trim();

  if (!slug) return;

  // ✅ auto add www + .com
  const autoDomain = `www.${slug}.com`;

  setFormData((prev) => ({
    ...prev,
    free_domain: autoDomain,
  }));
}, [
  formData.website_name,
  domainTouched,
  appliedDomain,
  ownDomain,
  setFormData,
]);


  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* WEBSITE NAME */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Website Name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          name="website_name"
          value={formData.website_name}
          onChange={handleChange}
          onBlur={() => handleBlur("website_name")}
          maxLength={30}
          placeholder="Your website display name"
          className={`block w-full px-3 py-3 border ${getInputBorder(
            "website_name"
          )} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500`}
        />

        <div className="flex justify-between mt-1">
          <p
            className={`text-xs ${
              hasError("website_name") ? "text-red-600" : "text-gray-500"
            }`}
          >
            {validation.errors.website_name || "Min. 3 characters"}
          </p>
          <p className="text-xs text-gray-500">
            {formData.website_name.length}/30
          </p>
        </div>
      </div>

      {/* CUSTOM DOMAIN */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Custom Domain (Optional)
        </label>

        {/* DOMAIN INPUT */}
        <div className="flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
            https://
          </span>

          <input
            type="text"
            name="free_domain"
            disabled={appliedDomain !== null}
            value={domain}
            onChange={(e) => {
              setDomainTouched(true);
              handleChange(e);
            }}
            placeholder="yourdomain.com"
            className={`flex-1 min-w-0 block w-full px-3 py-3 rounded-none rounded-r-md border ${getInputBorder(
              "free_domain"
            )} focus:outline-none focus:ring-2 focus:ring-red-500`}
          />
        </div>

        {/* BASIC VALIDATION ERROR */}
        {hasError("free_domain") && !ownDomain && (
          <p className="mt-1 text-sm text-red-600">
            {validation.errors.free_domain}
          </p>
        )}

        {/* Default subtitle */}
        {!ownDomain && !domainResult && (
          <p className="mt-1 text-xs text-gray-500">
            Free domain worth ₹999 included with your plan
          </p>
        )}

        {/* OWN DOMAIN CHECKBOX */}
        <div className="mt-3 flex items-center">
          <input
            id="own_domain"
            type="checkbox"
            checked={ownDomain}
            onChange={(e) => {
              setOwnDomain(e.target.checked);
              setPortalRequestDetails({
                ...portalRequestDetail,
                domainOwned: e.target.checked,
              });

              setAppliedDomain(null);
              setDomainResult(null);
            }}
            className="h-4 w-4 text-red-500 border-gray-300 rounded"
          />
          <label htmlFor="own_domain" className="ml-2 text-sm text-gray-700">
            I already own this domain
          </label>
        </div>
        {ownDomain && (
          <div className="border rounded-lg p-3 mt-2 bg-gray-50 w-full flex flex-col gap">
            <div className="flex items-center justify-between">
              <span className="text-md font-sans font-bold text-black">
                Existing Domain Selected:
              </span>
              <button
                type="button"
                onClick={() => {
                  setOwnDomain(false);
                  setPortalRequestDetails({
                    ...portalRequestDetail,
                    domainOwned: false,
                  });
                  setAppliedDomain(null);
                  setDomainResult(null);
                }}
                className="font-sans text-xs font-medium flex items-center justify-center gap-0.5 text-gray-600 hover:text-red-600 transition-all ease-in delay-75 "
              >
                <IoMdRefresh size={18} />
                <span className="underline underline-offset-2 ">Change</span>
              </button>
            </div>

            {/* <p className="text-red-600"> */}
            <span className="font-medium text-red-600 font-sans  text-xs flex items-start justify-start gap-1">
              <FiAlertTriangle size={25} className="font-sans font-bold" />
              <span className="mt-1.5">
                {" "}
                **Credentials required:** Our team will contact you to collect
                necessary credentials for setup.
              </span>
            </span>
            {/* </p> */}

            {/* Add your input field below if needed */}
            {/* <p className="text-sm text-gray-600 mt-">Please Fill your domain</p> */}
          </div>
        )}

        {/* ---------------- OWN DOMAIN RESULT ---------------- */}
        {ownDomain && domainResult && (
          <div className="mt-4 p-4 border rounded-lg bg-white shadow">
            {domainResult?.loading && (
              <IoMdRefreshCircle
                className="text-green-600  animate-spin "
                size={20}
              />
            )}

            {domainResult.error && (
              <p className="text-red-600 font-medium">
                {domainResult.error.message}
              </p>
            )}

            {domainResult.exists && (
              <p className="text-green-600 font-semibold">
                {domainResult.message}
              </p>
            )}
          </div>
        )}

        {/* ---------------- NORMAL DOMAIN RESULT ---------------- */}
        {!ownDomain && domainResult && (
          <div className="mt-4 ">
            {/* ERROR */}
            {domainResult.error && (
              <p className="text-red-600 font-medium">{domainResult.error}</p>
            )}
            {domainResult.loading && (
              <div className="flex items-center justify-center gap-1">
                <IoMdRefreshCircle
                  className="text-green-600  animate-spin "
                  size={20}
                />
                <span className="text-xs font-semibold text-gray-600 font-sans ">
                  Checking domain...
                </span>
              </div>
            )}
            {/* NOT AVAILABLE */}
            {domainResult.available === false && (
              <p className="text-red-600">{domainResult.message}</p>
            )}

            {/* AVAILABLE — FREE DOMAIN */}
            {domainResult.available &&
              domainResult.price <= 999 &&
              !appliedDomain && (
                <div className="flex items-center justify-between p-2 font-sans rounded-xl border border-green-200 bg-green-50">
                  {/* LEFT SIDE */}
                  <div className="flex items-start gap-2">
                    <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>

                    <div>
                      <p className="text-green-800 font-bold text-md">
                        Domain available — ₹999
                      </p>
                      <p className="text-green-600 text-xs font-medium">
                        Completely included with your plan.
                      </p>
                    </div>
                  </div>

                  {/* APPLY BUTTON */}
                  <button
                    onClick={onApplyDomain}
                    className="px-5 py-1.5 bg-gray-100 font-sans font-medium border border-green-600 text-green-700 rounded-md 
                   hover:bg-green-100 transition-all duration-200"
                  >
                    Apply
                  </button>
                </div>
              )}

            {/* AVAILABLE — PREMIUM */}
            {domainResult.available &&
              domainResult.price > 999 &&
              !appliedDomain && (
                <div>
                  <p className="text-yellow-700 font-semibold">
                    Domain available — ₹{domainResult.price}
                  </p>
                  <p className="text-sm text-gray-600">
                    ₹999 discount included — Pay extra ₹
                    {domainResult.price - 999}
                  </p>

                  <button
                    onClick={onApplyDomain}
                    className="mt-3 px-4 py-2 rounded-md bg-yellow-700 text-white hover:bg-yellow-800"
                  >
                    Use anyway
                  </button>
                </div>
              )}

            {/* DOMAIN APPLIED */}
            {/* {appliedDomain && (
              <div>
                <p className="text-green-700 font-semibold">
                  Selected Domain: {appliedDomain}
                </p>

                <button
                  onClick={onChangeDomain}
                  className="mt-3 px-4 py-2 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-50"
                >
                  Change domain
                </button>
              </div>
            )} */}
            {appliedDomain && (
              <div className="flex items-center justify-between p-4 rounded-xl border border-green-200 bg-green-50">
                {/* LEFT SIDE */}
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>

                  <p className="text-green-800 font-semibold font-sans text-">
                    Domain Applied
                  </p>
                </div>

                {/* RIGHT SIDE LINK */}

                <button
                  type="button"
                  onClick={onChangeDomain}
                  className="font-sans text-xs font-medium flex items-center justify-center gap-0.5 text-gray-600 hover:text-red-600 transition-all ease-in delay-75 "
                >
                  <IoMdRefresh size={18} />
                  <span className="underline underline-offset-2 ">
                    {" "}
                    Search another domain
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
