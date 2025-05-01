kubectl apply -f deployment/k8s/db/db-pv.yaml
kubectl apply -f deployment/k8s/db/db-config.yaml
kubectl apply -f deployment/k8s/db/db-secrets.yaml
kubectl apply -f deployment/k8s/db/db-deployment.yaml

kubectl apply -f deployment/k8s/backend/backend-pv.yaml
kubectl apply -f deployment/k8s/backend/backend-config.yaml
kubectl apply -f deployment/k8s/backend/backend-secrets.yaml
kubectl apply -f deployment/k8s/backend/backend-deployment.yaml

kubectl apply -f deployment/k8s/frontend/frontend-deployment.yaml

kubectl apply -f deployment/k8s/ingress.yaml