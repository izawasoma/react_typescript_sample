# JavaScriptの基礎の復習

## 01 event

javascriptで「ボタンをクリックした時にxxを行う」というような処理を定義する方法で代表的な例は以下の２つでしょう。特にこの後行うreactの学習では２つ目の「onclickプロパティ」で要素とイベントを紐づける方法が重要になってきますのでしっかり押さえておいてください。

```HTML
<button type="button" id="button1">addEventListener!!</button>
```

に対して、addEventListenerでイベントを設定するには

```js
const elemButton1 = document.getElementById("button1");
elemButton1.addEventListener("click",function(){
    handlerClick1();
});
```

上記のように`document.getElementById("button1")`で要素を取得して、`addEventListener`でイベントと要素を紐付けます。

一方で、

```HTML
<button type="button" onclick="handlerClick2()">onclick!!</button>
```

のように`<button>`要素に対して、`onclick`を設定してあげることで、イベントと要素をより簡潔に結びつけることができます。

## 02 array

配列の操作に関して見ていきましょう。
配列の操作の中でも、Reactを扱う上で大切な機能をいくつか見ていきましょう。

### 配列に要素を追加する

PHPでは、要素を追加する時、以下のような書き方ができます。

```PHP
$data = ["りんご","みかん","ぶどう"];
$data[] = "ばなな";
```

上記のような書き方を実現するには以下のように書きます。

```JavaScript

products_sample2 = [
    {name:"からあげ", price:"470", create_at:"2023-04-04"},
    {name:"串だんご", price:"220", create_at:"2023-04-08"},
    {name:"チャーハン", price:"450", create_at:"2023-04-14"},
    {name:"アジフライ", price:"190", create_at:"2023-04-22"},
];

const addData = {name:"幕内弁当", price:"640", create_at:"2023-04-24"};
products_sample2.push(addData);

```

### 配列に反復操作を適応する

配列に反復操作を適応する時、`for`や`array.forEach`がありますが、Reactでもっとも大切なのは`array.map`です。

```JavaScript
const array = [2,4,3,5,1];
const doubled_array = array.map((num) => {
    return num * 2;
});

console.log(doubled_array);
//[4,8,6,10,2]
```

foreachで、これと同じ処理を書きたい場合、以下のように書きます。

```JavaScript
const array = [2,4,3,5,1];
const doubled_array = [];
array.forEach((num) => {
    doubled_array.push(num * 2);
});

console.log(doubled_array);
```

上記のようにも書けますが、`array.forEach`は単に「配列の回数だけ処理を回す」のに対して、`array.map`は「配列の回数処理を回して、新しい配列を返す」というので大きな差があります。

ちなみに、Reactでは要素をループで回す際に、公式がmapを推奨しているので重要度を上げました。

## 03 モジュール

PHPでは`require_once`、Javaでは`import`、Node.jsでは`require`というようにソースコードをファイル単位で分割して管理や保守をしやすくすることは大切です。JavaScriptに`import`,`export`があります。

書き方は以下の通りです。

```JacaScript
export 宣言した要素
```

宣言なので変数をexportする時は`export const 変数名 = xx`ですし、関数ならば`export function 関数名 (){ /* ... */ }`、クラスならば、`export class クラス名 { /* ... */ }`の形で書き出しします。

・data/cubes.js

```JavaScript
export const cubes = [
    {height:10, width:10, depth:10},
    {height:2,  width:3,  depth:2 },
    {height:4 , width:4 , depth:2 },
    {height:3 , width:3 , depth:3 },
    {height:1 , width:11, depth:5 },
    {height:5 , width:2 , depth:5 },
    {height:5 , width:5 , depth:5 },
];
```

・class/Cube.js

```JavaScript
export class Cube{
    /* ... */
}
```

これらを実行ファイルなどで読み込むためには次のように記述します。

```
import {宣言名,宣言名} from "ファイルパス";
```

この時、宣言名には出力ファイルに書いた「変数名」「関数名」「クラス名」を記述するようにします。

```JavaScript
import { Cube } from "./class/Cube.js";
import { cubes } from "./data/cubes.js";
```

このように、「変数名」「関数名」「クラス名」を指定して出力・読み込みを行う方法を「名前付きimport」「名前付きexport」と言います。

一方で「デフォルトimport」「デフォルトexport」がありますが、僕は嫌いですので割愛します（なるべくチーム制作でも使わないで欲しいです）。

```JavaScript
export default function() {
    console.log("hello js !!!");
}
```

```JavaScript
import {helloFunction} from "function/hello";
```

デフォルトで出力するときは1つのファイルにつき1関数・クラス・変数までです。
そのため、読み込む時に好きに名前をつけて読み込めてしまいます。これが、ソースコードの読みづらさの温床になるのでやめていただきたいです。