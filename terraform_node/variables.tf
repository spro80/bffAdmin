variable "acl_value" {
  default = "private"
}

#AWS VARIABLES
variable "aws_access_key" {
  default = "aws_access_key"
}

variable "aws_secret_key" {
  default = "l+FJ/aws_secret_key"
}

variable "region" {
  default = "us-east-1"
}


#Output Variables:
variable "config_ssh_username" {
  default = "ec2-user"
}

variable "config_ssh_key_path" {
  default = "/Users/daviddiaz/Desktop/BITBUCKET/TERRAFORM/terraform_key_pair_2023.pem"
}

variable "config_ssh_host" {
  default = "ec2-54-234-160-3.compute-1.amazonaws.com"
}

variable "config_protocol" {
  default = "ssh"
}
