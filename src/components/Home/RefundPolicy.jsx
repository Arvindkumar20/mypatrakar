import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 pt-32 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Page Header Area */}
        <div className="bg-red-50/50 px-6 py-10 sm:px-10 sm:py-14 border-b border-slate-100 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Refund and Cancellation Policy
          </h1>
          <p className="text-lg text-slate-600 font-medium mb-6">
            Everything you need to know about our payment and refund terms
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
              This Refund and Cancellation Policy applies to all services provided by <strong>My Patrakar</strong> through its website (<a href="https://mypatrakar.com/" className="text-red-600 hover:underline">https://mypatrakar.com/</a>) and mobile applications.
            </p>
          </section>

          {/* 1. Nature of Services */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">1.</span> Nature of Services
            </h2>
            <p className="mb-3">My Patrakar provides digital services, including:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span>Website development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span>Mobile application development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span>News portal setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span>Custom digital solutions</span>
              </div>
            </div>
            <p className="mt-4 font-medium text-slate-800">
              Due to the intangible and customized nature of these services, refunds are not offered.
            </p>
          </section>

          {/* 2. No Refund Policy */}
          <section className="bg-red-50 border border-red-100 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-red-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">2.</span> No Refund Policy
            </h2>
            <p className="mb-4 font-bold text-red-800 uppercase tracking-wide text-sm">
              All payments made to My Patrakar are final and non-refundable.
            </p>
            <p className="mb-4">Once a payment is made:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">✘</span>
                <span>It cannot be reversed</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">✘</span>
                <span>It cannot be transferred to another service</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 font-bold">✘</span>
                <span>It cannot be refunded under any circumstances</span>
              </li>
            </ul>
            <p className="text-sm font-semibold">This policy applies to: Advance payments, Partial payments, and Full payments.</p>
          </section>

          {/* 3. Service Initiation */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">3.</span> Service Initiation
            </h2>
            <p className="mb-3">Work on a project may begin immediately after payment confirmation.</p>
            <p className="mb-3">By making a payment, you acknowledge and agree that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You authorize us to start the service immediately.</li>
              <li>You waive any right to request a refund once the service process has been initiated.</li>
            </ul>
          </section>

          {/* 4. Cancellation Policy */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">4.</span> Cancellation Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders once placed <strong>cannot be cancelled</strong>.</li>
              <li>Cancellation requests will not be accepted after payment has been processed.</li>
              <li>Any request for discontinuation of the project will not result in a refund of any paid amounts.</li>
            </ul>
          </section>

          {/* 5. Exceptions */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">5.</span> Exceptions
            </h2>
            <p className="mb-3">Refunds will not be provided in situations including, but not limited to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm italic">Change of mind after payment</div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm italic">Delay caused by client-side inputs</div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm italic">Lack of understanding of the service</div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm italic">Failure to use the service</div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm italic">Business or financial losses</div>
            </div>
          </section>

          {/* 6. Client Responsibilities */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">6.</span> Client Responsibilities
            </h2>
            <p className="mb-3">Clients are strongly advised to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Review all service details and features carefully before making payment.</li>
              <li>Clarify all doubts and technical requirements prior to purchase.</li>
              <li>Ensure that the selected package meets their business requirements.</li>
            </ul>
          </section>

          {/* 7. Dispute Resolution */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">7.</span> Dispute Resolution
            </h2>
            <p className="mb-3">In case of any dispute:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We encourage users to contact us first for a mutual resolution.</li>
              <li>We will make reasonable efforts to address concerns and fix technical issues.</li>
              <li>However, this does not guarantee any refund or reversal of payment.</li>
            </ul>
          </section>

          {/* 8. Payment Gateway Compliance */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">8.</span> Payment Gateway Compliance
            </h2>
            <p>This policy is designed to comply with standard digital service practices and payment gateway regulations. By proceeding with payment, you agree to this Refund Policy in its entirety.</p>
          </section>

          {/* 9. Modifications to Policy */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="text-red-600 mr-2">9.</span> Modifications to Policy
            </h2>
            <p>We reserve the right to update or modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. It is the client's responsibility to check this page periodically for updates.</p>
          </section>

          {/* 10. Contact Information */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="text-red-600 mr-2">10.</span> Contact Us
                </h2>
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
                    <strong className="text-slate-900 min-w-[80px]">Phone:</strong>
                    <span className="text-slate-700">9005622459 | 8176091467</span>
                  </p>
                </div>
              </section>

              <section className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-center">
                <p className="text-sm font-medium text-slate-500 text-center italic leading-relaxed">
                  Work with confidence. My Patrakar is committed to delivering high-quality digital solutions for your business needs.
                </p>
              </section>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}