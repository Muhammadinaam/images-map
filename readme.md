There are two folders:
a. app (Ionic app)
b. backend (Laravel Project)

-----------------------------

Instructions:

- Clone Repo: git clone https://github.com/Muhammadinaam/images-map.git
- Open file app\src\app\server-info.ts. Update server url.
- open cmd in app and run command "npm install" to install packages. Then run command "ionic cordova build android" to build apk file.
- create mysql database: imagesapp (check .env file)
- Open backend and run following commands 
       "composer install" 
       "php artisan passport:install"
       "php artisan migrate"

- Run following query in mysql:
       "update oauth_clients set secret = 'zK2ECyamxjwA3lq6V2lX9fnaNoZD8XMe6KRe0gAk' where id = 2";

