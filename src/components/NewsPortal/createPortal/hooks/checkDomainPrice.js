// import axios from "axios";

// /**
//  * Check domain availability and price
//  * @param {string} domain - The domain to check (e.g., "example.com")
//  * @returns {Promise<object>} Domain check result
//  */
// export const checkDomainPrice = async (domain) => {
//   try {
//     // Validate domain format
//     if (!domain || typeof domain !== "string") {
//       return {
//         available: false,
//         error: "Invalid domain provided",
//         message: "Please enter a valid domain name",
//       };
//     }

//     // Clean the domain
//     const cleanDomain = domain.toLowerCase().trim();
    
//     // Basic validation
//     const domainRegex = /^(?!:\/\/)([a-z0-9-]+\.)+[a-z]{2,}$/;
//     if (!domainRegex.test(cleanDomain)) {
//       return {
//         available: false,
//         error: "Invalid domain format",
//         message: "Domain must be in format: example.com",
//       };
//     }

//     // Check if it's a common TLD
//     const commonTLDs = [".com", ".in", ".co.in", ".org", ".net", ".info"];
//     const hasValidTLD = commonTLDs.some((tld) => cleanDomain.endsWith(tld));
    
//     if (!hasValidTLD) {
//       return {
//         available: false,
//         error: "Unsupported TLD (.com, .in, .org, .net, .info)",
//         message: "We currently support only common TLDs (.com, .in, .org, .net, .info)",
//       };
//     }

//     // For demo purposes - simulate API call
//     // In real implementation, you would call a domain registrar API
    
//     // Example: Namecheap API or similar
//     // const response = await axios.get(`https://api.domain-registrar.com/check?domain=${cleanDomain}`);
    
//     // Mock response for demonstration
//     const mockResponse = await simulateDomainCheck(cleanDomain);
    
//     return mockResponse;
    
//   } catch (error) {
//     console.error("Domain check error:", error);
//     return {
//       available: false,
//       error: "Failed to check domain",
//       message: "Unable to verify domain availability. Please try again.",
//     };
//   }
// };

// /**
//  * Simulate domain check (replace with actual API call)
//  * @param {string} domain - Domain to check
//  * @returns {Promise<object>} Mock result
//  */
// const simulateDomainCheck = async (domain) => {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 500));

//   // Mock pricing based on TLD
//   const tldPrices = {
//     ".com": { price: 999, currency: "INR" },
//     ".in": { price: 499, currency: "INR" },
//     ".co.in": { price: 399, currency: "INR" },
//     ".org": { price: 899, currency: "INR" },
//     ".net": { price: 1099, currency: "INR" },
//     ".info": { price: 599, currency: "INR" },
//   };

//   // Get TLD from domain
//   const tld = "." + domain.split(".").pop();
//   const basePrice = tldPrices[tld] || tldPrices[".com"];

//   // Mock availability - 70% chance of being available
//   const isAvailable = Math.random() > 0.3;

//   if (isAvailable) {
//     return {
//       available: true,
//       price: basePrice.price,
//       currency: basePrice.currency,
//       domain: domain,
//       message: "Domain is available for registration",
//     };
//   } else {
//     return {
//       available: false,
//       price: null,
//       currency: null,
//       domain: domain,
//       message: `Sorry, ${domain} is already registered. Try a different domain.`,
//       suggestions: [
//         `news${domain}`,
//         `${domain.split(".")[0]}news.com`,
//         `my${domain}`,
//       ],
//     };
//   }
// };

// /**
//  * Alternative: Actual API implementation examples
//  */

// // Example 1: Using Namecheap API (requires API key)
// export const checkDomainWithNamecheap = async (domain) => {
//   try {
//     const API_USER = process.env.REACT_APP_NAMECHEAP_API_USER;
//     const API_KEY = process.env.REACT_APP_NAMECHEAP_API_KEY;
//     const CLIENT_IP = process.env.REACT_APP_CLIENT_IP;

