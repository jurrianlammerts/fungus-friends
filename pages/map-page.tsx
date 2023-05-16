"use client";

import dynamic from "next/dynamic";
import { Mushroom } from "@/types";
import Filters from "@/components/Filters";
import useFilterQueryParam from "@/utils/hooks/use-filter-query-params";
import useFilteredMarkers from "@/utils/hooks/use-filtered-markers";

const MapWithNoSSR = dynamic(() => import("@/components/Map"), { ssr: false });

type MapProps = {
  mushrooms: Mushroom[];
};

export default function Map({ mushrooms }: MapProps) {
  const { selectedFilters, setSelectedFilters } = useFilterQueryParam();
  const { filteredMarkers } = useFilteredMarkers({
    markers: mushrooms,
    selectedFilters,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: "color" | "spot",
  ) => {
    const { value } = event.target;
    const lowerCaseValue = value;

    setSelectedFilters({
      ...selectedFilters,
      [type]: lowerCaseValue,
    });
  };

  return (
    <>
      <Filters
        mushrooms={mushrooms}
        selectedFilters={selectedFilters}
        handleChange={handleChange}
      />
      <MapWithNoSSR filteredMarkers={filteredMarkers ?? []} />
    </>
  );
}
