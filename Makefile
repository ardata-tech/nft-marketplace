build-local-frontend: 
    cd front-end
    npm i

build-local-backend: 
    cd backend
    npm i
	
build: 
	cd ./front-end && npm i
	cd ./front-end && npm i