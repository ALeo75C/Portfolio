import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { projects } from "../data";
import ScrollToTop from "./ScrollToTop";

import Main from "../components/2_Organisms/Main";
import Footer from "../components/2_Organisms/Footer";
import ProjectPage from "../components/2_Organisms/ProjectPage";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page_id: 0,
      projects: projects,
    };
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollLeft = 0;
  }

  changePage = (id) => {
    this.setState({ page_id: id });
  };

  // </Router>
  // <Router>
  render() {
    return (
      <div className="Portfolio">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main projects={this.state.projects} />} />
            <Route path=":projectId" element={<ProjectPage />} />
            <Route
              path="*"
              element={
                <main>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </ScrollToTop>
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
