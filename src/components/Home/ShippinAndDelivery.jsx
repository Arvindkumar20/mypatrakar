import React from 'react';

export default function ShippinAndDelivery() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 pt-32 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Page Header Area */}
        <div className="bg-red-50/50 px-6 py-10 sm:px-10 sm:py-14 border-b border-slate-100 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Shipping and Delivery Policy
          </h1>
          <p className="text-lg text-slate-600 font-medium mb-6">
            Understanding how our digital services are delivered to you
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
              This Shipping and Delivery Policy outlines how services are delivered by <strong>My Patrakar</strong> through its website (<a href="https://mypatrakar.com/" className="text-red-600 hover:underline">https://mypatrakar.com/</a>) and associated mobile applications.
            </p>
          </section>

          {/* 1. Nature of Services */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">1.</span> Nature of Services
            </h2>
            <p className="mb-3 text-slate-700 font-medium">My Patrakar provides digital services, including:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                News portal development
              </li>
              <li className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Website creation
              </li>
              <li className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Mobile application development
              </li>
              <li className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Custom setup and deployment
              </li>
            </ul>
            <p className="mt-4 p-3 bg-red-50 text-red-800 text-sm rounded-lg border border-red-100">
              <strong>Note:</strong> As our offerings are digital in nature, no physical products are shipped.
            </p>
          </section>

          {/* 2. Delivery Method */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">2.</span> Delivery Method
            </h2>
            <p className="mb-4">All services are delivered electronically through:</p>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <ul className="divide-y divide-slate-100">
                <li className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">Primary Channel</span>
                  <span className="text-sm text-slate-600">Email communication</span>
                </li>
                <li className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">Access Point</span>
                  <span className="text-sm text-slate-600">Admin panel access</span>
                </li>
                <li className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">Security</span>
                  <span className="text-sm text-slate-600">Secure login credentials</span>
                </li>
                <li className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900">Resources</span>
                  <span className="text-sm text-slate-600">Download links (if applicable)</span>
                </li>
              </ul>
            </div>
            <p className="mt-3 text-sm italic">Clients will receive access to their product or service via the contact details provided at the time of purchase.</p>
          </section>

          {/* 3. Delivery Timeline */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">3.</span> Delivery Timeline
            </h2>
            <p className="mb-4">We aim to deliver services within the agreed timeframe:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="border border-slate-200 p-5 rounded-xl">
                <h3 className="font-bold text-slate-900 mb-1">Standard Delivery</h3>
                <p className="text-sm">As per package or agreement</p>
              </div>
              <div className="border-2 border-red-100 bg-red-50/30 p-5 rounded-xl">
                <h3 className="font-bold text-red-700 mb-1">Express Delivery</h3>
                <p className="text-sm">Within 48 hours (for eligible packages)</p>
              </div>
            </div>
            <p className="mb-2 font-semibold text-slate-900">Delivery timelines may vary depending on:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Project complexity</li>
              <li>Specific client requirements</li>
              <li>Availability of required information/content from the client</li>
            </ul>
            <p className="mt-3 text-sm text-red-600 font-medium">Delays may occur if necessary inputs are not provided on time.</p>
          </section>

          {/* 4. Client Responsibilities */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">4.</span> Client Responsibilities for Delivery
            </h2>
            <p className="mb-3">To ensure timely delivery, clients must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide complete and accurate project requirements</li>
              <li>Submit all necessary content (text, images, branding assets, etc.)</li>
              <li>Respond promptly to communication and feedback requests</li>
            </ul>
            <p className="mt-4 bg-amber-50 p-4 rounded-lg text-amber-900 text-sm border border-amber-100">
              Failure to provide required inputs within the requested time frame may result in project delivery delays.
            </p>
          </section>

          {/* 5. Delivery Confirmation */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">5.</span> Delivery Confirmation
            </h2>
            <p className="mb-3">A project is considered officially delivered when:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access credentials (usernames/passwords) are shared</li>
              <li>Website or application is deployed on the server</li>
              <li>Admin panel or source files (if part of the package) are handed over</li>
            </ul>
            <p className="mt-4">Clients are responsible for reviewing the delivered product and reporting any technical issues within a reasonable time from delivery.</p>
          </section>

          {/* 6. Revisions and Support */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">6.</span> Revisions and Support
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Revisions are provided as per the selected service package.</li>
              <li>Additional changes beyond the initial scope may incur extra charges.</li>
              <li>Post-delivery support is limited to the agreed duration as per the service contract.</li>
            </ul>
          </section>

          {/* 7. Service Availability */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">7.</span> Service Availability
            </h2>
            <p className="mb-3">Delivery may be affected by external factors including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Technical issues or maintenance</li>
              <li>Server downtime from hosting providers</li>
              <li>Third-party service/API interruptions</li>
            </ul>
            <p className="mt-3">We strive to minimize such disruptions but do not guarantee 100% uninterrupted availability.</p>
          </section>

          {/* 8. No Physical Shipping */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">8.</span> No Physical Shipping
            </h2>
            <div className="flex flex-col sm:flex-row sm:gap-10">
              <p className="mb-2 sm:mb-0">Since My Patrakar is a digital service platform:</p>
              <ul className="space-y-1">
                <li className="flex items-center text-sm font-bold text-slate-900">
                  <span className="text-red-600 mr-2">✘</span> No courier or physical shipment is involved
                </li>
                <li className="flex items-center text-sm font-bold text-slate-900">
                  <span className="text-red-600 mr-2">✘</span> No shipping charges apply
                </li>
              </ul>
            </div>
          </section>

          {/* 9. Contact & 10. Policy Updates */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="text-red-600 mr-2">9.</span> Contact for Delivery Issues
                </h2>
                <p className="mb-4 text-sm">If you face any delay or issue in delivery, contact us immediately:</p>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Website:</strong>
                    <a href="https://mypatrakar.com/" className="text-red-600 hover:underline break-all text-sm">https://mypatrakar.com/</a>
                  </p>
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Email:</strong>
                    <a href="mailto:info@mypatrakar.com" className="text-red-600 hover:underline text-sm">info@mypatrakar.com</a>
                  </p>
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px]">Phone:</strong>
                    <span className="text-slate-700 text-sm">9005622459 | 8176091467</span>
                  </p>
                </div>
              </section>

              <section className="bg-slate-900 p-6 rounded-xl text-slate-300">
                <h2 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="text-red-500 mr-2">10.</span> Policy Updates
                </h2>
                <p className="text-sm">
                  We reserve the right to update this Shipping and Delivery Policy at any time to reflect changes in our processes. Updates will be posted on this page with an updated effective date.
                </p>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}