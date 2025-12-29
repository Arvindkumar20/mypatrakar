import { useState } from "react";


import {
  Settings,
  Palette,
  ArrowRight,
  Phone,
  MessageCircle,
  Facebook,
  Twitter,

  Youtube,
  Upload,
  Type,

  SendHorizontal,
  ShieldCheck,
  Newspaper,
  Instagram,
} from "lucide-react";
import { PiLinkSimpleBold } from "react-icons/pi";
import { Header } from "../NewsPortal/createApporWeb/webPreview/Header";
import { Footer } from "../NewsPortal/createApporWeb/webPreview/Footer";
import LanguageSelector from "../NavigationBar/LanguageSelector";
import { useNavigate } from "react-router-dom";
// utils/getContrastColor.js
const socialInputs = [
  {
    id: "fb_link",
    icon: Facebook,
    placeholder: "Facebook URL",
    color: "text-[#1877F2]", // Facebook Blue
  },
  {
    id: "twitter_link",
    icon: Twitter,
    placeholder: "Twitter URL",
    color: "text-[#1DA1F2]", // Twitter Blue
  },
  {
    id: "youtube_link",
    icon: Youtube,
    placeholder: "YouTube Channel",
    color: "text-[#FF0000]", // YouTube Red
  },
  {
    id: "telegram_link",
    icon: SendHorizontal,
    placeholder: "Telegram Handle",
    color: "text-[#229ED9]", // Telegram Blue
  },
    {
    id: "insta_link",
    icon: Instagram,
    placeholder: "Instagram Handle",
    color: "text-[#E4405F] hover:text-[#D6294E]", // Telegram Blue
  },
];
const WebDemoLanding = () => {
  // Brand Colors provided by user
  const BRAND_RED = "#FE0101";
  const BRAND_NAVY = "#16274F";

  // State for customization
  const [brandName, setBrandName] = useState("Dainik News");
  const [logo, setLogo] = useState(null);
  const [fontFamily, setFontFamily] = useState("Classic News");
  const [headerColor, setHeaderColor] = useState("#e81303");
  const [footerColor, setFooterColor] = useState(BRAND_NAVY);
  const [socialLinks, setSocialLinks] = useState({
    fb_link: "dheuywgreyg",
    twitter_link: "",
    insta_link: "",
    youtube_link: "",
    telegram__link: "",
  });
  // Form states
  const [supportPhone, setSupportPhone] = useState("+91 98765 43210");
  const [whatsapp, setWhatsapp] = useState("+91 98765 43210");

  const typographyPersonalities = [
    { name: "Classic News", family: "'Georgia', serif" },
    { name: "Modern Digital", family: "'Inter', sans-serif" },
    { name: "Editorial", family: "'Playfair Display', serif" },
    { name: "Minimalist", family: "'Helvetica Neue', sans-serif" },
    { name: "Tech Journal", family: "'Roboto Mono', monospace" },
    { name: "Royal", family: "'Baskerville', serif" },
    { name: "Corporate", family: "'Montserrat', sans-serif" },
    { name: "Compact", family: "'Roboto Condensed', sans-serif" },
    { name: "Traditional", family: "'Times New Roman', serif" },
    { name: "Artistic", family: "'Cormorant Garamond', serif" },
  ];

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const selectedFont =
    typographyPersonalities.find((f) => f.name === fontFamily)?.family ||
    "serif";

  function getContrastColor(hexColor) {
    if (!hexColor) return "#000000";

    const hex = hexColor.replace("#", "");

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Relative luminance formula (WCAG)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Dark bg → white text | Light bg → black text
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans my-5">
      {/* FULL SIZE PAGE HEADER */}
      <header className="relative w-full bg-white border-b border-slate-200 overflow-hidden shadow-sm">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-navy-900"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 rounded-2xl border border-red-100 mb-2">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                <Newspaper size={18} className="text-white" />
              </div>
              <span className="text-xs font-black text-red-600 uppercase tracking-[0.2em]">
                MyPatrakaar Brand Studio v2.0
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Architect Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Digital Newsroom
              </span>
            </h1>

            <p className="text-slate-500 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Define the visual soul of your brand. Customize logos, typography,
              and color schemes for a world-class journalistic presence.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Live Preview Active
                </span>
              </div>
              <div className="w-[1px] h-4 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-slate-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Enterprise Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </header>

      <div className="max-w-5xl mx-auto space-y-16 p-6 md:p-12">
        {/* SECTION: PREVIEWS */}
        {/* <div className="space-y-10"> */}
        {/* Header Preview */}
        <div className="space-y-4">
          <div className="bg-white border p-5 rounded-lg shadow-xl">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Live Header Preview
              </h2>
              {/* <div className="h-[1px] flex-1 bg-slate-200 mx-4"></div> */}
            </div>
            <Header
              bgColor={headerColor}
              color={getContrastColor(headerColor)}
              logo={logo}
              footerColor={footerColor}
              fontTop={selectedFont}
            />
          </div>
          <Footer
            socialLinks={socialLinks}
            footerColor={footerColor}
            footerText={getContrastColor(footerColor)}
            fontBottom={selectedFont}
            logo={logo}
          />
        </div>
        {/* SECTION: CONFIGURATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Identity & Typography */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="px-2 text-xs font-black uppercase tracking-[0.2em] text-slate-800 flex items-center gap-2">
                <Settings size={14} className="text-red-600" /> Branding
                Essentials
              </h3>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/20 space-y-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                    Website Name
                  </label>
                  <input
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-base font-bold outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all placeholder:text-slate-300 shadow-sm"
                    placeholder="e.g. Dainik News"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                    Primary Language
                  </label>

                  <LanguageSelector className=" flex items-center w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-base font-bold outline-none appearance-none focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all shadow-sm" />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                    Website Logo
                  </label>
                  <div className="relative h-28 w-full border-2 border-dashed border-slate-200 rounded-[1.5rem] flex flex-col items-center justify-center bg-slate-50/50 hover:bg-white hover:border-red-300 transition-all cursor-pointer group overflow-hidden">
                    <input
                      type="file"
                      onChange={handleLogoUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    {logo ? (
                      <div className="relative group">
                        <img
                          src={logo}
                          className="h-14 object-contain transition-transform group-hover:scale-105"
                        />
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white p-1 rounded-full shadow-lg">
                          <Settings size={10} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3">
                        <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:bg-red-50 transition-colors">
                          <Upload
                            size={20}
                            className="text-slate-400 group-hover:text-red-500"
                          />
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Upload SVG or PNG
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="px-2 text-xs font-black uppercase tracking-[0.2em] text-slate-800 flex items-center gap-2">
                <Type size={14} className="text-red-600" /> Typography Style
              </h3>
              <div className="bg-white p-4  rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/20 grid grid-cols-1 gap-2 max-h-[417px] overflow-y-auto custom-scrollbar">
                {typographyPersonalities.map((font) => (
                  <button
                    key={font.name}
                    onClick={() => setFontFamily(font.name)}
                    className={`flex items-center justify-between p-5 rounded-2xl text-left transition-all ${
                      fontFamily === font.name
                        ? "bg-red-50 text-red-600 ring-1 ring-red-100 shadow-sm shadow-red-100"
                        : "hover:bg-slate-50 text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <span
                      className="text-base font-bold"
                      style={{ fontFamily: font.family }}
                    >
                      {font.name}
                    </span>
                    {fontFamily === font.name && (
                      <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            {/* Theme  */}

            <div className="space-y-6">
              <h3 className="px-2 text-xs font-black uppercase tracking-[0.2em] text-slate-800 flex items-center gap-2">
                <Palette size={14} className="text-red-600" /> Colors &
                Communication
              </h3>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/20 space-y-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                      Header Color
                    </label>
                    <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-4 rounded-2xl hover:bg-white transition-colors shadow-sm">
                      <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-inner ring-1 ring-black/5">
                        <input
                          type="color"
                          value={headerColor}
                          onChange={(e) => setHeaderColor(e.target.value)}
                          className="absolute -inset-2 w-16 h-16 cursor-pointer border-none bg-transparent"
                        />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {headerColor.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                      Footer Color
                    </label>
                    <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-4 rounded-2xl hover:bg-white transition-colors shadow-sm">
                      <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-inner ring-1 ring-black/5">
                        <input
                          type="color"
                          value={footerColor}
                          onChange={(e) => setFooterColor(e.target.value)}
                          className="absolute -inset-2 w-16 h-16 cursor-pointer border-none bg-transparent"
                        />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {footerColor.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-10">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                        Support Helpline
                      </label>
                      <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-5 rounded-2xl focus-within:ring-4 focus-within:ring-red-500/10 focus-within:border-red-500 transition-all shadow-sm">
                        <Phone size={20} className="text-slate-400" />
                        <input
                          type="text"
                          value={supportPhone}
                          onChange={(e) => setSupportPhone(e.target.value)}
                          className="bg-transparent text-base font-bold outline-none w-full"
                          placeholder="+91 ..."
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                        WhatsApp Business
                      </label>
                      <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-5 rounded-2xl focus-within:ring-4 focus-within:ring-red-500/10 focus-within:border-red-500 transition-all shadow-sm">
                        <MessageCircle size={20} className="text-slate-400" />
                        <input
                          type="text"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="bg-transparent text-base font-bold outline-none w-full"
                          placeholder="+91 ..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Social */}
            <div className="space-y-6">
              <h3 className="px-2 text-xs font-black uppercase tracking-[0.2em] text-slate-800 flex items-center gap-2">
                <PiLinkSimpleBold className="text-red-500 " size={16} /> Social
                Networks
              </h3>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/20 space-y-10">
              <div className="grid grid-cols-1 gap-4">
  {socialInputs.map((social) => (
    <div
      key={social.id}
      className="flex items-center gap-6 bg-slate-50 border border-slate-200 p-4 rounded-2xl focus-within:ring-4 focus-within:ring-red-500/10 focus-within:border-red-500 transition-all shadow-sm group"
    >
      <social.icon
        size={20}
        className={`${social.color} transition-transform group-focus-within:scale-110`}
      />

      <input
        type="text"
        name={social.id}
        placeholder={social.placeholder}
        onChange={(e) =>
          setSocialLinks({
            ...socialLinks,
            [e.target.name]: e.target.value,
          })
        }
        className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 outline-none placeholder:text-slate-300 w-full"
      />
    </div>
  ))}
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="
  bg-[#16274F]
  rounded-3xl sm:rounded-[2.5rem]
  max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl
  mx-4 sm:mx-auto
  p-5 sm:p-6 md:p-8
  text-center
  relative
  overflow-hidden
  group
  shadow-2xl
  shadow-navy-900/20
"
      >
        {/* Decorative Circle */}
        <div
          className="
    absolute
    top-0 right-0
    w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80
    bg-red-600
    rounded-full
    -mr-28 -mt-28 sm:-mr-36 sm:-mt-36 md:-mr-40 md:-mt-40
    opacity-10
    group-hover:scale-110
    transition-transform
    duration-1000
  "
        ></div>

        <div className="relative z-10 space-y-6 sm:space-y-8">
          {/* Heading */}
          <div className="space-y-2">
            <h3
              className="
        text-white
        text-lg sm:text-xl md:text-2xl
        font-black
        tracking-tight
      "
            >
              Setup Complete?
            </h3>

            <p
              className="
        text-slate-400
        text-xs sm:text-sm
        font-medium
      "
            >
              Verify your branding and colors before launching.
            </p>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center">
            <button
              className="
        bg-[#FE0101]
        text-white
        w-full sm:w-3/4 md:w-2/3
        py-4 sm:py-5
        rounded-2xl sm:rounded-3xl
        font-black
        text-xs sm:text-sm
        tracking-[0.25em] sm:tracking-[0.3em]
        hover:shadow-[0_20px_40px_rgba(254,1,1,0.3)]
        hover:-translate-y-1
        transition-all
        flex
        items-center
        justify-center
        gap-3 sm:gap-4
        active:scale-95
        shadow-lg
        shadow-red-900/20
      "
      onClick={()=>window.open("https://www.kutumbjagran.com")}
            >
              LAUNCH WEBSITE
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
      `}</style>
    </div>
  );
};

export default WebDemoLanding;
