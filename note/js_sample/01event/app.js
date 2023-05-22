//button1を押した時のイベント
const handlerClick1 = () => {
    const elemResult1 = document.getElementById("result1");
    elemResult1.textContent = "クリックしました！"
}

//button2を押した時のイベント
const handlerClick2 = () => {
    const elemResult2 = document.getElementById("result2");
    elemResult2.textContent = "クリックしました！"
}

//addEventListenerでイベントを設定
const elemButton1 = document.getElementById("button1");
elemButton1.addEventListener("click",function(){
    handlerClick1();
});


