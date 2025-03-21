## 开发环境

### 使用Docker构建开发环境

docker-compose.yml文件

```yml
# 用于构建项目Docker开发环境
services:
  linux_redis:
    image: redis
    container_name: linux_redis
    volumes:
      - redis-data:/data
    networks:
      - linux_network

  linux_mongodb:
    image: mongo
    container_name: linux_mongodb
    volumes:
      - mongo-data:/data/db
    networks:
      - linux_network

  linux:
    image: applelive/linux_custom_node23 # 使用applelive/linux_custom_node23开发环境容器镜像
    container_name: linux
    depends_on:
      - linux_redis
      - linux_mongodb
    working_dir: /Kaz
    networks:
      - linux_network
    volumes:
      - linux-data:/Kaz
    ports:
      - '8001:8001'
    command: >
      sh -c "
        sleep infinity
      "
networks:
  linux_network:
    driver: bridge
volumes:
  redis-data:
    driver: local
    driver_opts:
      type: none
      device: ./datas/redis-data # 指定 redis-data 的存储路径
      o: bind
  mongo-data:
    driver: local
    driver_opts:
      type: none
      device: ./datas/mongo-data # 指定 mongo-data 的存储路径
      o: bind
  linux-data:
    driver: local
    driver_opts:
      type: none
      device: ./Kaz # 指定 linux-data 的存储路径
      o: bind
```

## 上传镜像

`cd ./Kaz`

`docker build applelive/kaz:v0 .`

`docker login`

`docker push

## 部署使用

### docker部署(Windows)

1. 新建项目文件夹 project_kaz
2. 新建docker-compose.yml文件

   ```yml
   # docker构建项目运行环境
   services:
     linux_redis:
       image: redis
       container_name: linux_redis
       volumes:
         - redis-data:/data
       networks:
         - linux_network

     linux_mongodb:
       image: mongo
       container_name: linux_mongodb
       volumes:
         - mongo-data:/data/db
       networks:
         - linux_network

     linux:
       image: applelive/kaz:latest
       container_name: linux
       depends_on:
         - linux_redis
         - linux_mongodb
       working_dir: /Kaz
       networks:
         - linux_network
       ports:
         - '8001:8001'
       command: >
         sh -c "
           corepack enable &&
           yarn &&
           yarn dev:web &&
           sleep infinity
         "
   networks:
     linux_network:
       driver: bridge
   volumes:
     redis-data:
       driver: local
       driver_opts:
         type: none
         device: ./datas/redis-data # 指定 redis-data 的存储路径
         o: bind
     mongo-data:
       driver: local
       driver_opts:
         type: none
         device: ./datas/mongo-data # 指定 mongo-data 的存储路径
         o: bind
   ```

3. 运行docker-compose文件

   `docker-compose up -d`

4. 浏览器打开(默认)

   `http://localhost:8001/`
