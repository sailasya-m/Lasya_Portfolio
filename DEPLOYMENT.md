# Deploying Your Portfolio to GitHub Pages

## Prerequisites
- GitHub account
- Git installed on your computer
- Your portfolio code ready

## Step-by-Step Deployment Process

### 1. Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `Lasya_Portfolio` (or any name you prefer)
5. Make sure it's set to **Public** (required for free GitHub Pages)
6. Don't initialize with README since you already have code
7. Click "Create repository"

### 2. Initialize Git in Your Project (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### 3. Connect Your Local Repository to GitHub
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:
```bash
git remote add origin https://github.com/sailasya-m/Lasya_Portfolio.git
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages
Run the deployment command:
```bash
npm run deploy
```

This command will:
- Build your React app for production
- Create a `gh-pages` branch
- Push the built files to that branch
- GitHub Pages will automatically serve your site

### 5. Enable GitHub Pages (if needed)
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select branch: `gh-pages`
6. Select folder: `/ (root)`
7. Click "Save"

### 6. Access Your Live Website
Your website will be available at:
`https://sailasya-m.github.io/Lasya_Portfolio`

## Future Updates
Whenever you make changes to your portfolio:
1. Commit your changes: `git add . && git commit -m "Update portfolio"`
2. Push to main branch: `git push origin main`
3. Deploy updates: `npm run deploy`

## Troubleshooting
- If deployment fails, make sure you have push access to the repository
- Ensure your repository is public for free GitHub Pages
- Wait a few minutes after deployment for changes to appear
- Check the Actions tab in your GitHub repository for deployment status

## Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file to your `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the homepage URL in `package.json` 