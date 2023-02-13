#/bin/bash
#adds all files in folder to github elementtest7@gmail.com
git add *
read -p "git commit description: " desc
git commit -m "$desc"
git push origin main

