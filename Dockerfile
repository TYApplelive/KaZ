# 使用官方 Node.js 镜像
FROM node:23

# 设置工作目录
WORKDIR /workspace/Kaz

# 启用 Corepack 并安装指定版本的 Yarn
RUN corepack enable && corepack prepare yarn@4.7.0 --activate

# 复制项目文件
COPY . .

# 安装依赖
RUN yarn install --immutable

# 安装 Vue CLI（作为开发依赖）
RUN yarn add @vue/cli --dev

# 暴露端口
EXPOSE 8081

# 设置默认命令为交互式 Bash Shell
CMD ["bash"]