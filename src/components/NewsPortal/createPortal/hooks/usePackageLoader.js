import { useEffect, useState } from "react";
import { GetPriceDetails } from "../../../../api";

export const usePackageLoader = (region) => {
  const [packages, setPackages] = useState([]);
  const [isLoadingPackages, setIsLoadingPackages] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!region) return;

    let canceled = false;
    const loadPackages = async () => {
      try {
        setIsLoadingPackages(true);
        setError(null);
        const res = await GetPriceDetails();
        const data = res.data.response.filter(
          (rgn) => String(rgn?.region) === String(region)
        );
        if (!canceled) {
          setPackages(data);
        }
      } catch (err) {
        if (!canceled) {
          setError("Failed to load packages. Please try again.");
          console.error("Package loading error:", err);
        }
      } finally {
        if (!canceled) {
          setIsLoadingPackages(false);
        }
      }
    };

    const debounceTimer = setTimeout(() => {
      loadPackages();
    }, 300);

    return () => {
      canceled = true;
      clearTimeout(debounceTimer);
    };
  }, [region]);

  return {
    packages,
    isLoadingPackages,
    error,
  };
};