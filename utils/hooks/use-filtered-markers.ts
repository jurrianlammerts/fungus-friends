import { ColorAndSpot, Mushroom } from "@/types";
import { useEffect, useState } from "react";

export default function useFilteredMarkers({
  selectedFilters,
  markers,
}: {
  selectedFilters: ColorAndSpot;
  markers: Mushroom[] | undefined;
}) {
  const [filteredMarkers, setFilteredMarkers] = useState(markers);

  useEffect(() => {
    if (!selectedFilters.color && !selectedFilters.spot) {
      setFilteredMarkers(markers);
    } else {
      const filteredMarkers = markers?.filter((mushroom) => {
        if (selectedFilters.color && selectedFilters.spot) {
          return (
            mushroom.color === selectedFilters.color &&
            mushroom.spots === selectedFilters.spot
          );
        }
        if (selectedFilters.color) {
          return mushroom.color === selectedFilters.color;
        }
        if (selectedFilters.spot) {
          return mushroom.spots === selectedFilters.spot;
        }
        return false;
      });
      setFilteredMarkers(filteredMarkers);
    }
  }, [selectedFilters, markers]);

  return { filteredMarkers };
}
