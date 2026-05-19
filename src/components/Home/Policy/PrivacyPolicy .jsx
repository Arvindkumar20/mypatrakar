import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 pt-32 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Page Header Area */}
        <div className="bg-red-50/50 px-6 py-10 sm:px-10 sm:py-14 border-b border-slate-100 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 font-medium mb-6">
            Learn how we handle your data
          </p>
          <div className="inline-block bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-500 font-medium">
            Effective Date: <span className="text-slate-900 font-semibold">26/01/26</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-6 py-10 sm:px-10 sm:py-12 space-y-10 text-slate-600 leading-relaxed">
          
          {/* Introduction */}
          <section className="prose prose-slate max-w-none">
            <p className="text-base sm:text-lg">
              Welcome to <strong>My Patrakar</strong> (accessible at My Patrakar). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and mobile application.
            </p>
          </section>

          {/* 1. About Us */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">1.</span> About Us
            </h2>
            <p className="mb-3">
              My Patrakar is a digital platform that helps users create and manage:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>News portals</li>
              <li>Mobile applications</li>
              <li>Websites</li>
            </ul>
            <p>
              We provide ready-to-launch solutions (including rapid setup within 48 hours) for individuals, journalists, and businesses.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">2.</span> Information We Collect
            </h2>
            <p className="mb-4">We may collect the following types of information:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">a. Personal Information</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business details</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">b. Usage Data</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>App interactions</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Log data</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">c. Uploaded Content</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>News content</li>
                  <li>Images/videos</li>
                  <li>Website/app-related data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Permissions We Use */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">3.</span> Permissions We Use
            </h2>
            <p className="mb-4">Our app may request the following permissions:</p>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <ul className="divide-y divide-slate-100">
                <li className="px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">Microphone <span className="text-xs font-mono text-slate-400 ml-1 bg-slate-100 px-2 py-0.5 rounded">(RECORD_AUDIO)</span></span>
                  <span className="text-sm text-slate-500 mt-1 sm:mt-0">Voice search, Voice input</span>
                </li>
                <li className="px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">Internet Access <span className="text-xs font-mono text-slate-400 ml-1 bg-slate-100 px-2 py-0.5 rounded">(INTERNET)</span></span>
                  <span className="text-sm text-slate-500 mt-1 sm:mt-0">Fetching data, Loading content</span>
                </li>
                <li className="px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">Bluetooth</span>
                  <span className="text-sm text-slate-500 mt-1 sm:mt-0">Device connectivity</span>
                </li>
                <li className="px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">Phone Call <span className="text-xs font-mono text-slate-400 ml-1 bg-slate-100 px-2 py-0.5 rounded">(CALL_PHONE)</span></span>
                  <span className="text-sm text-slate-500 mt-1 sm:mt-0">Direct calling features</span>
                </li>
                <li className="px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">Notifications <span className="text-xs font-mono text-slate-400 ml-1 bg-slate-100 px-2 py-0.5 rounded">(POST_NOTIFICATIONS)</span></span>
                  <span className="text-sm text-slate-500 mt-1 sm:mt-0">Updates, Alerts</span>
                </li>
              </ul>
            </div>
            <p className="mt-3 text-sm italic text-slate-500">We only use these permissions when necessary for app functionality.</p>
          </section>

          {/* 4. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">4.</span> How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Create and manage user websites/apps</li>
              <li>Enable communication</li>
              <li>Send updates and notifications</li>
              <li>Ensure security and prevent misuse</li>
            </ul>
          </section>

          {/* 5. Data Sharing */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">5.</span> Data Sharing
            </h2>
            <p className="mb-3">
              We do <strong className="text-slate-900 uppercase">not</strong> sell your personal data. We may share data only:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With trusted service providers (hosting, analytics, etc.)</li>
              <li>When required by law</li>
              <li>To protect our legal rights</li>
            </ul>
          </section>

          {/* 6. Data Security */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">6.</span> Data Security
            </h2>
            <p className="mb-3">We implement:</p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>Firewall protection</li>
              <li>Secure servers</li>
              <li>Encryption practices (where applicable)</li>
            </ul>
            <p className="text-sm bg-amber-50 text-amber-800 p-4 rounded-lg border border-amber-100">
              However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* 7. Third-Party Services */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">7.</span> Third-Party Services
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>Analytics services</li>
              <li>Hosting providers</li>
              <li>API integrations</li>
            </ul>
            <p>These services may collect data according to their own privacy policies.</p>
          </section>

          {/* 8. User Rights */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">8.</span> User Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Access your data</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Request correction</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Request deletion</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">Withdraw consent</span>
            </div>
            <p>
              To do so, contact us at: <a href="mailto:info@mypatrakar.com" className="text-red-600 hover:text-red-800 font-medium">info@mypatrakar.com</a>
            </p>
          </section>

          {/* 9. Children’s Privacy */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">9.</span> Children’s Privacy
            </h2>
            <p>
              Our services are not intended for users under the age of 13. We do not knowingly collect data from children.
            </p>
          </section>

          {/* 10. Changes to This Policy */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">10.</span> Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page.
            </p>
          </section>

          {/* 11. Contact Us & 12. Consent Combined in Footer-like Section */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="text-red-600 mr-2">11.</span> Contact Us
                </h2>
                <p className="mb-4">If you have any questions, contact us:</p>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Website:</strong>
                    <a href="https://mypatrakar.com/" className="text-red-600 hover:underline break-all">https://mypatrakar.com/</a>
                  </p>
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Email:</strong>
                    <a href="mailto:info@mypatrakar.com" className="text-red-600 hover:underline">info@mypatrakar.com</a>
                  </p>
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Email:</strong>
                    <a href="mailto:info@mypatrakar.com" className="text-blue-600 hover:underline">info@mypatrakar.com</a>
                  </p>
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Phone:</strong>
                    <span className="text-slate-700">9005622459 | 8176091467</span>
                  </p>
                </div>
              </section>

              <section className="bg-slate-50 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <span className="text-red-600 mr-2">12.</span> Consent
                </h2>
                <p className="text-sm">
                  By using our app or website, you agree to this Privacy Policy. Ensure you read and understand these terms before using our services.
                </p>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}