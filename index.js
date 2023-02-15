const { default: axios } = require("axios");

const newStories = 'https://hacker-news.firebaseio.com/v0/newstories.json';

const story = 'https://hacker-news.firebaseio.com/v0/item/';

const estrazione = (link) => {
    return axios.get(link).then(({data}) => data);
};

let section = document.querySelector("section");
let div = document.querySelector("div");

const dati = async () => {
    let dati = await estrazione(newStories);
    let number = 0;
    let number1 = 10;
    dati.slice(0, 10).map(async (id) => {
        const articoli = await estrazione(`${story}${id}.json`)
            const utcDate = (t) => new Date(t*=1000).toString().slice(0, 24);
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let a = document.createElement("a");
            let author = document.createElement("h4");
            let date = document.createElement("h4");
            div.id = "container";
            h3.id = "title";
            a.id = "link";
            author.id = "author";
            date.id = "date";
            section.appendChild(div);
            div.appendChild(h3);
            h3.appendChild(a);
            div.appendChild(author);
            div.appendChild(date);
            a.innerHTML = articoli.title;
            a.href = articoli.url;
            author.innerHTML = `Author: ${articoli.by}`;
            date.innerHTML = `Date: ${utcDate(articoli.time)}`;
    })
    let button = document.createElement("button");
    button.id = "button";
    div.appendChild(button);
    button.innerHTML = "Load More";
    button.onclick =  function () {
        number += 10;
        number1 += 10;
        dati.slice(number, number1).map(async (id) => {
            const articoli = await estrazione(`${story}${id}.json`)
            const utcDate = (t) => new Date(t*=1000).toString().slice(0, 24);
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let a = document.createElement("a");
            let author = document.createElement("h4");
            let date = document.createElement("h4");
            div.id = "container";
            h3.id = "title";
            a.id = "link";
            author.id = "author";
            date.id = "date";
            section.appendChild(div);
            div.appendChild(h3);
            h3.appendChild(a);
            div.appendChild(author);
            div.appendChild(date);
            a.innerHTML = articoli.title;
            a.href = articoli.url;
            author.innerHTML = `Author: ${articoli.by}`;
            date.innerHTML = `Date: ${utcDate(articoli.time)}`;
            })
    }
}

dati()

