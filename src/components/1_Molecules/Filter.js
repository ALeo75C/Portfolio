import React from "react";

import { tags } from "../../data";

import { ReactComponent as Close } from "../../assets/icons/close.svg";

const renderTags = (active, action) => {
  // const tags = this.props.data.tag;
  let tagsItems = [];
  tags.forEach((tag, i) => {
    const classNames = "tag " + active.includes(tag);
    tagsItems.push(
      <div className={classNames} onClick={() => action(tag)} key={i}>
        <div className="content">
          <p>{tag}</p> <Close />
        </div>
        <div className={"_color i" + i}></div>
      </div>
    );
  });
  return tagsItems;
};

// onClick={() => props.onClick(props.id + 1)}
export default function Filter(props) {
  return (
    <div className="Filter">{renderTags(props.activeTags, props.onClick)}</div>
  );
}
