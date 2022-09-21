import { ChangeEvent, FormEvent } from "react";

const SearchInput = ({
  handleSubmit,
  handleSearchChange,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex w-full justify-center">
      <form
        onSubmit={handleSubmit}
        className="m-6 w-2/5 relative justify-center items-center bg-ggpredict-400"
      >
        <input
          type="text"
          placeholder="Search for teams, players, matches..."
          className="bg-ggpredict-400 w-full py-2 text-xs text-white block px-7"
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="material-symbols-outlined w-5 h-5 text-ggpredict-200 absolute left-1 top-1 text-base"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
