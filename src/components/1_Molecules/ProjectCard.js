import React from "react";
import { Link } from "react-router-dom";

const renderTag = (tags) => {
  // const tags = this.props.data.tag;
  let tagsItems = [];
  tags.forEach((tag, i) => {
    tagsItems.push(<p>{tag}</p>);
  });
  return <div className="tagCollection">{tagsItems}</div>;
};

// onClick={() => props.onClick(props.id + 1)}
export default function ProjectCard(props) {
  return (
    <Link to={`${props.data.id}`} className={"ProjectCard " + props.data.id}>
      <div className="content">
        <h3>{props.data.title}</h3>
        {renderTag(props.data.tag)}
      </div>
    </Link>
  );
}
