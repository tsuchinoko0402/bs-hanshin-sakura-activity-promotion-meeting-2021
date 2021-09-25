# ボーイスカウト阪神さくら地区活動振興大会 2021 公開用ページ

2021年9月26日（日）に開催予定だった[ボーイスカウト阪神さくら地区](https://www.bs-hanshin-sakura.org/)の2021年度活動振興大会の公開用ページです。
SDGs の 17 の目標をそれぞれ各団で研究し、その成果をまとめたものを掲載しています。

## 使用ツール

- Gatsby
  - スターターとして、[gatsby-starter-phantom](https://www.gatsbyjs.com/starters/anubhavsrivastava/gatsby-starter-phantom) を使用
- Node.js
  - 依存のライブラリの関係で、バージョンは 14 系統以下

## インストール方法 

```sh
yarn install
gatsby develop
```

## 設定方法

今回は、Web サーバーのサブディレクトリに公開するため、 `config.js` の `pathPrefix` をサブディレクトリ名を設定する。

## ビルド方法

上記で設定した `pathPrefix` を反映させるためには、 `gatsby build` コマンドに `--prefix-paths` を付与する必要がある。
`package.json` の `build` スクリプトには、上記オプションを設定済みなので、以下のコマンドでビルドする：

```shell
yarn build
```

## デプロイ方法

さくらインターネットのサーバーの所定の場所（今回は、 `www/activity-promotion-meeting-2021`）に FTP などでビルド結果の  `public` 配下の資源をすべて転送する。
