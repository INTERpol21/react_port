import project1 from "../img/projects/activebox.png";
import project2 from "../img/projects/Blog.png";
import project3 from "../img/projects/ideas.png";
import project4 from "../img/projects/learnReact.png";
import project5 from "../img/projects/mogo.png";
import project6 from "../img/projects/PorrtfolioReact.png";
import project7 from "../img/projects/portfolio.png";
import project8 from "../img/projects/TodoV1.png";
import project9 from "../img/projects/TrelloClone.png";
import project10 from "../img/projects/upavhouse.png";
import project11 from "../img/projects/upavhouse2.png";
import project12 from "../img/projects/leverans.png";

import "./style.css";

const Project = () => {
  return (
    <ul className="projects">
      <li className="project">
        <a href="./project-page.html">
          <img src={project1} alt="project1" className="project__img" />
          <h3 className="project__title">Gaming streaming portal</h3>
        </a>
      </li>
      <li className="project">
        <a href="./project-page.html">
          <img src={project2} alt="project2" className="project__img" />
          <h3 className="project__title">Video service</h3>
        </a>
      </li>
      <li className="project">
        <a href="./project-page.html">
          <img src={project3} alt="project3" className="project__img" />
          <h3 className="project__title">Video portal</h3>
        </a>
      </li>

      <li className="project">
        <img src={project4} alt="project4" className="project__img" />
        <h3 className="project__title">Dating app</h3>
      </li>
      <li className="project">
        <img src={project5} alt="project5" className="project__img" />
        <h3 className="project__title">Landing</h3>
      </li>
      <li className="project">
        <img src={project6} alt="project6" className="project__img" />
        <h3 className="project__title">Gaming community</h3>
      </li>

      <li className="project">
        <img src={project7} alt="project7" className="project__img" />
        <h3 className="project__title">Dating app</h3>
      </li>
      <li className="project">
        <img src={project8} alt="project8" className="project__img" />
        <h3 className="project__title">Landing</h3>
      </li>
      <li className="project">
        <img src={project9} alt="project9" className="project__img" />
        <h3 className="project__title">Gaming community</h3>
      </li>

      <li className="project">
        <img src={project10} alt="project7" className="project__img" />
        <h3 className="project__title">Dating app</h3>
      </li>
      <li className="project">
        <img src={project11} alt="project8" className="project__img" />
        <h3 className="project__title">Landing</h3>
      </li>
      <li className="project">
        <img src={project12} alt="project9" className="project__img" />
        <h3 className="project__title">Gaming community</h3>
      </li>
    </ul>
  );
};

export default Project;
