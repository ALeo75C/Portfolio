import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { Link, useParams } from "react-router-dom";

import { projects, tags } from "../../data";

import Footer from "../2_Organisms/Footer";

import Froogs from "../0_Works/Froogs";
import Hogwarts from "../0_Works/Hogwarts";
import Village from "../0_Works/Village";
import FAC from "../0_Works/FAC";
import Fysci from "../0_Works/Fysci";

import { FiChevronLeft } from "react-icons/fi";

const renderTagCollections = (projectTags, tecnology) => {
  let projectTagsCollectionItems = [];
  let tecnologyCollectionItems = [];
  projectTags.forEach((tag, i) => {
    projectTagsCollectionItems.push(<div className="tag">{tag}</div>);
  });
  tecnology.forEach((tag, i) => {
    tecnologyCollectionItems.push(<div className="tag">{tag}</div>);
  });
  return (
    <div className="tags">
      <div className="tagsBlock">
        <div className="tagCollection">{projectTagsCollectionItems}</div>
      </div>
      <div className="tagsBlock">
        <p>Технологии</p>
        <div className="tagCollection">{tecnologyCollectionItems}</div>
      </div>
    </div>
  );
};

// prettier-ignore
const renderLinks = (links) => {
  console.log(links.length);
  let linksItems = []
  links.forEach((link, i) => {
    linksItems.push(<a target="_blank" href={link.url}>{link.type}</a>)
  });
  return links.length > 0 ? <div className='linksCollection'>{linksItems}</div> : ''
};

const renderImages = (id) => {
  switch (id) {
    case "frogs":
      return <Froogs />;
    case "hogwarts":
      return <Hogwarts />;
    case "village":
      return <Village />;
    case "fac":
      return <FAC />;
    case "fysci":
      return <Fysci />;
    default:
      return "Работ нет";
  }
};

const ProjectCard = (props) => {
  const project = projects[useParams().projectId];
  // project.theme ? this.props.changeTheme(project.theme) : "";
  return (
    <div
      className={"Project " + project.id + " i" + tags.indexOf(project.tag[0])}
    >
      <div className="head">
        <div className="header">
          <div className="content">
            <Link to="/Portfolio" className="back">
              <FiChevronLeft />
            </Link>
            <h1>{project.title}</h1>
          </div>
          <div className="_color"></div>
        </div>
        <div className="info">
          <p>{project.text}</p>
          <div>
            {renderTagCollections(project.tag, project.tecnology)}
            {renderLinks(project.links)}
          </div>
        </div>
      </div>
      {renderImages(project.id)}
    </div>
  );
};

// {this.renderCollection(project.tecnology, "tag", "tagCollection")}
// {this.renderCollection(project.links, "links", "linksCollection")}
// {this.renderCollection(project.img, "img", "imgCollection")}

export default ProjectCard;
