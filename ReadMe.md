# GoHan

シンプルな UI/UX のランダムご飯選択アプリです。
ユーザーの位置情報に基づいて半径 3km 以内の飲食店が表示される仕様です。<br>
今後のアップデートで結果削除機能、UI/UX の向上、時間、値段、国籍などの条件を付けて検索できる機能を追加予定です。

## 作成理由

友人との食事や彼女とのデートで飲食店を決める時に迷う自分用に、勝手に飲食店を選んでくれるアプリを作りたいと考えました。

## 使い方

<br>

### ホーム画面

![ホーム画面](https://drive.google.com/uc?export=view&id=1wP5WeoKmmum-_h6nMbTob4r7XFR-6nZq)
<br>

### 結果画面

![結果画面](https://drive.google.com/uc?export=view&id=1pJjfrHHTSUwL5hF0KlAauEdcj3kyip6M)

## 仕用技術

- HTML/CSS
- Javascript
- React.js v17.0
- Firebase Hosting
- Node.js v15.11.0
- Express.js v4.17.1
- Webpack v5.44
- Babel v4.17.1
- Glitch (RestAPI サーバー)
- GAS (Glitch へ定期リクエスト送信)

## 機能一覧

- GeolocationAPI による位置情報取得
- ホットペッパー Web サービスを用いた飲食店情報取得
- Web Storage API による検索結果保存

## URL

https://gohan-location.web.app
