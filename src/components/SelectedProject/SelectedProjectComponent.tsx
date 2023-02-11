import { url } from "inspector";
import React from "react";
import "./SelectedProjectComponent.scss"

interface SelectedProjectProps{
    repoName?: string;
    projectDesc?: string;
    link?: string;
    image?:string;
}

export const SelectedProjectComponent : React.FC<SelectedProjectProps> = ({repoName, projectDesc, link,image}) => {
    return(
        <>
        <div className="SelectedProjectComponent" style={{backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat"}}>
            <h1 className="SelectedProjectName">{repoName}</h1>
            <h4 className="SelectedProjectDesc">{projectDesc}</h4>
            <h5 className="SelectedProjectLink"><a href={link}>View On GitHub</a></h5>
        </div>
        </>
    )
}