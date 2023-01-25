
import "./style.css";

type projectProps = {
  title: string;
  skills: string;
  img: any;
  gitHubLink: string;
  description: string;
};


const Project = ({
  title,
  skills,
  img,
  gitHubLink,
  description,
}: projectProps) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <h1 className="project__title">{title}</h1>
        <img src={img} alt={title} className="project__img" />
        <h2 className="project__title">{skills}</h2>
        <h3 className="project__title">{description}</h3>
        <h4 className="">{gitHubLink}</h4>
      </a>
    </li>
  );
};

export default Project;
