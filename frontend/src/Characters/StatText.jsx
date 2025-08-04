import { useState } from "react";
import { useCharacterContext } from "./CharacterContext";

export default function ({ text, setText, statPath }) {
  const [editing, setEditing] = useState(false);
  const { updateStat } = useCharacterContext();

  function handleDoubleClick() {
    setEditing(true)
  }

  function handleChange(e) {
    const newValue = e.target.value;
    setText(newValue);
  }

  function handleBlur() {
    // When the user finishes editing, update the backend
    updateStat(statPath, text);
    setEditing(false);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleBlur();
    }
  }

  return (
    <>
      {editing ? (
        <input 
          type="text" 
          className="stat-value" 
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          value={text} 
          onChange={handleChange}
          autoFocus
        />
      ) : (
        <span onDoubleClick={handleDoubleClick} className="stat-value">{text}</span>
      )}
    </>
  );
}