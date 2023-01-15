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
            <> 
                <div>
                    {projects.map
                    (project => 
                        <div>
                            <Project imageUrl="asdf" projectDesc={project.owner} projectName={project.repo}/>
                        </div>
                    )}
                </div>
            </>
            )
       
}