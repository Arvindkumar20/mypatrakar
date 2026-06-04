import { Globe, Headphones, Mail, Phone } from "lucide-react";
import React from "react";

const EditorialPolicy = () => {
  return (
    <div className="bg-gray-50 mt-28 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          {/* Header Section */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-red-500 pl-4 mb-6">
            Editorial Policy
            <sup className="text-base text-gray-500 ml-1"></sup>
          </h1>

          {/* Effective Date Badge */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-1.5">
              <i className="fas fa-calendar-alt text-red-400 text-xs"></i>
              <span>
                Effective Date:{" "}
                <span className="font-medium text-gray-700">26/01/2026</span>
              </span>
            </div>
            {/* <div className="w-px h-4 bg-gray-300 hidden sm:block"></div> */}
            {/* <div className="flex items-center gap-1.5">
              <i className="fas fa-sync-alt text-red-400 text-xs"></i>
              <span>
                Updated:{" "}
                <span className="font-medium text-gray-700">21 May, 2026</span>
              </span>
            </div> */}
          </div>

          {/* Editorial Content */}
          <div className="prose prose-lg text-gray-700 space-y-6 max-w-none">
            {/* Welcome & platform intro */}
            <p>
              Welcome to{" "}
              <strong className="font-semibold">
                My Patrakar<sup></sup>
              </strong>
              . We are committed to maintaining responsible digital publishing
              standards, transparency, accuracy, and ethical journalism
              practices across our platform, applications, and media services.
            </p>
            <p>
              This Editorial Policy explains how content is managed, reviewed,
              published, and maintained within the My Patrakar<sup></sup>{" "}
              ecosystem.
            </p>

            {/* 1. About Our Platform */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              1. About Our Platform
            </h2>
            <p>
              My Patrakar<sup></sup> is a digital media technology platform that
              enables journalists, news publishers, media organizations,
              bloggers, and businesses to create and manage:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>News Mobile Applications</li>
              <li>Digital News Websites</li>
              <li>Media Publishing Platforms</li>
              <li>News Portals and Content Systems</li>
            </ul>
            <p>
              Our platform supports digital publishing and content distribution
              through web and mobile technologies.
            </p>

            {/* 2. Editorial Standards */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              2. Editorial Standards
            </h2>
            <p>
              We aim to ensure that published content follows basic editorial
              and ethical publishing standards.
            </p>
            <p>Our editorial principles include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Accuracy and factual reporting</li>
              <li>Responsible publishing practices</li>
              <li>Transparency of content sources</li>
              <li>Respectful and lawful content distribution</li>
              <li>Timely updates and corrections when necessary</li>
            </ul>
            <p>
              We discourage misleading, false, harmful, or manipulated
              information on our platform.
            </p>

            {/* 3. Content Sources */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              3. Content Sources
            </h2>
            <p>
              News articles, reports, media content, and updates published
              through My Patrakar<sup></sup> may originate from:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Independent journalists</li>
              <li>Reporters and media agencies</li>
              <li>Content publishers</li>
              <li>Official press releases</li>
              <li>User-generated submissions</li>
              <li>Publicly available information sources</li>
            </ul>
            <p>
              Where applicable, articles should include: author name, publisher
              name, source attribution, and publication date. Third-party
              content remains the responsibility of its original publisher or
              contributor.
            </p>

            {/* 4. Content Review & Moderation */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              4. Content Review &amp; Moderation
            </h2>
            <p>We may review published content to ensure compliance with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Applicable laws and regulations</li>
              <li>Platform guidelines</li>
              <li>Community standards</li>
              <li>Content safety requirements</li>
            </ul>
            <p>
              Content that violates policies may be removed, restricted, or
              modified without prior notice. Examples include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>False or misleading information</li>
              <li>Hate speech or abusive content</li>
              <li>Copyright violations</li>
              <li>Illegal or harmful material</li>
              <li>Spam or deceptive practices</li>
            </ul>

            {/* 5. Corrections & Updates */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              5. Corrections &amp; Updates
            </h2>
            <p>
              We encourage timely corrections and updates when factual
              inaccuracies are identified. If incorrect or outdated information
              is reported:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reasonable efforts may be made to review the issue</li>
              <li>Corrections may be applied where appropriate</li>
              <li>Updated content may include revised timestamps</li>
              <li>
                Users may contact us to report content concerns or correction
                requests
              </li>
            </ul>

            {/* 6. Transparency */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              6. Transparency
            </h2>
            <p>
              We believe users should clearly understand the origin and nature
              of published content. To support transparency:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Articles may display author or publisher information</li>
              <li>Publication dates should be visible</li>
              <li>
                Sponsored or promotional content should be identified
                appropriately where applicable
              </li>
            </ul>

            {/* 7. Independence & Responsibility */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              7. Independence &amp; Responsibility
            </h2>
            <p>
              My Patrakar<sup></sup> provides publishing technology and digital
              infrastructure services. Opinions, reports, and published articles
              belong to their respective authors, publishers, or contributors.
            </p>
            <p>
              We do not guarantee the completeness or accuracy of third-party
              submitted content.
            </p>

            {/* 8. Copyright & Intellectual Property */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              8. Copyright &amp; Intellectual Property
            </h2>
            <p>
              Publishers and contributors are responsible for ensuring they have
              the appropriate rights to publish submitted content, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Articles</li>
              <li>Images</li>
              <li>Videos</li>
              <li>Logos</li>
              <li>Media assets</li>
            </ul>
            <p>Unauthorized copyrighted material may be removed upon review.</p>

            {/* 9. User Reporting & Complaints */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              9. User Reporting &amp; Complaints
            </h2>
            <p>Users may report:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Inaccurate information</li>
              <li>Copyright concerns</li>
              <li>Harmful or abusive content</li>
              <li>Policy violations</li>
              <li>Editorial concerns</li>
            </ul>
            <p>
              We review reports and take action where necessary. For editorial
              concerns or corrections, contact us using the details below.
            </p>

            {/* 10. Contact Information */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              10. Contact Information
            </h2>
            <p>
              For editorial inquiries, corrections, complaints, or publishing
              concerns, contact us:
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mt-2 space-y-1.5 text-base">
              <p className="flex items-center gap-2">
                <Globe size={18} className="text-red-500" />
                Website:
                <a
                  href="https://mypatrakar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  https://mypatrakar.com/
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail size={18} className="text-red-500" />
                Email: info@mypatrakar.com
              </p>

              <p className="flex items-center gap-2">
                <Phone size={18} className="text-red-500" />
                Phone: +91 9005622459
              </p>

              <p className="flex items-center gap-2">
                <Headphones size={18} className="text-red-500" />
                Support: +91 8176091467
              </p>
            </div>
            {/* 11. Policy Updates */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8">
              11. Policy Updates
            </h2>
            <p>
              This Editorial Policy may be updated periodically to reflect
              operational, legal, or platform changes. Updated versions will be
              published on this page with the revised effective date.
            </p>
            <p>
              Continued use of My Patrakar<sup></sup> services indicates
              acceptance of the updated policy.
            </p>

            {/* Footer & copyright area matching about page style */}
            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-700">
                © My Patrakar<sup></sup> — All Rights Reserved.
              </p>
              {/* <p className="text-xs text-gray-500 mt-2">
                Updated At: 21 May, 2026 09:39
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialPolicy;
