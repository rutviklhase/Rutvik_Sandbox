import React from "react";
import { isPropertySignature } from "typescript";
import "./Project.scss"
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";


interface Props{
    imageUrl: string;
    projectName?: string; 
    projectDesc?: string;
}

export const Project: React.FC<Props> = ({imageUrl, projectName, projectDesc}) => {
    
    return(
        <>  
            <div className="Project">
                <Card sx={{width: "15vw", backgroundColor: "black", height: "30vh", color:"white"}}>
                    <CardMedia 
                        sx={{height: "15vh"}} 
                        image={imageUrl} 
                        title={projectName}
                    />
                    <CardContent>
                        <Typography sx={{fontFamily:"Roboto"}} gutterBottom variant="h6" component="div">
                            {projectName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {projectDesc}
                        </Typography>
                    </CardContent>
                   
                </Card>
            </div>
        </>
    )
}