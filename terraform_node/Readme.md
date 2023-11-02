terraform init
terraform validate
terraform plan -out=tfplan
terraform apply  --auto-approve tfplan
terraform destroy -auto-approve