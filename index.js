const lovelettercopy = document.getElementById('lovelettercopy');
const dropbutton = document.getElementById('dropbtn');
const icons = document.getElementsByClassName('icon');
const favecopy = document.getElementById('favecopy');

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

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', (e) => {
        if (e.target.id === 'cats') {
            favecopy.innerHTML = `<p>She loves cats. Her future plans and her past involves cats. I know she had taken care of and loved at least 5 cats in her life so far.</p>
            <p>Cito, The lovely white-furred friend that accompanied her time in Singapore. <br>
            Cimo and Buna, the cats that she loved so much and always welcomed her in Jakarta and spawned two more lovely little kittens, OJ and the other one (I forgot the name).</p>`;
            return
        } else if (e.target.id === 'movies') {
            favecopy.innerHTML = `<p>She's a nerd for movies. She loves watching film analysis on YouTube and She even has written several wonderfully written reviews of unique cinema herself. One of her aspirations is to become a film director. Her favorite directors includes but not limited to, Yorgos Lanthimos, Wes Anderson, Bong Joon Ho, and Quentin Tarantino.</p>
            <p>Side note - She has introduced me to so many beautiful cinematic pieces, including Midsommar, The Grand Budapest Hotel, Isle of Dogs, Inglorious Basterds, and a lot more. She introduced me to a whole new world of films.</p>`;
            return
        } else if (e.target.id === 'tv') {
            favecopy.innerHTML = `<p>She has quite the range in terms of taste for TV shows. From Fleabag, to American Horror Stories, to Parks and Recreation and Avatar: The Legend Of Korra. But all of her recommendations have been a wonderful exploration for me as well. Her love of cinema translates over to the world of TV shows as well.</p>
            <p>Fun Fact - our friendship and relationship in general started from the mutual interest of the TV show &quot;Stranger Things&quot;</p>`;
            return
        } else if (e.target.id === 'photo') {
            favecopy.innerHTML = `<p>Everyone who knows her would know that she has a talent and the good eye for photography. And they'd also know how much she love bringing her camera and framing beautiful scenes with that magical click. She even has her own "portofolio" Instagram account for those shots she's really proud of. But I'll let her shots talk more about this since A picture is worth 1000 words. <a href='https://www.instagram.com/dwima_production/' target='_blank'>Check her work here!</a></p>`;
            return
        } else {
            return
        };
    });
};