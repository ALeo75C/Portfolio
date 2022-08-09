import React from "react";
import { Outlet } from "react-router-dom";

import ProjectCard from "../1_Molecules/ProjectCard";

const renderCards = (data) => {
  let projectsItems = [];

  for (var k in data.projects) {
    if (data.projects.hasOwnProperty(k)) {
      projectsItems.push(
        <ProjectCard id={k} data={data.projects[k]} key={k} />
      );
    }
  }

  // data.projects.forEach((project, i) => {
  //   projectsItems.push(
  //     <ProjectCard id={i} data={project} onClick={data.onClick} key={i} />
  //   );
  // });

  return projectsItems;
};

export default function Main(props) {
  return (
    <>
      <div className="Main">{renderCards(props)}</div>
      <Outlet />
    </>
  );
}
// <div className="Main">
//
// </div>
// export default function Main() {
//   return (
//
//       <h1>LOLOLO</h1>
//       <Footer />
//     </div>
//   );
// }
