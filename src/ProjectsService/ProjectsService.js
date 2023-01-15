import ('node-fetch')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
const { default: axios } = require('axios');
const app = express()
app.use(cors());
const port = 3001

async function getProjectList(){
   const response = axios.get('https://gh-pinned-repos.egoist.dev/?username=rutviklhase');
   console.log(response);
   return response;     
}

async function getProjectImagesUrl(repoName){
  const url = `https://raw.githubusercontent.com/rutviklhase/${repoName}/main/my-app/src/assets/exampleimage.jpg`;
}

app.get('/projects', async (req, res) => {
    res.set({"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":true});
    var ProjectList = await getProjectList();
    console.log(ProjectList);
    res.send(ProjectList.data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})