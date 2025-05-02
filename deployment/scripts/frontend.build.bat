echo "Building the docker file"
docker build -f deployment/frontend/Dockerfile --build-arg VITE_SERVER_URL="https://unitflix.com/backend" --build-arg VITE_SITE_KEY="6LfM14IqAAAAAE5j0K7limY5XtGOXk4cB0CqsJzi" -t unitflix-frontend .
echo "Tagging the docker file"
docker tag unitflix-frontend:latest asimwattoo/unitflix-frontend:latest
echo "Pushing the docker file"
docker push asimwattoo/unitflix-frontend:latest