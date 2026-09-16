::: {align="center"}
# 🚀 Smart Study Cloud

### AI-Powered Cloud Study Planner for Chrome & Edge

**Turn study material into a personalized learning plan using AWS +
Generative AI.**

[![AWS](https://img.shields.io/badge/AWS-Cloud-orange?logo=amazon-aws)](https://aws.amazon.com/)
[![Amazon
Bedrock](https://img.shields.io/badge/Amazon%20Bedrock-Generative%20AI-purple)](https://aws.amazon.com/bedrock/)
[![Chrome
Extension](https://img.shields.io/badge/Browser-Chrome%20%7C%20Edge-blue?logo=googlechrome)](https://developer.chrome.com/docs/extensions/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![AWS
Lambda](https://img.shields.io/badge/AWS-Lambda-orange?logo=awslambda)](https://aws.amazon.com/lambda/)
[![DynamoDB](https://img.shields.io/badge/AWS-DynamoDB-blue?logo=amazondynamodb)](https://aws.amazon.com/dynamodb/)

**[⭐ View
Repository](https://github.com/sudhanshugaurav05/Smart-Study-Cloud-Extension)**
:::

------------------------------------------------------------------------

## ✨ What is Smart Study Cloud?

**Smart Study Cloud** is a cloud-based browser extension designed to
help students organize learning material and build personalized study
plans.

The idea is simple:

> **Upload → Understand → Plan → Track**

A student provides a PDF, subject, and available study time. The
extension sends the request to an AWS backend, where cloud services
handle storage, processing, AI analysis, and study-plan data.

------------------------------------------------------------------------

## 🧠 Core Workflow

``` mermaid
flowchart LR
    A["👨‍🎓 Student"] --> B["🌐 Chrome / Edge Extension"]
    B --> C["🔐 API Gateway"]
    C --> D["⚡ AWS Lambda"]

    D --> E["🗂️ Amazon S3"]
    D --> F["🤖 Amazon Bedrock"]
    D --> G["🗄️ DynamoDB"]

    E --> F
    F --> G
    G --> H["📊 Study Dashboard"]
    H --> I["🔔 Progress & Reminders"]

    style A fill:#1e293b,stroke:#38bdf8,color:#fff
    style B fill:#172554,stroke:#60a5fa,color:#fff
    style C fill:#312e81,stroke:#818cf8,color:#fff
    style D fill:#3b0764,stroke:#c084fc,color:#fff
    style E fill:#064e3b,stroke:#34d399,color:#fff
    style F fill:#164e63,stroke:#22d3ee,color:#fff
    style G fill:#4c1d95,stroke:#a78bfa,color:#fff
    style H fill:#1e3a8a,stroke:#60a5fa,color:#fff
    style I fill:#134e4a,stroke:#2dd4bf,color:#fff
```

GitHub supports Mermaid diagrams directly inside Markdown files, so the
workflow above renders on the repository page.

------------------------------------------------------------------------

## 🖼️ Architecture Overview

![Smart Study Cloud Workflow](assets/smart-study-cloud-workflow.png)

------------------------------------------------------------------------

## ☁️ AWS Architecture

  Layer      Technology                Purpose
  ---------- ------------------------- --------------------------------------------
  Browser    Chrome / Edge Extension   Student-facing interface
  API        Amazon API Gateway        Receives HTTPS requests
  Compute    AWS Lambda                Serverless request processing
  Storage    Amazon S3                 Stores uploaded study material
  AI         Amazon Bedrock            Content analysis and study-plan generation
  Database   Amazon DynamoDB           Stores plans and progress
  Frontend   HTML, CSS, JavaScript     Extension UI

------------------------------------------------------------------------

## 🎯 Key Features

-   📄 PDF study-material upload
-   ☁️ Cloud-based document storage
-   🤖 AI-assisted topic extraction
-   🗓️ Personalized study-plan generation
-   ⏱️ Study-time based planning
-   📈 Progress tracking foundation
-   🔔 Reminder-ready architecture
-   🔐 Serverless AWS architecture
-   🌐 Chrome/Edge browser extension
-   📦 Modular architecture for future AI features

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

-   HTML5
-   CSS3
-   JavaScript
-   Chrome/Edge Manifest V3

### AWS

-   Amazon S3
-   AWS Lambda
-   Amazon API Gateway
-   Amazon DynamoDB
-   Amazon Bedrock

### Development

-   Git
-   GitHub
-   AWS Management Console

------------------------------------------------------------------------

## 📁 Project Structure

``` text
Smart-Study-Cloud-Extension/
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
│
├── assets/
│   └── smart-study-cloud-workflow.png
│
├── README.md
└── .gitignore
```

------------------------------------------------------------------------

## 🚀 Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/sudhanshugaurav05/Smart-Study-Cloud-Extension.git
cd Smart-Study-Cloud-Extension
```

### 2. Open Chrome Extensions

Go to:

``` text
chrome://extensions
```

### 3. Enable Developer Mode

Turn on **Developer mode**.

### 4. Load the extension

Choose:

``` text
Load unpacked
```

Then select:

``` text
Smart-Study-Cloud-Extension/extension
```

### 5. Configure the API endpoint

Open:

``` text
extension/popup.js
```

Set your API Gateway endpoint:

``` javascript
const API_URL = "YOUR_API_GATEWAY_URL/upload";
```

Do not commit private credentials, access keys, secret keys, or other
sensitive AWS information to GitHub.

------------------------------------------------------------------------

## 🔄 Request Flow

``` text
Student
   │
   ▼
Chrome / Edge Extension
   │
   │ HTTPS POST
   ▼
Amazon API Gateway
   │
   ▼
AWS Lambda
   │
   ├──────────────► Amazon S3
   │                  │
   │                  └── Study Material
   │
   ├──────────────► Amazon Bedrock
   │                  │
   │                  └── Topics + Study Plan
   │
   └──────────────► DynamoDB
                      │
                      └── Plan + Progress
```

------------------------------------------------------------------------

## 🔐 Security Notes

For learning and prototyping, the project may use broad AWS permissions
during setup.

For production deployment, replace broad permissions with
**least-privilege IAM policies** scoped to:

-   Required S3 bucket/actions
-   Required DynamoDB table/actions
-   Required Bedrock invocation actions
-   Required Lambda execution permissions

Never place AWS access keys or secret credentials inside the browser
extension.

------------------------------------------------------------------------

## 📌 Current Development Status

  Component              Status
  ---------------------- ----------------
  Browser Extension UI   ✅
  PDF Selection          ✅
  S3 Integration         ✅
  Lambda                 ✅
  API Gateway            ✅
  DynamoDB Table         ✅
  Bedrock Integration    🔄 In progress
  AI Study Plan          🔄 In progress
  Progress Dashboard     🔄 Planned
  Automated Reminders    🔄 Planned

> **Note:** Amazon Bedrock availability depends on AWS account/model
> authorization and regional quotas.

------------------------------------------------------------------------

## 🔮 Future Improvements

-   🌐 Analyze the current webpage
-   📝 Generate summaries
-   ❓ AI-generated quizzes
-   📅 Calendar-based study scheduling
-   🔔 Smart daily reminders
-   📊 Learning analytics
-   🎯 Weak-topic detection
-   📚 Multiple subject support
-   🧠 Adaptive study plans

------------------------------------------------------------------------

## 💡 Why I Built This

Students often have plenty of study material but struggle to turn it
into a practical daily plan.

Smart Study Cloud explores how **cloud computing + serverless
architecture + generative AI** can be combined to make that process more
structured and personalized.

------------------------------------------------------------------------

## 👨‍💻 Author

**Sudhanshu Gaurav**

MCA --- Cloud Computing

Interested in:

`Cloud Computing` · `AWS` · `DevOps` · `Generative AI` ·
`Software Development`

------------------------------------------------------------------------

## ⭐ Support

If you find the project interesting, consider giving the repository a
⭐.

**Repository:**\
https://github.com/sudhanshugaurav05/Smart-Study-Cloud-Extension

------------------------------------------------------------------------


### ☁️ Learn Smarter. Plan Better. Build with Cloud.

**AWS + Generative AI + Browser Extension**

