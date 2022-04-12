# lean https://www.youtube.com/watch?v=jotpVtFwYBk

# การตั้งชื่อควรตั้งตาม repo docker

docker build -t docker/gusgus-project-reactjs:dev .
docker build -f Dockderfile.prod -t docker/gusgus-project-reactjs:prod .

docker run --rm -d -p 3001:3000 --name gusgus-reactjs docker/gusgus-project-reactjs

docker run --rm -e CHOKIDAR_USEPOLLING=true -v ${PWD}\src:/app/src -d -p 3001:3000 --name gusgus-reactjs docker/gusgus-project-reactjs

docker run --rm -e CHOKIDAR_USEPOLLING=true -v ${PWD}\src:/app/src:ro -d -p 3001:3000 --name gusgus-reactjs docker/gusgus-project-reactjs

docker run --rm --env-file ./.env -v ${PWD}\src:/app/src -d -p 3001:3000 --name gusgus-reactjs docker/gusgus-project-reactjs

docker exec -it docker/gusgus-project-reactjs:dev bash

# prod

docker run --rm -d -p 8080:80 --name gusgus-reactjs-prod docker/gusgus-project-reactjs-prod

# docker-compose

docker-compose -f docker-compose.yml up -d
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d build
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build node-app
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build node-app --no-deps
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --force-recreate node-app --no-deps

# ลบ volume ทุกอันที่ไม่ได้ใช้งาน

docker volume prune

# ลบ volume ที่เกี่ยวกับ contrainer นี้

docker rm containername -fv

# ดู logs

docker logs containername-ps -f

# docker swam ใช้สำหรับทำ orchestra ต้องเซ็ต deploy replicas ก่อน

docker stack deploy -c docker-compose.yml -c docker-compose-prod.yml myapp

# docker watchtower ใช้สำหรับทำ auto deploy
