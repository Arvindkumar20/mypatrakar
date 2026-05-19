export default function DeleteEAccount() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 pt-32 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Page Header Area */}
        <div className="bg-red-50/50 px-6 py-10 sm:px-10 sm:py-14 border-b border-slate-100 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                Account Deletion Request
              </h1>
              <p className="text-lg text-slate-600 font-medium">
                MyPatrakar App Account & Data Management
              </p>
            </div>
            <div className="flex justify-center sm:justify-end">
              <div className="bg-red-600 text-white p-3 rounded-2xl shadow-lg shadow-red-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-6 py-10 sm:px-10 sm:py-12 space-y-10 text-slate-600 leading-relaxed">
          {/* Main Instruction */}
          <section className="prose prose-slate max-w-none">
            <p className="text-base sm:text-lg">
              If you would like to delete your account and associated data from
              the <strong>MyPatrakar</strong> app, please follow the structured
              steps below. We value your privacy and will process your request
              with priority.
            </p>
          </section>

          {/* How to Request */}
          <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-900 px-6 py-4">
              <h2 className="text-lg font-bold text-white flex items-center">
                <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">
                  1
                </span>
                Steps to Request Deletion
              </h2>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-red-50 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">
                    Send an email to
                  </p>
                  <a
                    href="mailto:mypatrakarappdevelopmentteam@gmail.com"
                    className="text-lg sm:text-xl font-bold text-red-600 hover:underline break-all"
                  >
                    mypatrakarappdevelopmentteam@gmail.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">
                    Subject Line
                  </p>
                  <p className="text-slate-900 font-medium italic text-lg">
                    Delete My Account
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">
                    Required Info
                  </p>
                  <p className="text-slate-900 font-medium text-lg">
                    Your registered email ID
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-slate-500 bg-blue-50 p-3 rounded-lg border border-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Our team will process your request within{" "}
                  <strong>3–5 working days</strong>.
                </span>
              </div>
            </div>
          </section>

          {/* Data Deletion Details */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-red-600 mr-2">2.</span> Data Deletion
              Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-red-100"></div>
                <h3 className="font-bold text-slate-900 mb-3 relative">
                  Account Info
                </h3>
                <p className="text-sm relative">
                  Your registered name and email address will be permanently
                  purged from our database.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-red-100"></div>
                <h3 className="font-bold text-slate-900 mb-3 relative">
                  Activity Data
                </h3>
                <p className="text-sm relative">
                  Your personal interactions, including comments and likes, will
                  be removed.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-amber-100"></div>
                <h3 className="font-bold text-slate-900 mb-3 relative text-amber-700">
                  Legal Retention
                </h3>
                <p className="text-sm relative">
                  Some data may be retained for a limited period if required for
                  legal, audit, or security purposes.
                </p>
              </div>
            </div>
          </section>

          {/* Contact and Agreement */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <span className="text-red-600 mr-2">3.</span> Need Assistance?
                </h2>
                <p className="mb-4 text-sm">
                  If you have any questions about the deletion process or need
                  to rescind your request, please contact us at the same email
                  address:
                </p>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px] text-sm">
                      Email:
                    </strong>
                    <a
                      href="mailto:mypatrakarappdevelopmentteam@gmail.com"
                      className="text-red-600 hover:underline break-all text-sm font-medium"
                    >
                      mypatrakarappdevelopmentteam@gmail.com
                    </a>
                  </p>
                  <p className="flex items-start">
                    <strong className="text-slate-900 min-w-[80px] text-sm">
                      Website:
                    </strong>
                    <a
                      href="https://mypatrakar.com/"
                      className="text-slate-600 hover:text-red-600 text-sm"
                    >
                      https://mypatrakar.com/
                    </a>
                  </p>
                </div>
              </section>

              <section className="bg-red-50 p-6 rounded-2xl border border-red-100 flex items-center justify-center text-center">
                <p className="text-sm text-red-900 font-medium italic">
                  Once deleted, your account cannot be recovered. You will need
                  to create a new account to use the personalized features of
                  MyPatrakar again.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
