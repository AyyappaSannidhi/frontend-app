# S3 Bucket for static website hosting
resource "aws_s3_bucket" "website" {
  bucket = var.s3_bucket_name
}

resource "aws_s3_bucket_versioning" "website_versioning" {
  bucket = aws_s3_bucket.website.id

  # Set the versioning status
  versioning_configuration {
    status = "Suspended"  # Use "Enabled" if you want versioning to be on
  }
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.website.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.website.arn}/*"
      }
    ]
  })
}


# Data source to check if the root record already exists
data "aws_route53_record" "root" {
  zone_id = var.hosted_zone_id
  name     = "${var.domain_name}"
  type     = "A"

  # This will only return a record if it exists
  depends_on = [aws_s3_bucket.website]
}

# Data source to check if the www record already exists
data "aws_route53_record" "www" {
  zone_id = var.hosted_zone_id
  name     = "www.${var.domain_name}"
  type     = "A"

  # This will only return a record if it exists
  depends_on = [aws_s3_bucket.website]
}

# Create the root Route 53 record only if it doesn't exist
resource "aws_route53_record" "root" {
  count = length(data.aws_route53_record.root) == 0 ? 1 : 0

  zone_id = var.hosted_zone_id
  name     = var.domain_name
  type     = "A"

  alias {
    name                   = aws_s3_bucket.website.website_endpoint
    zone_id                = aws_s3_bucket.website.hosted_zone_id
    evaluate_target_health = false
  }
}

# Create the www Route 53 record only if it doesn't exist
resource "aws_route53_record" "www" {
  count = length(data.aws_route53_record.www) == 0 ? 1 : 0

  zone_id = var.hosted_zone_id
  name     = "www.${var.domain_name}"
  type     = "A"

  alias {
    name                   = aws_s3_bucket.website.website_endpoint
    zone_id                = aws_s3_bucket.website.hosted_zone_id
    evaluate_target_health = false
  }
}