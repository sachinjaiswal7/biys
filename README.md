# BIYS - Believe In Your Self

A motivational website built with React, themed around self-belief and personal growth.

🌐 **Live at:** [biys.co.in](https://biys.co.in)

## 🎨 Features

- **Inspiring Hero Section** - Animated landing with motivational messaging
- **About Section** - Explains the BIYS philosophy
- **Quote Carousel** - Rotating inspirational quotes
- **Six Principles** - Core principles of self-belief
- **Call to Action** - Daily affirmation section
- **Responsive Design** - Works on all devices
- **White & Light Blue Theme** - Clean, calming color palette

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will run at `http://localhost:3000`

### Production Build

```bash
npm run build
```

## 🐳 Docker

### Build Docker Image

```bash
docker build -t biys-website .
```

### Run Container Locally

```bash
docker run -p 8080:8080 biys-website
```

Access the app at `http://localhost:8080`

## ☁️ AWS App Runner Deployment

### Option 1: Deploy from Container Image

1. **Push to ECR:**
   ```bash
   # Authenticate Docker to ECR
   aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
   
   # Create repository
   aws ecr create-repository --repository-name biys-website
   
   # Tag and push
   docker tag biys-website:latest <account-id>.dkr.ecr.<region>.amazonaws.com/biys-website:latest
   docker push <account-id>.dkr.ecr.<region>.amazonaws.com/biys-website:latest
   ```

2. **Create App Runner Service:**
   - Go to AWS App Runner Console
   - Click "Create service"
   - Source: Container registry → Amazon ECR
   - Select your repository and image
   - Port: `8080`
   - Health check path: `/health`
   - Deploy!

### Option 2: Deploy from Source Code

1. Push code to GitHub
2. In App Runner, choose "Source code repository"
3. Connect your GitHub account
4. Select repository and branch
5. Build settings:
   - Runtime: `Nodejs 18`
   - Build command: `npm install && npm run build`
   - Start command: `npx serve -s build -l 8080`
   - Port: `8080`

## 📁 Project Structure

```
biys/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Quotes.js & Quotes.css
│   │   ├── Principles.js & Principles.css
│   │   ├── CallToAction.js & CallToAction.css
│   │   └── Footer.js & Footer.css
│   ├── App.js & App.css
│   ├── index.js & index.css
├── Dockerfile
├── nginx.conf
├── .dockerignore
└── package.json
```

## 🎨 Color Theme

- **Primary:** Light Blue (`#87CEEB`, `#5DADE2`)
- **Background:** White (`#FFFFFF`)
- **Accent variations:** `#38bdf8` to `#0369a1`

## 📄 License

© 2026 BIYS - Believe In Your Self. All rights reserved.

---

*"Believe you can and you're halfway there." - Theodore Roosevelt*
