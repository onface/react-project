#!/bin/bash
svn co https://svn.duapp.com/appidda1vdfz59m --username yourusername --password yourpassword
cd ./appidda1vdfz59m
svn update
cd ../
cpy 'view/**/*.html' '../appidda1vdfz59m'  --cwd=output --parents
cd ./appidda1vdfz59m
svn add * --force
svn commit -m "sync file"
rm -rf ./appidda1vdfz59m