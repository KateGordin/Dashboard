import "./App.scss";
import Project from "./components/Project";
import { useState } from "react";
import BasicModal from "./components/Modal";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import avatar from "./assets/avatar.png"

function App() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null)

  const [projects, setProjects] = useState([
    { name: "Project A", users: 4, dashboards: 3, category: "D", id: 1 },
    { name: "Project B", users: 2, dashboards: 4, category: "C", id: 2 },
    { name: "Project C", users: 1, dashboards: 2, category: "F", id: 3 },
    { name: "Project D", users: 3, dashboards: 2, category: "D", id: 4 },
  ]);

  const [searchedProjects, setSearchedProjects] = useState([
    { name: "Project A", users: 4, dashboards: 3, category: "D", id: 1 },
    { name: "Project B", users: 2, dashboards: 4, category: "C", id: 2 },
    { name: "Project C", users: 1, dashboards: 2, category: "F", id: 3 },
    { name: "Project D", users: 3, dashboards: 2, category: "D", id: 4 },
  ]);

  function openModal(project){
    setSelectedProject(project)
    setOpen(true)
  }

  function closeModal(){
    setOpen(false)
  }

  function deleteItem(id) {
    const filteredArray = projects.filter((item) => item.id !== id);
    setProjects(filteredArray);
    setSearchedProjects(filteredArray)
  }

  const onSearch = (searchString) => {
    console.log(searchString.trim())
    const leftArray = projects.filter((project) => project.name.toLowerCase().includes(searchString.trim().toLowerCase()))
    setSearchedProjects(leftArray);
  }

  return (
    <div className="app">
      <div className="navbar">
        <MenuIcon className="navbar__menu" />
        <div className="navbar-content">
          <div className="bell">
            <div className="redcircle"></div>
            <NotificationsNoneIcon/>
          </div>
          <span className="navbar-content__name">
                 Sarah Green
          </span>
          <img className="navbar-content__avatar" alt="picture" src={avatar} />
        </div>
      </div>

      <div className="projects">
        <div className="projects--greeting">Hello Sarah!</div>
        <div className="projects--hint">Here you can find your projects and dashboards.</div>
        <div className="search">
          <SearchIcon/>
          <input className="search--desktop" onChange={e => onSearch(e.target.value)} placeholder="Search a project..."></input>
          <input className="search--tablet" onChange={e => onSearch(e.target.value)} placeholder="Search"></input>
        </div>

        {searchedProjects.map((project) => (
          <Project
            key={project.id}
            project={project}
            deleteItem={openModal}
          />
        ))}

        {selectedProject &&
          <BasicModal
            open={open}
            project={selectedProject}
            handleClose={closeModal}
            deleteItem={deleteItem}
          />}
      </div>
    </div>
  );
}

export default App;
