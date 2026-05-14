# AWS S3 Static Portfolio Website Deployment using GitHub Actions

## Overview
This project demonstrates the deployment of a static portfolio website on AWS S3 using GitHub Actions for CI/CD automation.

The website is built using HTML, CSS, and JavaScript and is automatically deployed to an AWS S3 bucket whenever changes are pushed to the `main` branch.

A custom `error.html` page is also configured to handle unavailable routes or invalid URLs.

---

# Website Preview

## Portfolio Homepage

<img width="1901" height="898" alt="image" src="https://github.com/user-attachments/assets/22c05291-7de8-41b6-a862-78c181ce9b0d" />


---

## Custom Error Page

<img width="1918" height="892" alt="image" src="https://github.com/user-attachments/assets/c12cbe99-5451-4dfd-aab1-58cd314f0079" />

---

# Tech Stack

- HTML
- CSS
- JavaScript
- AWS S3
- GitHub Actions
- IAM
- YAML

---

# Features

- Static website hosting on AWS S3
- Automated CI/CD deployment pipeline
- GitHub Actions integration
- Custom error page handling
- Responsive portfolio website
- Secure AWS authentication using GitHub Secrets

---

# Project Structure

```bash
.
├── .github/
│   └── workflows/
│       └── ga_workflow.yml
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── portfolio-homepage.png
│   └── error-page.png
│
├── index.html
├── error.html
├── .gitignore
└── Readme.md
```

---

# AWS Services Used

## Amazon S3
Used for hosting the static website.

## IAM (Identity and Access Management)
Used for secure access between GitHub Actions and AWS.

---

# Setup Guide

Follow these steps to deploy your own static portfolio website using AWS S3 and GitHub Actions.

---

## Step 1: Create a Static Website

Create your website using:

- HTML
- CSS
- JavaScript

Files required:

```bash
index.html
error.html
style.css
script.js
```

---

## Step 2: Create an AWS S3 Bucket

1. Open AWS Console
2. Navigate to S3
3. Click "Create Bucket"
4. Enter a globally unique bucket name
5. Disable:
   - "Block all public access"
6. Create the bucket

---

## Step 3: Enable Static Website Hosting

Inside the bucket:

```text
Properties → Static Website Hosting
```

Enable:

- Static Website Hosting

Set:

| Field | Value |
|---|---|
| Index Document | index.html |
| Error Document | error.html |

Save changes.

---

# Custom Error Page

A custom `error.html` page is configured for better user experience whenever:

- A page does not exist
- Invalid URL is entered
- Website route is unavailable

---

## Step 4: Configure Bucket Policy

Go to:

```text
Permissions → Bucket Policy
```

Add public read access policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

Replace:

```bash
YOUR_BUCKET_NAME
```

with your actual S3 bucket name.

---

## Step 5: Create IAM User

1. Open IAM Console
2. Create a new IAM User
3. Enable:
   - Programmatic Access
4. Attach permission:
   - AmazonS3FullAccess

After creation, save:

- Access Key ID
- Secret Access Key

---

## Step 6: Push Project to GitHub

Initialize Git:

```bash
git init
```

Add remote repository:

```bash
git remote add origin YOUR_REPOSITORY_LINK
```

Push code:

```bash
git add .
git commit -m "Initial Portfolio Deployment"
git push origin main
```

---

## Step 7: Add GitHub Secrets

Open your GitHub repository:

```text
Repository → Settings → Secrets and Variables → Actions
```

Create the following secrets:

| Secret Name | Description |
|---|---|
| AWS_ACCESS_KEY_ID | AWS Access Key |
| AWS_SECRET_ACCESS_KEY | AWS Secret Key |

---

## Step 8: Configure GitHub Actions Workflow

Inside your project create:

```bash
.github/workflows/
```

Add workflow YAML file for automatic deployment.

Whenever code is pushed to the `main` branch, GitHub Actions will automatically upload the updated website files to AWS S3.

---

# CI/CD Workflow

```text
Developer Pushes Code
        ↓
GitHub Actions Triggered
        ↓
AWS Authentication
        ↓
Files Uploaded to S3
        ↓
Website Automatically Updated
```

---

# Website Endpoint

After enabling static website hosting, AWS generates a website endpoint.

Example:

```bash
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

---

# Learning Outcomes

Through this project, I learned:

- AWS S3 Static Website Hosting
- GitHub Actions CI/CD Automation
- IAM User Management
- Secure Cloud Deployment
- Git & GitHub Workflow
- Static Website Architecture
- Error Page Handling in S3

---

# Future Enhancements

- Add CloudFront CDN
- Configure HTTPS using ACM
- Add Custom Domain with Route53
- Infrastructure Automation using Terraform
- Monitoring using CloudWatch
- Dockerized Deployment Pipeline

---

# Author

## Dhruv Goel

- Software Engineer
- AWS Certified Cloud Practitioner
- DevOps & Cloud Enthusiast

GitHub:
https://github.com/dhruvgoe

---
