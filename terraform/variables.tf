variable "domain_name" {
  description = "The domain name for the website"
  type        = string
  default     = "ayyappasannidhi.org"
}

variable "s3_bucket_name" {
  description = "S3 bucket name"
  type        = string
  default     = "ayyappasannidhi.org"
}

variable "hosted_zone_id" {
  description = "Route 53 hosted zone ID"
  type        = string
  default     = "Z10120513M1Z2K7FI1YMG"
}