//     const response = await axios.get(
//       `https://api.sandbox.namecheap.com/xml.response`, // Use sandbox for testing
//       {
//         params: {
//           ApiUser: API_USER,
//           ApiKey: API_KEY,
//           UserName: API_USER,
//           Command: "namecheap.domains.check",
//           ClientIp: CLIENT_IP,
//           DomainList: domain,
//         },
//       }
//     );

//     // Parse XML response (Namecheap returns XML)
//     return parseNamecheapResponse(response.data);
//   } catch (error) {
//     console.error("Namecheap API error:", error);
//     throw error;
//   }
// };

// // Example 2: Using GoDaddy API
// export const checkDomainWithGoDaddy = async (domain) => {
//   try {
//     const API_KEY = import.meta.env.VITE_GODADDADY_API_KEY;
//     const API_SECRET =import.meta.env.VITE_GODADDADY_API_SECRET;

//     const response = await axios.get(
//       `https://api.godaddy.com/v1/domains/available`,
//       {
//         params: { domain },
//         headers: {
//           Authorization: `sso-key ${API_KEY}:${API_SECRET}`,
//           Accept: "application/json",
//         },
//       }
//     );

//     return {
//       available: response.data.available,
//       price: response.data.price,
//       currency: response.data.currency,
//       domain: domain,
//     };
//   } catch (error) {
//     console.error("GoDaddy API error:", error);
//     throw error;
//   }
// };

// // Example 3: Using Domains.co.in API (Indian registrar)
// export const checkDomainWithDomainsCoIn = async (domain) => {
//   try {
//     const response = await axios.post(
//       "https://api.domains.co.in/v1/check",
//       {
//         domain: domain,
//         tlds: [".com", ".in", ".co.in", ".org"],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${process.env.REACT_APP_DOMAINSCOIN_API_KEY}`,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Domains.co.in API error:", error);
//     throw error;
//   }
// };

// /**
//  * Helper function to parse XML response
//  */
// const parseNamecheapResponse = (xmlString) => {
//   // Simple XML parsing (in real app, use xml2js or similar)
//   const availableMatch = xmlString.match(/<DomainCheckResult.*?Available="(true|false)"/);
//   const priceMatch = xmlString.match(/<DomainCheckResult.*?Price="([\d.]+)"/);
//   const currencyMatch = xmlString.match(/<DomainCheckResult.*?Currency="([A-Z]+)"/);

//   return {
//     available: availableMatch ? availableMatch[1] === "true" : false,
//     price: priceMatch ? parseFloat(priceMatch[1]) : null,
//     currency: currencyMatch ? currencyMatch[1] : "USD",
//   };
// };

// // Export all functions
// export default {
//   checkDomainPrice,
//   checkDomainWithNamecheap,
//   checkDomainWithGoDaddy,
//   checkDomainWithDomainsCoIn,
// };

import axios from "axios";

/**
 * Check domain availability & price using GoDaddy API
 * Frontend-only (DEMO / TESTING PURPOSE)
 *
 * @param {string} domain - example.com
 * @returns {Promise<object>}
 */
const CORS_PROXY = "https://corsproxy.io/?";

export const checkDomainPrice = async (domain) => {
  try {
    const url = `${CORS_PROXY}https://api.godaddy.com/v1/domains/available?domain=${domain}`;

    const res = await axios.get(url, {
      headers: {
        Authorization: `sso-key ${import.meta.env.VITE_GODADDY_API_KEY}:${import.meta.env.VITE_GODADDY_API_SECRET}`,
        Accept: "application/json",
      },
    });

    return {
      domain,
      available: res.data.available,
      price: res.data.price ? res.data.price / 1000000 : null,
      currency: res.data.currency,
    };
  } catch (err) {
    console.error("CORS Proxy Error:", err);
    return {
      available: false,
      error: "CORS blocked / proxy failed",
    };
  }
};


export default checkDomainPrice;
