kubectl delete -f deployment/k8s/db/db-config.yaml
kubectl delete -f deployment/k8s/db/db-secrets.yaml
kubectl delete -f deployment/k8s/db/db-deployment.yaml

kubectl delete -f deployment/k8s/backend/backend-config.yaml
kubectl delete -f deployment/k8s/backend/backend-secrets.yaml
kubectl delete -f deployment/k8s/backend/backend-deployment.yaml

kubectl delete -f deployment/k8s/frontend/frontend-deployment.yaml

kubectl delete -f deployment/k8s/ingress.yaml