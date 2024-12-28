set -e

npm run build

cd dist

echo > .nojekyll

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:spratt/mausritter-online-sheet.git main:gh-pages

cd - 
