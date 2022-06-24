import "./Project.scss";
import classNames from "classnames";
import Button from '@mui/material/Button';

function Project({ project, deleteItem }) {
  const projectClasses = classNames({
    "project--green": project.category === "C",
    "project--blue": project.category === "D",
    "project--purple": project.category === "F",
    project: true
  })

  const categoryClasses = classNames({
    "project-title__category--green": project.category === "C",
    "project-title__category--blue": project.category === "D",
    "project-title__category--purple": project.category === "F",
    "project-title__category": true
  })
  return (
    <div className={projectClasses}>
      <div className="project-title">
        <div className={categoryClasses}>{project.category}</div>
        <div className='project-title__name'>{project.name}</div>
      </div>
      <div className="project-content">
        <div className="project-content__users">{project.users} users</div>
        <div className="project-content__dashboard">{project.dashboards} dashboards</div>
        <Button variant="text" className="project-content__button" onClick={() => deleteItem(project)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
export default Project;
