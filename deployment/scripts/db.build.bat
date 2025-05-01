echo "Building the docker file"
docker build -f deployment/db/Dockerfile -t unitflix-db .
echo "Tagging the docker file"
docker tag unitflix-db:latest asimwattoo/unitflix-db:latest
echo "Pushing the docker file"
docker push asimwattoo/unitflix-db:latest