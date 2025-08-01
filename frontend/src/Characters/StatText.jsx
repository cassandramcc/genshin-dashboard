import { useState } from "react";

export default function ({ text, setText }) {
  const [editing, setEditing] = useState(false);

  function handleDoubleClick() {
    setEditing(true)
  }

  function handleOnMouseLeave() {
    setTimeout(() => {
      setEditing(false)
    }, 1000)
  }

  return (
    <>
      {editing ? (
        <input type="text" className="stat-value" onMouseLeave={handleOnMouseLeave} value={text} onChange={e => setText(e.target.value)}/>
      ) : (
        <span onDoubleClick={handleDoubleClick} className="stat-value">{text}</span>
      )}
    </>
  );
}