import React from "react";

export default function UseFullLinks() {
  const links = [
    {
      href: "https://www.hindtechitsolutions.com/terms-and-conditions",
      icon: <BiFileBlank className="text-xl" />,
      text: "Terms & Conditions",
    },
    {
      href: "https://www.hindtechitsolutions.com/privacy-policy",
      icon: <BiShield className="text-xl" />,
      text: "Privacy Policy",
    },
    {
      href: "https://www.hindtechitsolutions.com/shipping-and-delivery",
      icon: <BiTruck className="text-xl" />,
      text: "Shipping & Delivery",
    },
    {
      href: "https://www.hindtechitsolutions.com/cancellation-and-refund-policy",
      icon: <BiUndo className="text-xl" />,
      text: "Refund Policy",
    },
    {
      href: "https://www.hindtechitsolutions.com/contact-us",
      icon: <BiEnvelope className="text-xl" />,
      text: "Contact Us",
    },
  ];

  return (
    <div className="w-full lg:w-1/5 md:w-1/3 px-4 text-white">
      <h4 className="text-lg font-bold mb-4">Useful Links</h4>
      <div className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            {link.icon}
            <span className="text-sm">{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
