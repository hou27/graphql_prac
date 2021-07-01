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

Query 에 !가 붙으면 isRequired이다.  
ex)  
type Query {  
	name: String!  
}  

GraphpQL Resolvers는 GraphQl Server에서 요청을 받고,  
GraphpQL Server가 Query or Mutation의 정의를 발견하면,  
Resolver를 찾고, 해당 함수를 실행함.  

--07.01  
[open API](https://yts.mx/api)
[Movie List](https://yts.mx/api/v2/list_movies.json)  
https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=9  