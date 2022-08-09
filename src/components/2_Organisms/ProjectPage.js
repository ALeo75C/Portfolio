import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { Link, useParams } from "react-router-dom";

import { projects } from "../../data";

import Footer from "../2_Organisms/Footer";

import Froogs from "../0_Works/Froogs";
import Hogwarts from "../0_Works/Hogwarts";
import Village from "../0_Works/Village";
import FAC from "../0_Works/FAC";
import Fysci from "../0_Works/Fysci";

const renderTagCollections = (tags, tecnology) => {
  let tagsCollectionItems = [];
  let tecnologyCollectionItems = [];
  tags.forEach((tag, i) => {
    tagsCollectionItems.push(<div className="tag">{tag}</div>);
  });
  tecnology.forEach((tag, i) => {
    tecnologyCollectionItems.push(<div className="tag">{tag}</div>);
  });
  return (
    <div className="tags">
      <div className="tagsBlock">
        <div className="tagCollection">{tagsCollectionItems}</div>
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
  let linksItems = []
  links.forEach((link, i) => {
    linksItems.push(<a target="_blank" href={link.url}>{link.type}</a>)
  });
  return <div className='linksCollection'>{linksItems}</div>
};

const renderImages = (id) => {
  switch (id) {
    case "frogs":
      return <Froogs />;
    case "hogwarts":
      return <Hogwarts />;
    case "village":
      return <Village />;
    case "FAC":
      return <FAC />;
    case "fysci":
      return <Fysci />;
    default:
      return "Работ нет";
  }
};

const ProjectCard = (props) => {
  const project = projects[useParams().projectId];
  console.log(projects);
  return (
    <div className={"Project " + project.id}>
      <div className="head">
        <div className="header">
          <Link to="/" className="back">
            <Back />
          </Link>
          <h1>{project.title}</h1>
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
