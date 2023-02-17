import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { Project } from "../Project/Project";
import "./PinnedProjs.scss";
import image from "../../assets/bs.png"
import { SelectedProjectComponent } from "../SelectedProject/SelectedProjectComponent";

export const PinnedProjs: React.FC = () =>
{
    const [pinnedProjs, setPinnedProjs] = useState<any[]>([]);
    const [projects, setProjects] = useState<any[]>([]);
    const [SelectedProject, setSelectedProject] = useState<any>("Rutvik-Sandbox");
    const [SelectedDesc, setSelectedDesc] = useState<any>("This Website.");
    const [SelectedLink, setSelectedLink] = useState<any>("Project Link");
    const [SelectedImage, setSelectedImage] = useState<any>("");

    var requestOptions = {
        'content-type':'application/json',
        method:'GET'
    };
    useEffect(() => {
        fetch('http://localhost:5002/projects',requestOptions)
        .then((res)=>res.json())
        .then((data)=>{setProjects(data); 
            console.log(data);}) 
    },[]);

    function changeProject(projIdx : any){
        setSelectedProject(projects[projIdx].repo);
        setSelectedDesc(projects[projIdx].description ? projects[projIdx].description : "A project created by Rutvik."  )
        setSelectedLink(projects[projIdx].link);
        setSelectedImage(projects[projIdx].image);
        console.log(SelectedImage);
    }

    
    return(
            <div className="PinnedProjects"> 
            <div className="Selector">
                <h3 className="PinnedHead">Pinned Projects</h3>
                <div className="ProjectsList">
                    <Carousel onSlid={changeProject} interval={null} fade={true} variant={"dark"} indicators={true}>
                        {projects.map(project=>(
                            <Carousel.Item key={project.key}>
                                <img src={image} alt={project.repo} className="projectImage"/>
                                <Carousel.Caption>
                                    <h3>{project.repo}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="SelectedProjectContainer" style={{backgroundImage:`url(${SelectedImage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >
                    <SelectedProjectComponent repoName = {SelectedProject} projectDesc = {SelectedDesc} link ={SelectedLink}/>
                </div>
                    
                </div>
            </div>
            )
       
}