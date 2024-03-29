import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { Link, useParams } from "react-router-dom";

import { projects, tags } from "../../data";

import Footer from "../2_Organisms/Footer";

import Froogs from "../0_Works/Froogs";
import Hogwarts from "../0_Works/Hogwarts";
import Village from "../0_Works/Village";
import FAC from "../0_Works/FAC";
import Fysci from "../0_Works/Fysci";
import CS from "../0_Works/CS";
import Mirea from "../0_Works/Mirea";
import GW from "../0_Works/GW";
import Books from "../0_Works/Books";

import { FiChevronLeft } from "react-icons/fi";
import { BsGithub, BsBookHalf, BsLink } from "react-icons/bs";

const renderTagCollections = (projectTags, tecnology) => {
  let projectTagsCollectionItems = [];
  let tecnologyCollectionItems = [];
  projectTags.forEach((tag, i) => {
    projectTagsCollectionItems.push(<div className="tag" key={`tecnology_${i}`}>{tag}</div>);
  });
  tecnology.forEach((tag, i) => {
    tecnologyCollectionItems.push(<div className="tag" key={`tecnology_${i}`}>{tag}</div>);
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
  let linksItems = []
  links.forEach((link, i) => {
    let icon = link.type
    if (link.type == 'GitHub') {
      icon = <BsGithub key={i}/>
    } else if (link.type == 'product') {
      icon = <BsLink key={i}/>

    }else if (link.type == 'book') {
      icon = <BsBookHalf key={i}/>

    }
    linksItems.push(<a key={`link_${i}`} target="_blank" href={link.url}>{icon}</a>)
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
    case "crowSwap":
      return <CS />;
    case "merea":
      return <Mirea />;
    case "genshinViki":
      return <GW />;
    case "bookSearch":
      return <Books />;
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
          <p>{project.text[0].replace(/[N]/g, "\u00A0")}</p>
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
