"use client";

import { ColorAndSpot, Mushroom } from "@/types";
import Select from "./Select";

type FiltersProps = {
  mushrooms: Mushroom[] | undefined;
  selectedFilters: ColorAndSpot;
  handleChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: "color" | "spot",
  ) => void;
};

export default function Filters({
  mushrooms,
  selectedFilters,
  handleChange,
}: FiltersProps) {
  const filterMushrooms = (
    mushrooms: Mushroom[] | undefined,
    selectedFilters: ColorAndSpot,
  ) => {
    return mushrooms?.filter((mushroom) => {
      return (
        (mushroom.spots === selectedFilters.spot && selectedFilters.spot) ||
        (mushroom.color === selectedFilters.color && selectedFilters.color)
      );
    });
  };

  const generateOptions = (
    key: keyof Mushroom,
    filteredValues: Mushroom[] | undefined,
  ) => {
    const uniqueValues = [
      ...new Set(mushrooms?.map((mushroom) => mushroom[key])),
    ];

    return uniqueValues?.map((value) => {
      const isDisabled =
        filteredValues &&
        filteredValues?.length > 0 &&
        !filteredValues?.some((mushroom: Mushroom) => mushroom[key] === value);

      return (
        <option
          key={value.toString()}
          value={value.toString()}
          disabled={isDisabled}
        >
          {value}
        </option>
      );
    });
  };

  const filteredColorOptions = generateOptions(
    "color",
    filterMushrooms(mushrooms, selectedFilters),
  );

  const filteredSpotOptions = generateOptions(
    "spots",
    filterMushrooms(mushrooms, selectedFilters),
  );

  return (
    <div className="flex h-32 w-full items-center justify-between bg-gray-200 p-6 dark:bg-slate-900 sm:h-16">
      <h1 className="text-2xl font-bold sm:text-3xl">Fungus friends</h1>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Select
          title="Color"
          options={filteredColorOptions}
          onChange={(e) => handleChange(e, "color")}
          defaultValue={selectedFilters.color}
        />
        <Select
          title="Spot"
          options={filteredSpotOptions}
          onChange={(e) => handleChange(e, "spot")}
          defaultValue={selectedFilters.spot}
        />
      </div>
    </div>
  );
}
