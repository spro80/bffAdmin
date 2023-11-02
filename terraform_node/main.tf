provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region     = var.region
}

resource "aws_security_group" "security_group_access_ssh_bff" {
  name        = "security-group-access-ssh-bff"
  description = "Allow SSH access"
  #vpc_id      = aws_vpc.vpc_bff.id # Reemplaza con el ID de tu VPC

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "instance_micro_bff_admin" {
  ami           = "ami-01bc990364452ab3e"   # ID de la AMI AMAZON 3
  instance_type = "t2.micro"                # Tipo de instancia
  key_name      = "terraform_key_pair_2023" # Nombre de la clave SSH existente en tu cuenta de AWS

  vpc_security_group_ids = [aws_security_group.security_group_access_ssh_bff.id]
  #subnet_id              = aws_subnet.subnet_bff.id

  # Utiliza el ARN completo del perfil IAM en lugar del nombre
  #iam_instance_profile = aws_iam_role.ec2_role.arn

  tags = {
    Name   = "Microservice bff admin 2023"
    Team   = "Devops"
    Author = "David Spiro."
  }

  # Instala y configura awslogs
  #sudo yum install -y awslogs
  #echo '/var/log/messages  /var/log/awslogs.log' >> /etc/awslogs/awslogs.conf
  #systemctl start awslogsd
  #systemctl enable awslogsd

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo yum install -y git
              curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
              sudo yum install -y nodejs
              node -v
              npm -v
              cd /home/ec2-user
              git clone https://github.com/spro80/bffAdmin.git
              cd /home/ec2-user/bffAdmin/
              sudo npm install --force
              npm run local-country-cl
              EOF
}

output "public_ip" {
  value = aws_instance.instance_micro_bff_admin.public_ip
}

#ssh -i "terraform_key_pair_2023.pem" ec2-user@ec2-54-234-160-3.compute-1.amazonaws.com
output "ssh_connection" {
  value = {
    ssh = "${var.config_protocol} -i ${var.config_ssh_key_path} ${var.config_ssh_username}@${var.config_ssh_host}"
  }
}
