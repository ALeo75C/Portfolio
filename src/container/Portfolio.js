import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { tags, projects } from "../data";
import ScrollToTop from "./ScrollToTop";

import Main from "../components/2_Organisms/Main";
import MyPage from "../components/2_Organisms/MyPage";
import Header from "../components/2_Organisms/Header";
import Footer from "../components/2_Organisms/Footer";
import ProjectPage from "../components/2_Organisms/ProjectPage";

import TopBottom from "../components/1_Molecules/TopBottom";

import { FiChevronUp } from "react-icons/fi";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "white",
      activeTags: Array.from(tags),
      projects: projects,
      mainLink: "",
    };
  }

  changeTheme = (theme) => {
    this.setState({ theme: theme });
  };

  changeActiveTags = (tag) => {
    let activeTags = this.state.activeTags;

    if (activeTags.includes(tag)) {
      const index = activeTags.indexOf(tag);
      if (index >= 0) {
        activeTags.splice(index, 1);
      }
    } else {
      activeTags.push(tag);
    }

    this.setState({ activeTags: activeTags });
  };

  // </Router>
  // <Router>
  render() {
    // this.changeTheme("white");
    return (
      <div className="Portfolio">
        <Header />
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  projects={this.state.projects}
                  activeTags={this.state.activeTags}
                  changeActiveTags={this.changeActiveTags}
                />
              }
            />
            <Route
              path=":projectId"
              element={<ProjectPage changeTheme={this.changeTheme} />}
            />
            <Route path="/lError_403" element={<MyPage />} />
          </Routes>
        </ScrollToTop>
        <TopBottom />
        <Footer />
      </div>
    );
  }

  // render() {
  //   return this.state.page_id === 0 ? (
  //     <Main projects={this.state.projects} onClick={this.changePage} />
  //   ) : (
  //     <ProjectPage
  //       data={this.state.projects[this.state.page_id - 1]}
  //       onClick={this.changePage}
  //     />
  //   );
  // }
}
// export default function Main() {
//   return (
//     <div className="Main">
//       <h1>LOLOLO</h1>
//       <Footer />
//     </div>
//   );
// }
