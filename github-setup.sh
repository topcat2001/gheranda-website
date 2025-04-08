#!/bin/bash

echo "=== GitHub Repository Setup for Gheranda Website ==="
echo "This script will help you create a GitHub repository and push your code."
echo ""

echo "Step 1: Create a new repository on GitHub"
echo "Go to: https://github.com/new"
echo "Repository name: gheranda-website"
echo "Description: Official website for Gheranda Institute"
echo "Make it Public"
echo "Do NOT initialize with README, .gitignore, or license"
echo "Click 'Create repository'"
echo ""
echo "After creating the repository, press Enter to continue..."
read

echo "Step 2: Push your local repository to GitHub"
echo "Running: git push -u origin main"
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "Success! Your code has been pushed to GitHub."
  echo "Repository URL: https://github.com/topcat2001/gheranda-website"
  echo ""
  echo "Step 3: Connect to Netlify"
  echo "Go to: https://app.netlify.com/start"
  echo "Click 'Deploy with GitHub'"
  echo "Select the 'gheranda-website' repository"
  echo "Follow the prompts to deploy your site"
  echo "In the site settings, you can connect your custom domain: www.gheranda.com"
else
  echo ""
  echo "There was an error pushing to GitHub."
  echo "Please make sure you've created the repository on GitHub and try again."
fi
