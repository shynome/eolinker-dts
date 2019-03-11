### 简介

从 `eolinker` 的数据中生成 `.d.ts` 文件

**注意:** 暂时没有用户鉴权

### 部署

- 在数据库中添加一个新用户 `eolinker_api` , 只添加 eolinker datebase 的 select 权限
- 使用 `docker` 进行部署: 
  ```sh
  docker run -d --restart always \
    --name eolinker_dts \
    -e DB_HOST='' \
    -e DB_DATABASE='' \
    -e DB_USER='' \
    -e DB_PASS='' \
    -p 8080:80 \
    fevergroup/eolinker-gen-dts
  ```
- 在浏览器打开对应地址, 如: http://192.168.31.8:8080 , 就可以看到所有项目的接口文件了
