import React, { useState } from "react";

const SearchForm = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <form onSubmit={onSubmit} class="min-w-full">
      <div class="flex items-center border-b border-b-2 border-indigo-500 py-2">
        <input
          onChange={e => setText(e.target.value)}
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for an image..."
        />
      </div>
    </form>
  );
};

export default SearchForm;
