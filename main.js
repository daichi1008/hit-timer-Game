let count = 0;

// const confirmTime = document.getElementById(`confirmTime`)
// const startTimer = document.getElementById(`startTimer`)
// let intervalId

// 通常問題解答↓

// タイマースタート
// startTimer.addEventListener(`click`, function () {
//     // 連続クリック防止
//     startTimer.disabled = true;

//     const countUp = () => {
//         count++;
//         console.log(count)
//     }
//     intervalId = setInterval(() => {
//         countUp();
//         if (count > 40) {
//             count = 0
//             clearInterval(intervalId);
//             alert(`終了また挑戦してね`);
//             startTimer.disabled = false;
//         }
//     }, 1000);

// });

// confirmTime.addEventListener(`click`, function () {
//     //    スタートボタンを活性化
//     startTimer.disabled = false;
//     if (count < 20) {
//         alert(`まだ${count}...再スタートだ！`);
//     } else if (count > 20) {
//         alert(`もう${count}...再スタートだ！`);
//     } else {
//         alert(`大正解！`);
//     }
//     clearInterval(intervalId);
//     count = 0
// });


// 以下チャレンジ問題

const confirmTime2 = document.getElementById(`confirmTime2`)
const startTimer2 = document.getElementById(`startTimer2`)

let time;
let start_time;
let stop_time;

startTimer2.addEventListener(`click`, function () {
    confirmTime2.disabled = false;
    start_time = Date.now();
    console.log(start_time);
    startTimer2.disabled = true;

    const countUp = () => {
        count++;
        console.log(count)
    }
    intervalId = setInterval(() => {
        countUp();
        if (count > 40) {
            count = 0
            clearInterval(intervalId);
            alert(`終了また挑戦してね`);
            startTimer2.disabled = false;
            clearInterval(intervalId);
            count = 0
        }
    }, 1000);

});

confirmTime2.addEventListener(`click`, function () {
    startTimer2.disabled = false;
    stop_time = Date.now();
    time = stop_time - start_time;
    const time_min = Math.floor(time / 1000);
    console.log(time_min);

    if (time_min < 20) {
        alert(`まだ${time_min}...再スタートだ！`);
    } else if (time_min > 20) {
        alert(`もう${time_min}...再スタートだ！`);
    } else {
        alert(`大正解!!!`);
    }
    start_time = Date.now();
    clearInterval(intervalId);
    count = 0
});

// チャレンジ問題ここまで