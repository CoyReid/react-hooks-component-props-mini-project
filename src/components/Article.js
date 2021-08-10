import React from "react";

function addEmojis(minutes) {
    let emojis = "";
    try {
        if (minutes < 30) {
            let coffeesNR = minutes / 5;
            let coffeesR = Math.ceil(coffeesNR);
            for (let i = 0; i < coffeesR; i++) {
                emojis += "☕️";
            };
        } else {
            let bentosNR = minutes / 10;
            let bentosR = Math.ceil(bentosNR);
            for (let i = 0; i < bentosR; i++) {
                emojis += "🍱";
            };
        };
    } catch {
        console.log("error between lines 5-17 in Article.js")
    };
    return emojis;
}

function Article({title, date = "January 1, 1970", preview, minutes}) {
    const emojis = addEmojis(minutes);
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojis} {minutes} Mins</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;



    
    
// if (minutes <= 5) {
//     emojis = "☕️"
// } else if (minutes > 5 && minutes <= 10) {
//     emojis = "☕️☕️"
// } else if (minutes > 10 && minutes <= 15) {
//     emojis = "☕️☕️☕️"
// } else if (minutes > 15 && minutes <= 20) {
//     emojis = "☕️☕️☕️☕️"
// } else if (minutes > 20 && minutes <= 25) {
//     emojis = "☕️☕️☕️☕️☕️"
// } else if (minutes > 25 && minutes <= 30) {
//     emojis = "☕️☕️☕️☕️☕️☕️"
// } else if (minutes > 30 && minutes <= 40) {
//     emojis = "🍱🍱🍱🍱"
// } else if (minutes > 40 && minutes <= 50) {
//     emojis = "🍱🍱🍱🍱🍱"
// } else if (minutes > 50 && minutes <= 60) {
//     emojis = "🍱🍱🍱🍱🍱🍱"
// } else if (minutes > 60 && minutes <= 70) {
//     emojis = "🍱🍱🍱🍱🍱🍱🍱"
// }
// return emojis;