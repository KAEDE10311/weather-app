# 天気アプリ

React + TypeScript + OpenWeatherMap APIを使った天気アプリです。

## デモ

[こちらから確認できます](https://weather-app-xi-seven-76.vercel.app/)

## 機能

- 都市名で天気を検索
- 現在の気温・天気・アイコンを表示
- 検索履歴を表示（最大5件）
- Enterキーで検索
- 入力バリデーション
- ローディング表示

## 使用技術

- React
- TypeScript
- Tailwind CSS
- Axios
- OpenWeatherMap API
- Vercel（デプロイ）

## 使い方

都市名を英語で入力して検索ボタンを押してください。

例：Tokyo、Osaka、London

## セットアップ

\`\`\`bash
git clone https://github.com/KAEDE10311/weather-app.git
cd weather-app
npm install
\`\`\`

`.env.local`ファイルを作成してAPIキーを設定してください。

\`\`\`
REACT_APP_WEATHER_API_KEY= APIキー
\`\`\`

\`\`\`bash
npm start
\`\`\`