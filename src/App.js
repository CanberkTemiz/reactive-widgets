import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "Accordion List Header",
    content: "Im a list item belongs to accordion",
  },
  {
    title: "Accordion List Header",
    content: "Im a list item belongs to accordion",
  },
  {
    title: "Accordion List Header",
    content: "Im a list item belongs to accordion",
  },
];

const options = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Yellow", value: "yellow" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="ui segment column grid">
      <div className="row">
        <Accordion items={items} />
      </div>

      <div className="row">
        <Search />
      </div>

      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown && (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      )}
    </div>
  );
};
export default App;
