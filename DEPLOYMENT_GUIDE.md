# 🚀 Deployment Guide

This guide will help you deploy Sai Lasya Mynampati's portfolio to both **Vercel** and **GitHub Pages**.

## 📋 Prerequisites

- Node.js (v14 or higher)
- Git installed
- GitHub account
- Vercel account (free)

## 🌐 Option 1: Deploy to Vercel (Recommended)

Vercel offers the best performance and easiest deployment for React applications.

### Step 1: Prepare Your Project

1. **Ensure your project is ready**
   ```bash
   npm install
   npm run build
   ```

2. **Test the build locally**
   ```bash
   npx serve -s build
   ```

### Step 2: Deploy via Vercel Website (Easiest)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure project settings:**
   - Project Name: `sai-lasya-mynampati-portfolio`
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. **Click "Deploy"**

### Step 3: Deploy via Vercel CLI (Advanced)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Step 4: Custom Domain (Optional)

1. **In Vercel Dashboard**, go to your project
2. **Go to Settings > Domains**
3. **Add your custom domain**
4. **Update DNS records** as instructed

---

## 🐙 Option 2: Deploy to GitHub Pages

### Step 1: Prepare Repository

1. **Create a new repository** on GitHub:
   - Repository name: `Lasya_Portfolio` or `your-portfolio`
   - Make it **Public** (required for free GitHub Pages)

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Lasya_Portfolio.git
   git push -u origin main
   ```

### Step 2: Configure for GitHub Pages

1. **Update package.json** (add homepage):
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/Lasya_Portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

### Step 3: Deploy

1. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

### Step 4: Access Your Site

Your site will be available at:
`https://YOUR_USERNAME.github.io/Lasya_Portfolio`

---

## 🔄 Automated Deployment with GitHub Actions

The project includes a GitHub Actions workflow that automatically deploys to both platforms when you push to the main branch.

### Setup GitHub Secrets

1. **Go to your repository** > Settings > Secrets and variables > Actions

2. **Add these secrets:**
   - `VERCEL_TOKEN`: Get from [Vercel Account Settings](https://vercel.com/account/tokens)
   - `ORG_ID`: Get from Vercel project settings
   - `PROJECT_ID`: Get from Vercel project settings

3. **The workflow will automatically:**
   - Run tests
   - Build the project
   - Deploy to GitHub Pages
   - Deploy to Vercel

---

## 🛠️ Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **GitHub Pages 404 Error**
   - Check if `homepage` in package.json is correct
   - Ensure repository is public
   - Wait 5-10 minutes for deployment

3. **Vercel Build Error**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in package.json
   - Check Node.js version compatibility

### Performance Optimization

1. **Image Optimization**
   - Compress images before adding to project
   - Use WebP format when possible
   - Add proper alt tags

2. **Bundle Analysis**
   ```bash
   npm run build:analyze
   ```

3. **SEO Check**
   - Verify meta tags are loading
   - Test with Google PageSpeed Insights
   - Check mobile responsiveness

---

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional)

1. **Create Google Analytics account**
2. **Add tracking code to public/index.html**
3. **Monitor traffic and performance**

### Performance Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **GitHub Pages**: Use Google Analytics or similar tools

---

## 🔒 Security Best Practices

1. **Environment Variables**
   - Never commit API keys or secrets
   - Use Vercel environment variables for sensitive data

2. **HTTPS**
   - Both platforms provide HTTPS by default
   - Ensure all external resources use HTTPS

3. **Content Security Policy**
   - Configured in vercel.json
   - Helps prevent XSS attacks

---

## 📞 Support

If you encounter any issues:

1. **Check the documentation:**
   - [Vercel Docs](https://vercel.com/docs)
   - [GitHub Pages Docs](https://docs.github.com/en/pages)

2. **Contact:**
   - Email: mynampatisailasya@gmail.com
   - GitHub Issues: [Create an issue](https://github.com/harsha0013/Lasya_Portfolio/issues)

---

## ✅ Deployment Checklist

- [ ] Project builds successfully (`npm run build`)
- [ ] All images have alt tags
- [ ] SEO meta tags are configured
- [ ] Responsive design tested
- [ ] Contact form works (if applicable)
- [ ] All links are functional
- [ ] Performance optimized
- [ ] Domain configured (if using custom domain)
- [ ] Analytics setup (optional)
- [ ] Backup of code in version control

---

**🎉 Congratulations! Your portfolio is now live and accessible to the world!** 