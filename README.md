# ATSERVER

## プロジェクト概要
当プロジェクトは、既存のATSERVERホームページを動的から静的へ書き換えるものです。

[rewrite.atserver186.jp](https://rewrite.atserver186.jp)

## コミットルール
[Conventional Commits ( www.conventionalcommits.org/ja/v1.0.0/ )](https://www.conventionalcommits.org/ja/v1.0.0/)に基づきコミットを行います。

- 原文
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- 訳
```
<型>[任意 スコープ]: <タイトル>

[任意 本文]

[任意 フッター]
```

## 依存関係のインストール

`node.js`,`npm`,`pnpm`が開発用PCに入っていることを確認してください。
次のコマンドを使って、必要なパッケージを取得します。

```
pnpm install
```

## 開発サーバを建てる

通常は`http://localhost:5173`に開発サーバを建てられます。

```
pnpm run dev
```

ウィンドウを開く場合は`--open`を付けます。

## 本番環境での動かし方

ビルド

```
pnpm run build
```

ビルドが完了したら、`/build`内のファイルをApachやnginxなどのウェブサーバーにデプロイします。