# React01:ルーティング

## はじめに

この章ではReactのルーティングに関して学んでいきます。
「ルーティング」とは、「localhost:3000/」ならば「Homeページ」を表示。「localhost:3000/login」ならば「ログインページ」を表示するといったように、あるURLに対して、あるページを表示するといった対応関係を持たせるものです。

## セットアップ

Reactでルーティングする方法は様々ありますが、今回は「React router dom」というパッケージを利用します。
このパッケージを使うことで難しいルーティングの処理を書かなくても、簡単にルーティングを実現することが可能になります。

1. vscodeを開き、「react_typescript_sample」フォルダを開きましょう。
2. 次に[ターミナル] > [新しいターミナル] を選択し、ターミナルを表示します。
3. 以下のコマンドを実行しましょう。

```
npm install --save react-router-dom
```

ちなみに、`--save`は、package.jsonにreact-router-domをインストールしたことを記述するオプションです。なんのことかわからなくても大丈夫です。

## 記述・編集するファイル

```
[編集] src/App.tsx
[新規] src/pages/Home.tsx
[新規] src/pages/Sample01.tsx
[新規] src/pages/Sample02.tsx
```

src配下にpagesフォルダを新規作成してください。

### src/pages/Home.tsx , src/pages/Sample01.tsx , src/pages/Sample02.tsx

```TypeScript:src/pages/Home.tsx
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <p>これはHomeです</p>
            <ul>
                <li><Link to={`/sample/1`}>サンプル01:近日追加</Link></li>
                <li><Link to={`/sample/2`}>サンプル02:近日追加</Link></li>
            </ul>
        </>
    )
}
```

```TypeScript:src/pages/Sample01.tsx
import { Link } from "react-router-dom";

export const Sample01 = () => {
    return (
        <>
            <h2>サンプル01</h2>
            <p>これはサンプル01のページです。</p>
            <Link to={`/`}>Homeに戻る</Link>
        </>
    )
}
```

```TypeScript:src/pages/Sample02.tsx
import { Link } from "react-router-dom";

export const Sample02 = () => {
    return (
        <>
            <h2>サンプル02</h2>
            <p>これはサンプル02のページです。</p>
            <Link to={`/`}>Homeに戻る</Link>
        </>
    )
}
```

各ページのコンテンツを作成していきます。
Reactのコンテンツの書き方に慣れていない方も、今は写経しておいてください。
後ほど説明します。

### src/App.tsx

```TypeScript:src/App.tsx
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sample01 } from "./pages/Sample01";
import { Sample02 } from "./pages/Sample02";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home></Home>}></Route>
        <Route path={`/sample/1`} element={<Sample01></Sample01>}></Route>
        <Route path={`/sample/2`} element={<Sample02></Sample02>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

`src/App.tsx`に関しては上記のように書き換えます。

## 要点の説明

### ルーティングの記述方法

あるURLにアクセスしたら、このページを表示するという記述は以下のように記述します。
今回はページ数も多くならないので、App.tsxに記述していますが、別ページに切り離して記述することもあります。

```TypeScript:src/App.tsx
<BrowserRouter>
  <Routes>
    <Route path={`/`} element={<Home></Home>}></Route>
    <Route path={`/sample/1`} element={<Sample01></Sample01>}></Route>
    <Route path={`/sample/2`} element={<Sample02></Sample02>}></Route>
  </Routes>
</BrowserRouter>
```

難しいことはほっておいて、まずは以下の形で定義していくのだと飲み込んでください。

```TypeScript
<BrowserRouter>
  <Routes>
    <Route path={`URL`} element={コンポーネント}></Route>
  </Routes>
</BrowserRouter>
```

コンポーネントってなんだって話ですが、これに関しても後ほどで。
今は、先に作成したpagesの各ソースだと思っておいていただけたらOKです。

また、BrowserRouter,Routes,Routeというルーティング定義に使う各パーツと、各ページの内容のパーツを扱うために各要素を読みこむ必要があります。そこで、import文も修正します。
Reactでは、HTMLに登場しないタグ（`<xx></xx>`の形のパーツ）がたくさん登場しますが、そういったパーツをソース内に記述したいときはimportを記述しないといけないことは、このセクションで慣れておいていいかと思います。

```TypeScript:src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sample01 } from "./pages/Sample01";
import { Sample02 } from "./pages/Sample02";
```

長々と書きましたが、とにかく、ルーティングを記述するときは「ルーティングに使うパーツ」「各ページのパーツ」を読み込んだ上で、上記に記した決まった書き方に従って定義していくことをおさえてください。

### リンクを記述する

react-router-domを使った場合、リンクタグは`<a>タグ`の代わりに`<Link>コンポーネント`を使用します。
コンポーネントに関しては後ほど説明するので、まずは書き方を図形のように形で覚えてください。
といってもそこまで複雑ではありません。

```TypeScript:src/pages/Sample01.tsx

import { Link } from "react-router-dom";

export const Sample01 = () => {
    return (
        <>
            <h2>サンプル01</h2>
            <p>これはサンプル01のページです。</p>
            <Link to={`/`}>Homeに戻る</Link>
        </>
    )
}

```

例えば、`/`に移動する「ホームに戻る」リンクを記述したいならば

```TypeScript
<Link to={`/`}>Homeに戻る</Link>
```

といったふうに記述します。
ただし、この`<Link>`というパーツも存在しないパーツなので、

```TypeScript
import { Link } from "react-router-dom";
```

importを用いて読み込んであげましょう。

### どこからimportするのか、ドキュメントを読むこと

今回登場した`<BrowserRouter>`,`<Routes>`,`<Route>`,`<Link>`はいずれもreact-router-domというパッケージが提供するパーツになるので`import { パーツ名 } from "react-router-dom";`といった書き方になります。

自分で好きなパッケージの好きなパーツを使いたい場合、適切なimportに関しての説明は各公式ドキュメントに書いているので調べてみてください。例えば、React-router-domのBrowserRouterに関しては以下のようなドキュメントで説明されています。今後、ReactやReactに付随する機能に関して、自分で調べる必要がある機会がたくさん出てくると思いますが、まずは自分で公式ドキュメントの記事は最低限読みに行くようにしましょう他のメンバーに質問するとき、「公式ドキュメントの〇〇の部分がわからない」と伝えるのと、「〇〇がわからない」と伝えるのでは、問題意識の共有の差も雲泥の差になります。

- [react-router-domのBrowserRouterの使い方](https://reactrouter.com/en/main/router-components/browser-router)