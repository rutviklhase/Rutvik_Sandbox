import React, { useEffect, useState } from "react";
import { Project } from "../Project/Project";
import "./PinnedProjs.scss";

export const PinnedProjs: React.FC = () =>
{
    const [pinnedProjs, setPinnedProjs] = useState<any[]>([]);
    const [projects, setProjects] = useState<any[]>([]);

    var requestOptions = {
        'content-type':'application/json',
        method:'GET'
    };
    useEffect(() => {
        fetch('http://localhost:3001/projects',requestOptions)
        .then((res)=>res.json())
        .then((data)=>{setProjects(data); 
            console.log(data);}) 
    },[]);



    
    return(
            <div className="PinnedProjects"> 
                <h2 className="PinnedHead">Pinned Projects :</h2>
                <div className="ProjectsList">
                    {projects.map
                    (project => 
                        <div>
                            <Project imageUrl={project.image} projectDesc={project.description} projectName={project.repo} link={project.link}/>
                        </div>
                    )}
                </div>
            </div>
            )
       
}