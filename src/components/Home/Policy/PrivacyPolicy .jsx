import { Helmet } from "react-helmet-async";
import { PrivacyAndPolicy } from "../../../api";
import HtmlToPlainText from "../Blog/BlogPages/HtmlToPlainText";
import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [content, setContent] = useState("");
  const showPrivacyAndPolicy = async () => {
    try {
      const res = await PrivacyAndPolicy();
      setContent(res.data.response);
      // console.log(res.data.response.content);
    } catch (error) {
      return <p>{error}</p>;
    }
  };
  useEffect(() => {
    showPrivacyAndPolicy();
  }, []);
  const logoUrl = "https://mypatrakar.com/assets/LG2-CcMgpPb7.svg";
  return (
    <>
      <Helmet>
        {/* Title with Strong Keywords */}
        <title>
          Privacy Policy | MyPatrakar - Secure & Transparent Data Protection
        </title>
        {/* SEO Optimized Meta Description */}
        <meta
          name="description"
          content="Explore MyPatrakar's Privacy Policy to understand how we securely collect, store, and protect your personal data. 100% GDPR-compliant. Your security, our priority."
        />
        {/* Targeted Keywords for Higher Ranking */}
        <meta
          name="keywords"
          content="Privacy Policy, MyPatrakar Data Security, GDPR compliance, Online Privacy Protection, Personal Data Handling, Secure Information Management, News Platform Privacy"
        />
        {/* Indexing Instructions */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags (For Social Media Previews) */}
        <meta
          property="og:title"
          content="MyPatrakar Privacy Policy - Your Data, Your Rights"
        />
        <meta
          property="og:description"
          content="Read MyPatrakar's privacy policy to understand how we handle your data securely and transparently."
        />
        <meta property="og:image" content={logoUrl} />
        <meta
          property="og:url"
          content="https://mypatrakar.com/privacy-policy"
        />
        <meta property="og:type" content="article" />

        {/* Twitter Card Meta Tags (For Twitter Sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MyPatrakar Privacy Policy - Secure & Transparent"
        />
        <meta
          name="twitter:description"
          content="Find out how MyPatrakar protects your personal data with the highest security standards."
        />
        <meta name="twitter:image" content={logoUrl} />

        {/* Schema.org JSON-LD Markup for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy - MyPatrakar",
            url: "https://mypatrakar.com/privacy-policy",
            description:
              "MyPatrakar's Privacy Policy outlines how we securely collect, process, and protect your personal information.",
            publisher: {
              "@type": "Organization",
              name: "MyPatrakar",
              url: "https://mypatrakar.com",
              logo: logoUrl,
            },
          })}
        </script>
      </Helmet>
      <div className="container mt-36">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-lg mb-2">Learn how we handle your data</p>
          {/* <small className="text-gray-500">Updated 1 October, 2024</small> */}
        </div>
        <hr className="my-5" />
        <div className="flex items-start justify-start mb-5">
          {content ? (
            <HtmlToPlainText htmlContent={content.content} id={content.id} />
          ) : (
            <p className="text-center text-xl">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
