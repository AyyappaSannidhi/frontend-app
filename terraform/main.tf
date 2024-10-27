# S3 Bucket for static website hosting
resource "aws_s3_bucket" "website" {
  bucket = var.s3_bucket_name
}

resource "aws_s3_bucket_versioning" "website_versioning" {
  bucket = aws_s3_bucket.website.id
  enabled = false
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

# Block Public Access settings for this bucket
resource "aws_s3_bucket_public_access_block" "public_access_block" {
  bucket                  = aws_s3_bucket.website.id
  block_public_acls      = false
  ignore_public_acls     = true
  block_public_policy     = false
}

resource "aws_route53_record" "www" {
  zone_id = var.hosted_zone_id
  name     = "www.${var.domain_name}"
  type     = "A"

  alias {
    name                   = aws_s3_bucket.website.website_endpoint
    zone_id                = aws_s3_bucket.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "root" {
  zone_id = var.hosted_zone_id
  name     = "${var.domain_name}"
  type     = "A"

  alias {
    name                   = aws_s3_bucket.website.website_endpoint
    zone_id                = aws_s3_bucket.website.hosted_zone_id
    evaluate_target_health = false
  }
}