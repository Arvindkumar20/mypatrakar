import React, { useCallback, useState } from "react";
import FormSection from "./FormSection";
import PreviewSection from "../components/PreviewSection";
import HowItWorks from "./HowItWorks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ShortGenerator() {
  const [formData, setFormData] = useState({
    tone: "",
    category: "",
    country: "",
    state: "",
    city: "",
  });

  const [generatedShort, setGeneratedShort] = useState({
    image: "",
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleGenerate = useCallback(async () => {
    const { tone, category } = formData;
    if (!tone || !category) {
      toast.error("Please select AI tone and category before generating.");
      return;
    }

    setLoading(true);
    setGeneratedShort({
      image: "https://picsum.photos/512/266",
      title: "Amazing AI Short",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    });
    setLoading(false);

    // Mock API delay
    setTimeout(() => {
      setGeneratedShort({
        image: "https://picsum.photos/512/266",
        title: "Amazing AI Short",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      });
    
      setLoading(false);
    }, 1500);
  },[])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <h1
        className="text-[47.6px] leading-[] md:text-4xl font-extrabold text-center text-[#FF0000] font-sans"
        style={{
          fontWeight: 800,
        }}
      >
        Create AI Shorts in Seconds
      </h1>
      <p className="text-[#16274E] text-center mt-2 max-w-xl text-[17px] font-sans">
        Select AI tone and category, optionally add location, and generate your
        AI Short instantly.
      </p>

      <div className="bg-white rounded-xl shadow-md mt-10 p-6 w-full max-w-6xl border-2 py-10 grid md:grid-cols-2 gap-6 text-[#1E293B]">
        <FormSection
          formData={formData}
          setFormData={setFormData}
          handleGenerate={handleGenerate}
          loading={loading}
        />
        <PreviewSection generatedShort={generatedShort} loading={loading} />
      </div>

      <HowItWorks />
    </div>
  );
}
