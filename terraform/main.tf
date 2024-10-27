resource "aws_s3_bucket" "website" {
  bucket = var.s3_bucket_name
  website {
    index_document = "index.html"
    error_document = "error.html"
  }
  # Set the ownership configuration
  object_ownership = "BucketOwnerEnforced"
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

resource "aws_route53_record" "www" {
  zone_id = var.hosted_zone_id
  name     = var.domain_name
  type     = "A"

  alias {
    name                   = aws_s3_bucket.website.website_endpoint
    zone_id                = aws_s3_bucket.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "root" {
  zone_id = var.hosted_zone_id
  name     = ""
  type     = "A"

  alias {
    name                   = aws_s3_bucket.website.website_endpoint
    zone_id                = aws_s3_bucket.website.hosted_zone_id
    evaluate_target_health = false
  }
}