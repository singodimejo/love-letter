const lovelettercopy = document.getElementById('lovelettercopy');
const dropbutton = document.getElementById('dropbtn');

dropbutton.addEventListener('click', () => {

    if (lovelettercopy.innerHTML === "" ) {
        lovelettercopy.innerHTML = `<p>You came into my life in the most unlikely place, and at an unlikely time. There's a lot of things that I've loved about you, and it's a growing list ever since I met you. Here are some examples.</p>
            <p>I love the wonderful chat we'll have over great cinematic pieces that you recommended to me. I love our little late night adventures when sleep wasn't really a problem for any of us. I love the many expressions and emotions that your honest face can make. I love your wide range of music taste which evolves to even the genre you once didn't appreciate. I love the high standards you have on food coupled with your humility to try anything I recommend. I love our seemingly excessive phone calls cause how much you'd miss me. I love your annoying habit of negotiating the minutes of every date just so you can be with me for another minute. I love the memes you send me in twitter. I love the giggle you'd do whenever you try to tell an obvious lie. I love your cheap sense of humor and your love of awkward comedy. I love every little trivia about your past, especially your weird history with head accessories. I love how thoughtful your gifts can be and how wonderful your little gestures of affection. I love how vulnerable you can be around me and how vulnerable I can be around you. I love your appetite for the food I cook and how honest you are at judging them. I love how much love Zendaya and how much you want to have skin as glowing as her. I love watching you do your skin care routine to the point where I can list almost every step. I love how you sometimes take company in Stephanie Soo's videos while you eat. I love how much you're always curious in reading scary stories to the point where you scare yourself before bed. I love how much you adore cats and treat them like family. I love how much collectibles you have, from a TARDIS miniature, an anime action figure, various novels, and a lot of K-pop albums.</p>
            <p>All of that is just a few examples of what it means whenever I say I love you, even in our weird way of saying it.</p>
            <p>Every aspect of our relationship, even the arguments and painful moments, are all so wonderful because I get to go through all of it with you.</p>
            <p>You are the perfect amalgamation of everything I've been missing in my life. The pieces that compliments and complete me.</p>
            <p>Bear all of that in mind whenever you hear me express my feelings for you.</p>
            <p>Because that is a fraction of what I mean when I say the words,</p>`;
        dropbutton.style.transform = 'rotate(180deg)'
        return
    } else {
        lovelettercopy.innerHTML = "";
        dropbutton.style.transform = "rotate(0deg)"
        return
    }
});

