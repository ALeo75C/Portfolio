import React from "react";

// onClick={() => props.onClick(props.id + 1)}
export default function Skill(props) {
  const value = props.level + "%";
  return (
    <div className="Skill">
      <p>{props.title}</p>
      <div className="scale">
        <div
          className="value"
          style={{
            width: value,
          }}
        ></div>
      </div>
    </div>
  );
}
