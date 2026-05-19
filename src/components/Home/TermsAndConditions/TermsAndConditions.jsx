import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 pt-32 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Page Header Area */}
        <div className="bg-red-50/50 px-6 py-10 sm:px-10 sm:py-14 border-b border-slate-100 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Terms and Conditions
          </h1>
          <p className="text-lg text-slate-600 font-medium mb-6">
            Review the rules and guidelines for using My Patrakar
          </p>
          <div className="inline-block bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-500 font-medium">
            Effective Date: <span className="text-slate-900 font-semibold">26/01/26</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-6 py-10 sm:px-10 sm:py-12 space-y-10 text-slate-600 leading-relaxed">
          
          {/* Welcome Intro */}
          <section className="prose prose-slate max-w-none">
            <p className="text-base sm:text-lg">
              Welcome to <strong>My Patrakar</strong>. These Terms and Conditions govern your use of our website (<a href="https://mypatrakar.com/" className="text-red-600 hover:underline">https://mypatrakar.com/</a>) and mobile application. By accessing or using our services, you agree to be bound by these terms.
            </p>
          </section>

          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">1.</span> Introduction
            </h2>
            <p className="mb-3">
              My Patrakar is a digital service platform that enables users to create and manage:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>News portals</li>
              <li>Websites</li>
              <li>Mobile applications</li>
            </ul>
            <p className="mt-3">
              We provide development, setup, and deployment services, including rapid delivery solutions.
            </p>
          </section>

          {/* 2. Acceptance of Terms */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">2.</span> Acceptance of Terms
            </h2>
            <p className="mb-4">By using our services, you confirm that:</p>
            <div className="bg-slate-50 border-l-4 border-red-500 p-5 rounded-r-xl">
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>You are at least 18 years old, or using the service under supervision.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>You agree to comply with all applicable laws and regulations.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 font-bold">•</span>
                  <span>You accept these Terms and Conditions in full.</span>
                </li>
              </ul>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500 italic">
              If you do not agree, you must not use our services.
            </p>
          </section>

          {/* 3. Services Provided */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">3.</span> Services Provided
            </h2>
            <p className="mb-3">My Patrakar offers:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Custom website and mobile app development</li>
              <li>News portal setup and management tools</li>
              <li>Hosting and deployment assistance</li>
              <li>Technical support (as per selected package)</li>
            </ul>
            <p className="bg-slate-50 p-4 rounded-lg text-sm">
              We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          {/* 4. User Responsibilities */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">4.</span> User Responsibilities
            </h2>
            <p className="mb-3">You agree that you will:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Use the platform only for lawful purposes</li>
              <li>Not upload or distribute harmful, illegal, or misleading content</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
            <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-amber-900 font-medium text-sm">
              Note: You are solely responsible for the content you publish through your app or website.
            </div>
          </section>

          {/* 5. Content Ownership */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">5.</span> Content Ownership
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users retain ownership of the content they create and upload.</li>
              <li>By using our platform, you grant us a limited license to host, display, and process your content for service functionality.</li>
              <li>We do not claim ownership of your content.</li>
              <li>However, we reserve the right to remove content that violates laws or these terms.</li>
            </ul>
          </section>

          {/* 6. Payments and Refund Policy */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">6.</span> Payments and Refund Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All payments must be made as per agreed pricing.</li>
              <li>Services may begin only after payment confirmation.</li>
              <li>Payments once made are <strong>generally non-refundable</strong> unless explicitly agreed in writing.</li>
              <li>Any pending dues must be cleared before final delivery or transfer of services.</li>
            </ul>
          </section>

          {/* 7. Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">7.</span> Intellectual Property
            </h2>
            <p className="mb-3">All platform elements including Software, Design, Branding, and Content provided by My Patrakar are the intellectual property of My Patrakar and may not be copied, modified, or distributed without permission.</p>
          </section>

          {/* 8. Third-Party Services */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">8.</span> Third-Party Services
            </h2>
            <p className="mb-3">Our platform may integrate third-party services such as Hosting providers, APIs, and Analytics tools. We are not responsible for the policies or performance of these third-party services.</p>
          </section>

          {/* 9. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">9.</span> Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>To the maximum extent permitted by law, My Patrakar shall not be liable for any indirect, incidental, or consequential damages.</li>
              <li>We do not guarantee uninterrupted or error-free service.</li>
              <li>Users use the platform at their own risk.</li>
            </ul>
          </section>

          {/* 10. Termination */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">10.</span> Termination
            </h2>
            <p>We reserve the right to suspend or terminate your account, remove your content, or restrict access if you violate these Terms and Conditions or applicable laws.</p>
          </section>

          {/* 11. Privacy */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">11.</span> Privacy
            </h2>
            <p>Your use of our services is also governed by our <strong>Privacy Policy</strong>. You are advised to review it carefully.</p>
          </section>

          {/* 12. Modifications */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">12.</span> Modifications to Terms
            </h2>
            <p>We may update these Terms and Conditions at any time. Continued use of the platform after changes means you accept the updated terms.</p>
          </section>

          {/* 13. Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">13.</span> Governing Law
            </h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of <strong>India</strong>. Any disputes shall be subject to the jurisdiction of courts located in <strong>Lucknow, Uttar Pradesh</strong>.</p>
          </section>

          {/* 14. Contact Information */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="text-red-600 mr-2">14.</span> Contact Us
                </h2>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Website:</strong>
                    <a href="https://mypatrakar.com/" className="text-red-600 hover:underline">https://mypatrakar.com/</a>
                  </p>
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Email:</strong>
                    <a href="mailto:info@mypatrakar.com" className="text-red-600 hover:underline">info@mypatrakar.com</a>
                  </p>
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Phone:</strong>
                    <span className="text-slate-700">9005622459 | 8176091467</span>
                  </p>
                </div>
              </section>

              {/* 15. Entire Agreement */}
              <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <span className="text-red-600 mr-2">15.</span> Entire Agreement
                </h2>
                <p className="text-sm leading-relaxed">
                  These Terms and Conditions constitute the entire agreement between you and My Patrakar regarding the use of our services and supersede any prior agreements.
                </p>
              </section>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}