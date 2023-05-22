//==================================
//配列の基本と参照
//==================================

//配列を宣言
products_sample1 = [
    {name:"からあげ", price:"470", create_at:"2023-04-04"},
    {name:"串だんご", price:"220", create_at:"2023-04-08"},
    {name:"チャーハン", price:"450", create_at:"2023-04-14"},
    {name:"アジフライ", price:"190", create_at:"2023-04-22"},
];

//productsの内容を参照する
console.log("//===== productsの内容を参照する =====//");
console.log(products_sample1);
console.log("//===== productsの内容を参照する =====//");

//アジフライの値段を参照する
console.log("//===== アジフライの値段を参照する =====//");
console.log(products_sample1[3].price);
console.log("//===== アジフライの値段を参照する =====//");

//==================================
//最後に要素を追加する
//==================================

//配列を宣言
products_sample2 = [
    {name:"からあげ", price:"470", create_at:"2023-04-04"},
    {name:"串だんご", price:"220", create_at:"2023-04-08"},
    {name:"チャーハン", price:"450", create_at:"2023-04-14"},
    {name:"アジフライ", price:"190", create_at:"2023-04-22"},
];

const addData = {name:"幕内弁当", price:"640", create_at:"2023-04-24"};
products_sample2.push(addData);

console.log("//===== 最後に要素を追加する =====//");
console.log(products_sample2);
console.log("//===== 最後に要素を追加する =====//");

//==================================
//反復操作で配列を新たに生成する
//==================================

//配列を宣言
products_sample3 = [
    {name:"からあげ", price:"470", create_at:"2023-04-04"},
    {name:"串だんご", price:"220", create_at:"2023-04-08"},
    {name:"チャーハン", price:"450", create_at:"2023-04-14"},
    {name:"アジフライ", price:"190", create_at:"2023-04-22"},
];

/**
 * 日付のフォーマット変換
 * @param date "YYYY-MM-DD"
 * @return "YYYY年MM月DD日"
 */

function dateFormat(date){
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}年${dateObj.getMonth()}月${dateObj.getDate()}日`
}

const edited_products_sample3 = products_sample3.map((product) => {
    return {
        name: product.name,
        price: `${product.price}円`,
        create_at: dateFormat(product.create_at),
    }
});

console.log("//===== 反復操作で配列を新たに生成する =====//");
console.log(edited_products_sample3);
console.log("//===== 反復操作で配列を新たに生成する =====//");
