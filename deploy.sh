#!/usr/bin/env sh

yarn docs:build

cd docs/.vuepress/dist

git init 
git add -A
git commit -m"deploy"

git push -f git@github.com:longhaoxuan/longhaoxuan.github.io.git master

scp /* root@along96.com:/opt/along/public/longhaoxuan