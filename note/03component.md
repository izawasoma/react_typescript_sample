# React02:コンポーネント

## はじめに

この章ではコンポーネントに関して学んでいきます。
Reactの機能の中でも最も基本的で理解すべき重要事項なので、疑問点がないくらいにマスターしてください。

## 記述・編集するファイル

```
[編集] src/pages/Home.tsx
[編集] src/pages/Sample01.tsx
[新規] src/components/ex1/Title.tsx
[新規] src/components/ex1/Profile.tsx
```

src配下にcomponentsフォルダを新規作成してください。
また、作成したcomponentsフォルダ内にex1フォルダを作成してください。

### src/pages/Home.tsx

```TypeScript:src/pages/Home.tsx
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <p>これはHomeです</p>
      <ul>
        <li><Link to={`/sample/1`}>サンプル01:コンポーネントの基本</Link></li>
        <li><Link to={`/sample/2`}>サンプル02:近日追加</Link></li>
      </ul>
    </>
  )
}
```

### src/pages/Sample01.tsx

```TypeScript:src/pages/Sample01.tsx
import { Link } from "react-router-dom";
import { Profile } from "./../componts/ex1/Profile";
import { Title } from "./../componts/ex1/Title";

export const Sample01 = () => {
  return (
    <>
      <h1>01.コンポーネントの基本</h1>
      <Title></Title>
      <Profile></Profile>
      <Link to={`/`}>Homeに戻る</Link>
    </>
  )
}
```

### src/components/ex1/Title.tsx

```TypeScript:src/components/ex1/Title.tsx
export const Title = () => {
    const title :string = "プロフィール一覧";
    const discription :string = "各ユーザーのプロフィールを表示します";

    return (
        <>
            <h1>{ title }</h1>
            <p>{ discription }</p>
        </>
    );
}
```

### src/components/ex1/Profile.tsx

```TypeScript:src/components/ex1/Profile.tsx
import { Fragment } from "react";

export const Profile = () => {
  type ProfileData = {
    title:String,
    contents:String,
  }

  const name :string = "上杉康二";
  const profiles :Array<ProfileData> = [
    {title:"年齢", contents:"43歳"},
    {title:"性別", contents:"男性"},
    {title:"趣味", contents:"スキー"},
    {title:"職業", contents:"会社員"},
  ];

  return (
    <section>
      <h2>{ name }</h2>
      <dl>
        { profiles.map((profile,index)=>
          <Fragment key={ index }>
            <dt>{ profile.title }</dt>
            <dl>{ profile.contents }</dl>
          </Fragment>
        )}
      </dl>
    </section>
  );
}
```

## 要点解説

### Reactにおけるコンポーネントとは？

ReactはWebサイトを構成するページやパーツを切り出した部品の事です。
「入力フォーム」や「ボタン」「モーダル」などのページを構成する要素を抜き出したものもコンポーネントですし、
「入力フォーム」と「ボタン」を包括して作成した「フォームブロック」もコンポーネントとなります。
さらに、「フォームブロック」「タイトルブロック」「ヘッダーブロック」を包括した「ページ全体」も一つのコンポーネントとなります。

つまり、大小様々な単位でコンポーネントは存在するということです。

### 関数型コンポーネントの書き方

コンポーネントの定義の方法は関数型とクラス型の２種類が存在します。
クラス型は現在使われることがなくなったので、関数型の定義方法を押さえるだけでOKです。

```JavaScript
export const ComponentName = () => {

  /** JSの処理やイベントを記述していく */

  return (

    /** 見た目の部分にあたるHTML要素やコンポーネントを配置していく */

  )
}
```

上記の形が基本形です。`return()`より前のブロックには変数の定義や処理・イベントなどといったJavaScriptのソースコード。`return()`内にはHTML要素やコンポーネント要素が記述されます。


```TypeScript:src/components/ex1/Title.tsx
export const Title = () => {
    const title :string = "プロフィール一覧";
    const discription :string = "各ユーザーのプロフィールを表示します";

    return (
        <>
            <h1>{ title }</h1>
            <p>{ discription }</p>
        </>
    );
}
```

Titleコンポーネントは最もシンプルで直感的に理解しやすいコンポーネントです。
`title`,`discription`という変数の定義を`return()`の外側で行い、`return()`内で`<h1></h1>`,`<p></p>`といったパーツを配置しています。

### 変数を展開する

PHPでは`<?php echo $text ?>` , Laravelでは`{{ $text }}` , Nodeのejsであれば`<?= ?>`に当たる変数をHTML要素ないで展開する記述がReactでは`{ $text }`になります。

### フラグメント

