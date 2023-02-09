import React from "react";
import "./Project.scss"
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";



interface Props{
    imageUrl?: string;
    projectName?: string; 
    projectDesc?: string;
    link?: string;
}

export const Project: React.FC<Props> = ({imageUrl, projectName, projectDesc,link}) => {
    
    return(
        <>  
            <div className="Project">
                
                <Card sx={{width: "15vw", backgroundColor: "#1E1E1E", height: "25vh", color:"white"}}>
                    <CardMedia 
                        sx={{height: "15vh"}} 
                        image={imageUrl} 
                        title={projectName}
                    />
                    <CardContent>
                        <Typography sx={{fontFamily:"Poppins", textDecoration: "none", fontSize: "2vh"}} gutterBottom variant="h6" component="div">
                            {projectName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {projectDesc} <br/>
                            <a href={link}>Learn More</a>
                        </Typography>
                        
                    </CardContent>
                   
                </Card>
        
                
            </div>
        </>
    )
}