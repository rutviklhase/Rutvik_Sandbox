import ('node-fetch')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
const { default: axios } = require('axios');
const app = express()
app.use(cors());
const port = 3001;
//comment
async function getProjectList(){
   const response = axios.get('https://gh-pinned-repos.egoist.dev/?username=rutviklhase');
  
   return response;     
}

async function getProjectImagesUrl(repoName){
  return url = `https://raw.githubusercontent.com/rutviklhase/${repoName}/main/ShowcaseImage.jpg`;
}

app.get('/projects', async (req, res) => {
    res.set({"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":true});
    var ProjectList = await getProjectList();

    for (var i in ProjectList.data){
      ProjectList.data[i].image= await getProjectImagesUrl(ProjectList.data[i].repo);
      console.log(ProjectList.data[i].image);
    }
    // console.log(ProjectList);
    res.send(ProjectList.data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})