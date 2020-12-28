# vue-vite-ts

## 初始化

```sh
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev
```

## 目录结构

![目录结构](/blog/vue-vite-ts/1.png)

## ts化

>傻掉之路开启

- 将`src/main.js`改成`src/main.ts`，然后`index.html` script标签中的文件名配套修改ts
- 将vue组件内的`<script>`改成`<script lang="ts">`
- 创建`.vue`的声明文件，不然ts不认识。`src/shims-vue.d.ts`,ts声明文件以`.d.ts`结尾标识

  ```ts

  ```