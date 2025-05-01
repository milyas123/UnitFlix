echo "Building the docker file"
docker build -f deployment/backend/Dockerfile -t unitflix-backend .
echo "Tagging the docker file"
docker tag unitflix-backend:latest asimwattoo/unitflix-backend:latest
echo "Pushing the docker file"
docker push asimwattoo/unitflix-backend:latest