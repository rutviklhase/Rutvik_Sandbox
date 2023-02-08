import { Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Project } from "../Project/Project";
import "./PinnedProjs.scss";
import image from "../../assets/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';

export const PinnedProjs: React.FC = () =>
{
    const [pinnedProjs, setPinnedProjs] = useState<any[]>([]);
    const [projects, setProjects] = useState<any[]>([]);
    const [SelectedProject, setSelectedProject] = useState<any[]>([]);
    const [SelectedDesc, setSelectedDesc] = useState<any[]>([]);
    const [SelectedName, setSelectedName] = useState<any[]>([]);

    var requestOptions = {
        'content-type':'application/json',
        method:'GET'
    };
    useEffect(() => {
        fetch('http://localhost:5001/projects',requestOptions)
        .then((res)=>res.json())
        .then((data)=>{setProjects(data); 
            console.log(data);}) 
    },[]);



    
    return(
            <div className="PinnedProjects"> 
                {/* <h3 className="PinnedHead">Pinned Projects :</h3>
                <div className="ProjectsList">
                    <Carousel>
                        {projects.map(project=>(
                            <Carousel.Item key={project.key}>
                                <img src={image}/>
                                <Carousel.Caption>
                                    <h3>{project.repo}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    
                </div> */}
            </div>
            )
       
}