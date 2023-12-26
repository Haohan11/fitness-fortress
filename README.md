# 健身堡壘 Fitness Fortress

## 關於健身堡壘
- 健身堡壘為 **資展國際 ISpan 前端工程師就業養成班 MFEE36 第四組** 共同製作之期末專題，是一個複合式電子商務健身房網站。
- 使用技術: NextJS, React, HTML, CSS, Material UI, R3F, NodeJS, Express, MySQL。

## 關於此倉儲
- 健身堡壘已經過 Docker 容器化並推送至 Docker Hub，僅需要 [docker-compose.yaml](docker-compose.yaml) 與 [sql/](sql/) 資料夾內資源即可執行，並不依靠本倉儲其餘的程式碼。
- 本倉儲並非完整健身堡壘程式碼，僅包含我個人負責並撰寫的部分:
    + [首頁](frontend_NextJS/pages/home/index.js)、[導覽列](frontend_NextJS/components/layout/navbar.js)、[課程輪播牆](frontend_NextJS/components/lesson/banner.js)、[課程列表](frontend_NextJS/pages/lesson/index.js)、[系列課程](frontend_NextJS/pages/lesson/[id].js)、[教練列表](frontend_NextJS/pages/coach/index.js)、[教練個人](frontend_NextJS/pages/coach/[id].js)、[教練編輯](frontend_NextJS/pages/coach/edit.js)
    + [共用 Material UI 客製元件](frontend_NextJS/components/customUI) 與 [Color Theme](frontend_NextJS/context/Theme) 以及其[使用文件](frontend_NextJS/CustomLayout&CUI.md)。
    + [城牆背景元件](frontend_NextJS/components/brick-wallpaper.js)、[城牆樣式工具函式](frontend_NextJS/libs/getBrickBackground.js)、[Material UI 響應式設計工具函式 CreateBreakPointTheme](frontend_NextJS/libs/CreateBreakPointTheme.js)。
    + [課程資料讀取 API](backend_NodeJS/routes/lesson.js)、[教練資料讀取與修改圖片上傳 API](backend_NodeJS/routes/coach.js)

## 瀏覽健身堡壘

### 使用 Docker 
1. ``git pull`` 此專案 ( 必要資源: [docker-compose.yaml](docker-compose.yaml)、[sql/](sql/) )
2. 執行 ``docker compose up`` 
3. 訪問 [localhost:3000](http://localhost:3000) 進行瀏覽
4. 使用以下資料登入:
    + 教練帳號: mail84574@test.com
    - 一般會員帳號: mail64106@test.com
    - 密碼: test1234

### 觀看展示影片
- https://youtu.be/pFGHlowBGCA

