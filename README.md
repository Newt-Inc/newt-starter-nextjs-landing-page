<p align="center">
  <a href="https://www.newt.so/">
    <img src="https://user-images.githubusercontent.com/3859812/155490725-80ed1f06-996e-407f-8f63-fd54f0acaf14.svg" alt="Newt" width="70" height="57" />
  </a>
</p>
<h3 align="center">
Newt's starter
</h3>
<p align="center">
  <a href="https://newt-starter-nextjs-landing-page.vercel.app/">Demo</a> | <a href="https://www.newt.so/">Newt</a>
</p>

## 概要

[Newt](https://www.newt.so/) と [Next.js](https://nextjs.org/) を利用したランディングページです。<br />
[App Router](https://nextjs.org/docs/app) を用いて、ドキュメントサイトを作成してみたい方はぜひお試しください。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNewt-Inc%2Fnewt-starter-nextjs-landing-page)

## 開発をはじめる

### Step1: Newt スペースをセットアップ

1. スペースを作成します
   - スペース UID を控えておきましょう。スペース UID は 管理画面 URL（ `https://app.newt.so/{スペースUID}` ） もしくは スペース設定 > 一般 から確認できます。
2. App を作成します
   - Appを追加 > テンプレートから追加 から、**Landing page**を選んで「このテンプレートを追加」をクリックしてください。
   - AppUID を控えておきましょう。AppUID は管理画面 URL（ `https://app.newt.so/{スペースUID}/app/{AppUID}` ） または App 設定 > 一般 から確認できます。
3. スペース設定 > API キー から CDN API トークンを作成します

### Step2: .env.local ファイルを作成する

[.env.local.example](https://github.com/Newt-Inc/newt-starter-nextjs-landing-page/blob/main/.env.local.example) ファイルを参考に、`.env.local` ファイルを作成します。<br />
Step1 で取得したスペース UID・AppUID・CDN API トークンの値を設定します。

```conf
NEXT_PUBLIC_NEWT_SPACE_UID=スペースUID
NEXT_PUBLIC_NEWT_APP_UID=landing-page
NEXT_PUBLIC_NEWT_API_TOKEN=CDN APIトークン
NEXT_PUBLIC_NEWT_API_TYPE=cdn
NEXT_PUBLIC_NEWT_PAGE_MODEL_UID=landing-page
```

Next.js における環境変数の扱いについては、[公式ドキュメント](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)を参照してください。

### Step3: dev サーバーを起動する

Yarn を使う

```bash
# 依存パッケージをインストール
$ yarn install

# localhost:3000でdevサーバーを起動
$ yarn dev
```

npm を使う

```bash
# 依存パッケージをインストール
$ npm install

# localhost:3000でdevサーバーを起動
$ npm run dev
```

## ページの構成

| ページ | パス                                    | ファイル                                                                                                       |
| ------ | --------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| トップ | /<br />※ 詳細ページにリダイレクトします | [ソース](https://github.com/Newt-Inc/newt-starter-nextjs-landing-page/blob/main/app/page.ts)                   |
| 詳細   | /pages/page-1                           | [ソース](https://github.com/Newt-Inc/newt-starter-nextjs-landing-page/blob/main/app/pages/%5Bslug%5D/page.tsx) |

## モデルの定義

`Landing page` app の中に Page モデルを作ります。

| App 名（任意） | モデル名（モデル UID） |
| -------------- | ---------------------- |
| Landing page   | Page (`landing-page`)  |

### Page（`uid: landing-page`）モデル

| フィールド ID | フィールド名 | フィールドタイプ                | オプション                                                                                                                                                                                                                                                |
| ------------- | ------------ | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pageName      | ページ名     | テキスト                        | 必須フィールド<br />このフィールドをタイトルに使う                                                                                                                                                                                                        |
| slug          | スラッグ     | テキスト                        | 必須フィールド<br />一意の文字列（ユニーク）                                                                                                                                                                                                              |
| meta          | メタ情報     | カスタムフィールドタイプ `Meta` |                                                                                                                                                                                                                                                           |
| sections      | セクション   | マルチタイプ                    | 複数値<br />必須フィールド<br />使用できるフィールドタイプ<br />・ヒーローエリア<br />・ロゴエリア<br />・特徴エリア（画像フル）<br />・特徴エリア（画像右）<br />・特徴エリア（画像左）<br />・特徴エリア（3カラム）<br />・CTAエリア<br />・FAQエリア） |

### メタ情報（`id: Meta`）カスタムフィールドタイプ

| フィールド ID | フィールド名       | フィールドタイプ | オプション |
| ------------- | ------------------ | ---------------- | ---------- |
| title         | タイトル           | テキスト         |            |
| description   | ディスクリプション | テキスト         |            |
| ogImage       | OG 画像            | 画像             |            |

### ヒーローエリア（`id: Hero`）カスタムフィールドタイプ

| フィールド ID   | フィールド名     | フィールドタイプ                | オプション     |
| --------------- | ---------------- | ------------------------------- | -------------- |
| shoulderCopy    | ショルダーコピー | テキスト                        | 必須フィールド |
| titleCopy       | タイトルコピー   | テキスト                        | 必須フィールド |
| text            | テキスト         | テキスト                        |                |
| ctaButton       | CTA ボタン       | カスタムフィールドタイプ `Link` |                |
| backgroundImage | 背景画像         | 画像                            | 必須フィールド |

### ロゴエリア（`id: Logo`）カスタムフィールドタイプ

| フィールド ID | フィールド名 | フィールドタイプ | オプション                 |
| ------------- | ------------ | ---------------- | -------------------------- |
| text          | テキスト     | テキスト         |                            |
| logoImages    | ロゴ画像     | 画像             | 複数値<br />必須フィールド |

### 特徴エリア（画像フル）（`id: FeatureImageFull`）カスタムフィールドタイプ

| フィールド ID | フィールド名   | フィールドタイプ | オプション     |
| ------------- | -------------- | ---------------- | -------------- |
| titleCopy     | タイトルコピー | テキスト         | 必須フィールド |
| text          | テキスト       | テキスト         | 必須フィールド |
| image         | 画像           | 画像             | 必須フィールド |

### 特徴エリア（画像右）（`id: FeatureImageRight`）カスタムフィールドタイプ

| フィールド ID | フィールド名   | フィールドタイプ | オプション     |
| ------------- | -------------- | ---------------- | -------------- |
| titleCopy     | タイトルコピー | テキスト         | 必須フィールド |
| text          | テキスト       | テキスト         | 必須フィールド |
| image         | 画像           | 画像             | 必須フィールド |

### 特徴エリア（画像左）（`id: FeatureImageLeft`）カスタムフィールドタイプ

| フィールド ID | フィールド名   | フィールドタイプ | オプション     |
| ------------- | -------------- | ---------------- | -------------- |
| titleCopy     | タイトルコピー | テキスト         | 必須フィールド |
| text          | テキスト       | テキスト         | 必須フィールド |
| image         | 画像           | 画像             | 必須フィールド |

### 特徴アイテム（アイコン）（`id: FeatureIcon`）カスタムフィールドタイプ

| フィールド ID | フィールド名   | フィールドタイプ | オプション     |
| ------------- | -------------- | ---------------- | -------------- |
| iconImage     | アイコン画像   | 画像             | 必須フィールド |
| titleCopy     | タイトルコピー | テキスト         | 必須フィールド |
| text          | テキスト       | テキスト         | 必須フィールド |

### 特徴エリア（3 カラム）（`id: Features3Columns`）カスタムフィールドタイプ

| フィールド ID | フィールド名 | フィールドタイプ                       | オプション |
| ------------- | ------------ | -------------------------------------- | ---------- |
| features      | 特徴リスト   | カスタムフィールドタイプ `FeatureIcon` | 複数値     |

### CTA エリア（`id: CTA`）カスタムフィールドタイプ

| フィールド ID | フィールド名   | フィールドタイプ                | オプション     |
| ------------- | -------------- | ------------------------------- | -------------- |
| titleCopy     | タイトルコピー | テキスト                        | 必須フィールド |
| text          | テキスト       | テキスト                        |                |
| ctaButton     | CTA ボタン     | カスタムフィールドタイプ `Link` |                |

### リンク（`id: Link`）カスタムフィールドタイプ

| フィールド ID | フィールド名     | フィールドタイプ | オプション     |
| ------------- | ---------------- | ---------------- | -------------- |
| label         | ラベル           | テキスト         | 必須フィールド |
| url           | URL              | テキスト         | 必須フィールド |
| newTab        | 別タブとして開く | チェックボックス |                |

### Q&A アイテム（`id: Q&A`）カスタムフィールドタイプ

| フィールド ID | フィールド名 | フィールドタイプ | オプション     |
| ------------- | ------------ | ---------------- | -------------- |
| question      | 質問         | テキスト         | 必須フィールド |
| answer        | 回答         | テキスト         | 必須フィールド |

### FAQ エリア（`id: FAQ`）カスタムフィールドタイプ

| フィールド ID | フィールド名   | フィールドタイプ               | オプション     |
| ------------- | -------------- | ------------------------------ | -------------- |
| titleCopy     | タイトルコピー | テキスト                       | 必須フィールド |
| items         | Q&A アイテム   | カスタムフィールドタイプ `Q&A` | 複数値         |

## License

[MIT License](https://github.com/Newt-Inc/newt-starter-nextjs-landing-page/blob/main/LICENSE)
