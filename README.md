# Tutorial
Tutorial
# Hướng dẫn cài đặt và sử dụng :
Sử dụng git

-- Thiết lập người dùng địa chỉ:
$ git config --global user.name <username>
$ git config --global user.email <mailaddress>

-- Tạo file .git :
git init

-- Kiểm tra kết nối :
git remote -v

-- Kết nối (nếu chưa có) visual studio code
git remote add origin ...(ví dụ: git remote add origin https://github.com/HuuAns/Tutorial.git )

-- clone code
git clone ... (ví dụ: git clone https://github.com/HuuAns/Tutorial.git )

-- kiểm tra sự thay đổi:
git status
-- push code

git add. 
git commit -m"..."
git push   (main) /  git push origin master (master)

-- pull code (đồng bộ sự thay đổi của code trên git với code cũ trên máy)
git pull

Cài project reactjs

npx create-next-app

Cài netjs :

$ npm i -g @nestjs/cli
$ nest new project-name

