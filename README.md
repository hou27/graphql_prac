# graphqlPrac
graphql practice repostiory

--06.30  
start with  

npm i graphql-yoga  
for easy setup  

import문을 사용하기 위해  
-npm install --save-dev @babel/cli, 
	"start": "nodemon --exec babel-node index.js"와 같이 스크립트 추가(수정),
	npm install babel-cli babel-preset-env babel-preset-stage-3 --save-dev  
-.babelrc 파일 생성  
 ㄴbabel을 위한 환경설정 파일  
 ㄴ필수 ::: "presets" : ["env", "stage-3"]  


Problems that can solve with graphql  
>over-fetching  
>under-fetching  

graphql can actually describe all the information that what I want on one query  