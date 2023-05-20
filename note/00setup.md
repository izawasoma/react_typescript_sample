# セットアップとコマンド

## 開発環境を整える

開発環境を整えることから始めましょう。まずは、以下のコマンドをターミナルで実行して必要な環境が整っているかを確かめましょう。

1. Node.jsのバージョンが14.0.0以上であることを確認する

```shell
node -v
# v18.14.0
#上記バージョンと同じである必要はありません
```

2. npmのバージョンが5.6以上であることを確認する

```shell
npm -v
# 9.3.1
#上記バージョンと同じである必要はありません
```

3. typescriptがインストールされているかを確認する

```shell
tsc -v
# Version 5.0.4
#上記バージョンと同じである必要はありません
```

上記3点を確認したら、いよいよプロジェクトの作成をしていきましょう。

## プロジェクトの新規作成を行う

ターミナルにて以下のコマンドを実行して、プロジェクトファイルを作成します。
reactのプロジェクトはPHPのLaravelや、Node.jsのExpressのようにコマンドを実行することで、ある程度の整形が保たれたテンプレートの形を自動で生成してくれます。

```shell
# reactのみで開発する場合
npx create-react-app フォルダ名
# reactとtypescriptで開発を行う場合
npx create-react-app --template typescript フォルダ名
```

今回は、react+typescriptなので、以下を実行してください。

```shell
npx create-react-app --template typescript react_typescript_sample
```

実行にはネット環境が必要です。また、少し時間がかかるのでじっくり待ってください。
実行が完了すると以下のようなメッセージが表示されます

```shell
Success! Created react_typescript_sample at /Users/izawasoma/Desktop/react_typescript_sample
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd /Users/izawasoma/Desktop/react_typescript_sample
  npm start

Happy hacking!
```

`Happy hacking!`と表示されたらプロジェクトが生成されています。

## 起動する

1. vscodeで`[ファイル]>[フォルダを開く]`から先ほど作成した`react_typescript_sample`という名前のプロジェクトフォルダを探して開きます。
2. `[ターミナル]>[新規ターミナル]`でvscodeのターミナルを開きます。
3. 以下のコマンドを実行してください

```shell
npm start
```

4. 上記コマンドが起動コマンドになります。起動を停止するには[ctrl]+[c]を押します。`Edit src/App.tsx and save to reload.`と書かれたページ（http://localhost:3000/）が開けばこのセクションは終了です。