variable "s3_bucket_name" {
  description = "S3 bucket name"
  type        = string
}

variable "allowed_ips" {
  description = "List of Allowed IP ranges"
  type        = list(string)
}
