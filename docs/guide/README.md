---
sidebar: auto
---

# 入门指南

> CleverWeb 即敏捷的Web，可能是最符合中国国情的首个前后端结合的项目。项目只包含基本的用户，菜单，和权限控制，可用于CMS 等后台管理端的快速成型。


## 项目概要

项目第一条：不重复造轮子！市面上存在多个后端管理系统，前后端分离的、普通 thymeleaf 的、以及最基础的jQuery 等等，功能基本相同，互有利弊。

项目采用前后端架构分离但结构结合的设计，前端使用 `vue`、`element-ui` 后端使用`spring-boot`，前端使用 panJiaChen 大神的 [vue-element-admin](github.com/panJiaChen/vue-element-admin) 项目，提供基础vue框架结构，采用 Git SubTree 模式同步更新项目修复BUG 。后端使用 `spring-boot` 全家桶，前后端使用 `JWT` 方式加密认证。同时，受[jhipster](https://www.jhipster.tech/) 项目启发，使用基于maven的插件实现前后段结构结合。


- jhipster

> Jhipster是一个生成、开发和部署的开发平台 Spring Boot + Angular/React Web 应用 and Spring 微服务. 
> - 服务器端使用Spring Boot的高性能健壮Java堆栈
> - 时尚, 现代化, 移动优先 前端Angular, React and Bootstrap
> - 一个强大的微服务架构，包含jhipster注册表、Netflix OSS、弹性堆栈和Docker
> - 使用Yeoman、Webpack和Maven/Gradle构建应用程序的强大工作流


- 站在巨人肩上

项目使用`git subtree` 同步更新前端代码。既保证原项目仓库代码的更新，也能实现本项目个性化设置。

```bash
git subtree pull -P src/main/webapp git@github.com:PanJiaChen/vue-element-admin.git i18n --squash
```

## New Features:

- [ ] 自动生成模板时候，根据类型生成不同的元素

## 运行项目

### 基础环境

- jdk8+
- maven
- node（npm）可不安装，但注意保持和pom配置版本一致

### 基于maven运行(推荐)

1. 进入项目根目录 `mvn clean install`
2. 项目打包 `mvn clean package -X -DskipTests`
3. 运行 `java -jar target/xxxx.jar`

### 使用 IntellJ IDEA 运行（建议安装 node）

1. 以普通maven项目导入项目
2. 添加 SpringBoot 项目运行方式运行后端项目（默认使用H2数据库）
3. 命令行进入项目根目录，`npm install`
4. 运行 `npm run dev`，可进入开发模式

**注意后端项目使用`8080`端口，前端项目使用`9527`端口，使用`9527`端口可实现页面动态**

### 打包

- 以普通jar文件方式

运行 `mvn clean pageage -X -DskipTests` ,将前后端项目同时打包运行（推荐！！！不需要另行配置nginx代理）。

- 以docker方式

docker run


## package.json 配置

- postcss 代替根目录下的 .postcssrc.js

```json
{
  "postcss": { 
    "plugins": {
      "autoprefixer": {}
    }
  }
}
```
