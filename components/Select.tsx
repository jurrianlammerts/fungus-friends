import { ReactElement } from "react";

type SelectProps = {
  title: string;
  options: ReactElement[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string | null;
};

export default function Select({
  title,
  options,
  onChange,
  defaultValue,
}: SelectProps) {
  return (
    <div className="relative flex flex-row items-center">
      <h2 className="mr-2 font-bold">{title}</h2>
      <select
        className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
        onChange={onChange}
        defaultValue={defaultValue ?? ""}
      >
        <option value="">Select a {title.toLowerCase()}</option>
        {options}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-400">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z" />
        </svg>
      </div>
    </div>
  );
}
