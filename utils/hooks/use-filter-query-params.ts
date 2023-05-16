import { Color, Spots, ColorAndSpot } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useFilterQueryParam() {
  const params = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState<ColorAndSpot>(() => {
    const selectedColor = params?.get("color");
    const selectedSpot = params?.get("spot");

    if (
      selectedColor &&
      Object.values(Color).includes(selectedColor as Color)
    ) {
      return { color: selectedColor as Color, spot: selectedSpot as Spots };
    }

    if (selectedSpot && Object.values(Spots).includes(selectedSpot as Spots)) {
      return { color: null, spot: selectedSpot as Spots };
    }

    return { color: null, spot: null };
  });

  useEffect(() => getQueryParams(selectedFilters), [selectedFilters]);

  const getQueryParams = (selectedFilters: ColorAndSpot) => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    if (selectedFilters.color) {
      urlSearchParams.set("color", selectedFilters.color);
    } else {
      urlSearchParams.delete("color");
    }

    if (selectedFilters.spot) {
      urlSearchParams.set("spot", selectedFilters.spot);
    } else {
      urlSearchParams.delete("spot");
    }

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${urlSearchParams}`,
    );
  };

  return { selectedFilters, setSelectedFilters };
}
