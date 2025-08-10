@echo off
setlocal

echo ===== Building React App =====
npm run build

if %errorlevel% neq 0 (
  echo Build failed. Exiting.
  exit /b %errorlevel%
)

cd build

echo ===== Initializing Git =====
git init

echo ===== Setting Remote =====
git remote remove origin 2>nul
git remote add origin https://github.com/nazaratamaniuk/WebResume.git

echo ===== Switching to gh-pages branch =====
git checkout -b gh-pages

echo ===== Committing build =====
git add .
git commit -m "Auto deploy"

echo ===== Pushing to gh-pages =====
git push -f origin gh-pages

cd ..

echo ===== Done! Site will be available shortly at =====
echo https://nazaratamaniuk.github.io/WebResume/
pause