Reactで返すパーツは常に何かしらの親ブロックで１括り（くくり）になっている必要があります。
例えば以下のような形です（最上階の要素はdivのみ）

```JavaScript
export const Ex = () => {
  return (
    <div>
      <h1>良い例</h1>
      <p>これはコンポーネントの一例です</p>
    </div>
  )
}
```

一方、以下のような形はエラーになります。
（h1とpと最上階の要素が２つ以上存在する）

```JavaScript
export const Ex = () => {
  return (
    <h1>悪い例</h1>
    <p>これはコンポーネントの一例です</p>
  )
}
```

ただ、必ず何かでラッパー（囲う）する必要があるのは少々不便です。
そのため、代表する親要素が存在しない場合、以下のように仮のタグを使うことで実際のHTMLにタグの出力を回避することができます。


```JavaScript
export const Ex = () => {
  return (
    <>
      <h1>悪い例</h1>
      <p>これはコンポーネントの一例です</p>
    </>
  )
}
```

### 繰り返し出力

例えば、PHPではHTMLを繰り返し出力するには以下のような記述を行います。

```PHP
$array = ["りんご","みかん","ぶどう"];
```

```HTML
<ul>
  <?php foreach($array as $fluit): ?>
    <li><?php echo $fluit ; ?></li>
  <?php endforeach; ?>
</ul>
```

このようにデータを繰り返しHTMLで出力する方法に関してみていきましょう。
ReactではJavaScriptの標準メソッド`array.map()`を利用します。

```JavaScript
export const Ex2 = () => {
  return (
    <ul>
      { array.map(fluit,index)=> 
        <li key={index}>{ fluit }</li>
      }
    </ul>
  )
}
```

```JavaScript
export const Ex2 = () => {

  const array = ["りんご","みかん","ぶどう"];

  return (
    <ul>
      { array.map(fluit,index)=> 
        <li key={index}>{ fluit }</li>
      }
    </ul>
  )
}
```

この時、mapが包括する最上階の要素には`key`プロパティにindexを付与する必要があります（付与しないとエラーになります。）

もしも、最上階要素が2つ以上ある場合、フラグメントを用いると解決できます。
なお、先ほど登場したフラグメントは簡略式のもので`key`プロパティをサポートしていません。
よって、mapとフラグメントを組み合わせて使いたい場合、以下の簡略式でないものを使ってください。

```TypeScript:src/components/ex1/Profile.tsx
import { Fragment } from "react";

export const Profile = () => {
  type ProfileData = {
    title:String,
    contents:String,
  }

  const name :string = "上杉康二";
  const profiles :Array<ProfileData> = [
    {title:"年齢", contents:"43歳"},
    {title:"性別", contents:"男性"},
    {title:"趣味", contents:"スキー"},
    {title:"職業", contents:"会社員"},
  ];

  return (
    <section>
      <h2>{ name }</h2>
      <dl>
        { profiles.map((profile,index)=>
          <Fragment key={ index }>
            <dt>{ profile.title }</dt>
            <dl>{ profile.contents }</dl>
          </Fragment>
        )}
      </dl>
    </section>
  );
}
```

### コンポーネントのimportとexport

コンポーネントはパーツであり、コンポーネントを組み合わせてできたブロックやページもコンポーネントであると記述しましたが、その例を今回の写経を通して確認することで、この章の最後の確認としましょう。

```TypeScript:src/pages/Sample01.tsx
import { Link } from "react-router-dom";
import { Profile } from "./../componts/ex1/Profile";
import { Title } from "./../componts/ex1/Title";

export const Sample01 = () => {
  return (
    <>
      <h1>01.コンポーネントの基本</h1>
      <Title></Title>
      <Profile></Profile>
      <Link to={`/`}>Homeに戻る</Link>
    </>
  )
}
```

作成したパーツを組み合わせて一つのページとしているのが`src/pages/Sample01.tsx`です。
このページではHTMLには存在しない`<Title></Title>`,`<Profile></Profile>`,`<Link to={`/`}>Homeに戻る</Link>`という３つのタグが存在しています。そのうち２つは自分で先ほど定義した関数コンポーネントです。

このようにReactでは、自分で定義したコンポーネントやライブラリから取得したコンポーネントをimportで取得して組み合わせてゆくことでページやブロックを作成していきます。

もちろん、importするパーツはソース上ではexportされる必要があるので、`export const Title = () => {}`のようにしてコンポーネントを定義していくのです。

以上でこの章の学習内容は終了ですが、今回の章では、どのような流れでコンポーネントが呼び出され、情報が出力されるかを意識して学習して、マスターしてください。