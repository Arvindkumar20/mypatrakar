import React from "react";

export default function GetInTouchCard({ t, getInTouch }) {
  return (
    <div className=" rounded-2xl ">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent mb-4">
        {t("footer.top.mainHeading")}
      </h2>

      <p className="text-gray-300   mb-3">
        {t("footer.top.mainHeadingDesc")}
      </p>

      <h3 className="text-2xl font-bold text-red-500 mb-2">
        {t("footer.top.getInTouch")}
      </h3>

      <div className="space-y-1 ">
        {getInTouch?.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 p-1  transition-all"
          >
            <div className="bg-gray-900 p-1 rounded-full">
              {item.icon}
            </div>

            <p className="text-gray-200 font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
