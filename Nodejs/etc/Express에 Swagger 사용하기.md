# Express에 Swagger 사용하기

> API들이 가지고 있는 스펙(spec)을 명세, 관리할 수 있는 프로젝트이다. 협업을 진행하거나 이미 만들어져 있는 프로젝트에 대해 유지보수를 진행할 때, 구축되어 있는 API서버가 어떤 스펙을 가지고 있는지 파악하기 위하여 사용한다.



## Install

```bash
$ npm install --save-dev swagger-ui-express swagger-jsdoc
```



## Swagger Specification

> Swagger 명세서 관리

* `swaggerDoc.js`

  * 주의! swagger를 사용하는 api파일 위치를 정확히 지정해주지 않으면 에러가 발생한다.

  ```javascript
  module.exports = {
      swaggerDefinition: {
        // 정보
        info: {
          title: 'Swagger',
          version: '1.0.0',
          description: 'Shelter Project Swagger'
        },
        // 주소
        host: "localhost:3001",
        // 기본 root path
        basePath: "/",
        contact: {
          email: "dpwl7484@gmail.com"
        },
        // 각 api에서 설명을 기록할 때 사용할 constant들을 미리 등록해놓는것
        components: {
          res: {
            BadRequest: {
              description: '잘못된 요청입니다.',
              schema: {
                $ref: '#/components/errorResult/Error'
              }
            },
            Forbidden: {
              description: '권한이 없습니다.',
              schema: {
                $ref: '#/components/errorResult/Error'
              }
            },
            NotFound: {
              description: '없는 리소스 요청입니다.',
              schema: {
                $ref: '#/components/errorResult/Error'
              }
            }
          },
          errorResult: {
            Error: {
              type: 'object',
              properties: {
                errMsg: {
                  type: 'string',
                  description: '에러 메시지 전달.'
                }
              }
            }
          }
        },
        schemes: ["http", "https"], // 가능한 통신 방식
        // definitions:  // 모델 정의
        //   {
        //   }
      },
      apis: ['my-project-server/routes/*.js'] // api 파일 위치들
    };
  ```

  

## app.js

> Swagger UI를 추가한다.

```javascript
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOption = require('./swaggerDoc');
const swaggerSpec = swaggerJSDoc(swaggerOption);
app.use('/api-document', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

