.gitignore

https://www.toptal.com/developers/gitignore/api/visualstudiocode,node

PS C:\Users\user\Documents\GitHub\nodejs_api_gyakorlatok> npm init -y

PS C:\Users\user\Documents\GitHub\str2-fullstack-sajat-munka\nodejs_api_gyakorlatok> npm install express 

PS C:\Users\user\Documents\GitHub\str2-fullstack-sajat-munka\nodejs_api_gyakorlatok> npm i

PS C:\Users\user\Documents\GitHub\str2-fullstack-sajat-munka\nodejs_api_gyakorlatok> node .\src\index.js 

package.json fájlban
 "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",


PS C:\Users\user\Documents\GitHub\str2-fullstack-sajat-munka\nodejs_api_gyakorlatok> npm start

TEST API
CREATE
fetch('http://localhost:3000/person', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({first_name:'Jack', last_name:'London', email: 'jl@gmail.com'})
}).then( r => r.json() )
.then( d => console.log(d) );

UPDATE
fetch('http://localhost:3000/person/6', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({first_name:'aa', last_name:'bb', email:'abcd@gmail.com'})
}).then( r => r.json() )
.then( d => console.log(d) );

DELETE
fetch('http://localhost:3000/person/6', {
    method: 'DELETE'
}).then( r => r.json() )
.then( d => console.log(d) );



PS C:\Users\user\Documents\GitHub\str2-fullstack-sajat-munka\nodejs_api\nodejs_api_komplett> npm i dotenv
