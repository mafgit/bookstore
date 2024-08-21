import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchInput.css";

const SearchInput = ({ setSearch }) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Type here to search"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={() => {
          const newText = text.trim();
          // if (newText.length) {
          if (
            newText.includes("?") ||
            newText.includes("=") ||
            newText.includes(",") ||
            newText.includes("&")
          )
            return;

          setSearch(newText);
          navigate("/search?text=" + newText + "&tags=");
          // }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
