import React from "react";

// onClick={() => props.onClick(props.id + 1)}
export default function Skill(props) {
  return (
    <div className="Skill">
      {props.title}
      {props.level}
    </div>
  );
}
