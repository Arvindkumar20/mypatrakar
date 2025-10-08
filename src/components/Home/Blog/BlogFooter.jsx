import React from "react";

export default function BlogFooter() {
  const style = {
    fontFamily: "Times New Roman",
  };
  return (
    <div>
      <footer
        className="text-sm text-center font-semibold text-gray-600 mt-20 mb-1"
        style={style}
      >
        Proudly Powered by{" "}
        <span>
          {" "}
          <a
            href="https://www.hindtechitsolutions.com/"
            target="blanck"
            className="border-b-2 border-gray-500 hover:border-none font-sans text-sm"
          >
            Hindtech It Solutions
          </a>
        </span>
      </footer>
    </div>
  );
}
