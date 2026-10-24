# 手話学習アプリ「あいうえお」

日本語の母音（あいうえお）の手話を学ぶためのシンプルなWebアプリです。

## デモ

https://nagata-minoru.github.io/sign-aiueo

## 機能

- あ・い・う・え・おの手話画像を順番に表示
- 「次へ」ボタンで次の文字へ切り替え

## 使い方

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開くと確認できます。

### ビルド

```bash
npm run build
```

`dist` フォルダにプロダクション用のファイルが生成されます。

### テスト

```bash
npm test
```

### lint

```bash
npm run lint
```

### GitHub Pages へのデプロイ

`main` ブランチに push すると、GitHub Actions がテストとビルドを行い、成功すれば GitHub Pages へ自動でデプロイします。

## 技術スタック

- React 19
- Vite
- Vitest + Testing Library
- ESLint
