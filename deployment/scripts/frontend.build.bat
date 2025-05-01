echo "Building the docker file"
docker build -f deployment/frontend/Dockerfile --build-arg VITE_SERVER_URL="http://unitflix.localhost/backend" --build-arg VITE_SITE_KEY="6Le20oIqAAAAAAOa8E1_xxKPXyTc2NyGlVwZaXAV" -t unitflix-frontend .
echo "Tagging the docker file"
docker tag unitflix-frontend:latest asimwattoo/unitflix-frontend:latest
echo "Pushing the docker file"
docker push asimwattoo/unitflix-frontend:latest