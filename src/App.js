import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?1",
    content: "React is front end javascript library1",
  },
  {
    title: "What is React?2",
    content: "React is front end javascript library2",
  },
  {
    title: "What is React?3",
    content: "React is front end javascript library2",
  },
];

const options = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Yellow", value: "yellow" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Accordion items={items} />
      <hr />
      <Search />
      <hr />
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
