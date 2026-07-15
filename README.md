# ATSERVER

[atserver186.jp](https://atserver186.jp)

## 依存関係のインストール
`node.js`と`npm`が開発用PCに入っていることを確認してください。
次のコマンドを使って、必要なパッケージを取得します。
```
npm i
```

## 開発サーバを建てる
通常は`http://localhost:5173`に開発サーバを建てられます。
```
npm run dev
```
ウィンドウを開く場合は
```
npm run dev -- --open
```

## 本番環境での動かし方
開発用にビルドするには
```
npm run build
```
し、本番サーバを起動するには
```
cd build
npm start
```
です。
