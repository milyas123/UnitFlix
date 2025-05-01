echo "Building the docker file"
docker build -f deployment/db/Dockerfile -t unitflix-db .