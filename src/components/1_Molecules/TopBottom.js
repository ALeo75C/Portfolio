import React from "react";

// import ScrollToTop from "./ScrollToTop";

import { FiChevronUp } from "react-icons/fi";

export default class TopBottom extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShow: false };
  }

  hideBar = () => {
    const { isShow } = this.state;

    window.scrollY > 200
      ? !isShow && this.setState({ isShow: true })
      : isShow && this.setState({ isShow: false });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }

  onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    const classHide = this.state.isShow ? "" : "hide";
    return (
      <div className={"Up " + classHide} onClick={this.onClick}>
        <div className="_color"></div>
        <FiChevronUp />
      </div>
    );
  }
}
