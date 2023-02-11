FROM node:19-alpine3.16

# WORKDIR /

# RUN cd src/ProjectsService 
# RUN npm install
# RUN cd 

CMD ["node","src/ProjectsService/ProjectsService.js"]
