const btn = document.getElementById("btn")
const side = document.getElementById("sidebar")
const bottom = document.getElementById("bottom")
const lists = document.getElementsByClassName("all")
const buts = document.getElementsByClassName("buts")
console.log(lists);
function toggle() {
    console.log("ho")
    btn.classList.toggle("click");
    side.classList.toggle("show");
}
var langs = "En"
function myfunction(event) {
    for (lis of lists) {
        lis.classList.remove("side")
    }
    const targ = event.currentTarget
    targ.classList.add("side")
    console.log(targ)
    val = targ.innerHTML;
    myfetch(val, langs)
}

mylang("English");
function mylang(lang) {
    console.log("hello")
    console.log(lang)
    if (lang === "Hindi") {
        langs = "hi"
        console.log(langs)
        myfetch("India","hi")
    }
    else {
        langs = "en"
        myfetch("India","en")
        // myfetch(,langs)
    }
    // langs=lang
    console.log("lang", langs)
    for (bute of buts) {
        bute.classList.remove("box")
    }
    document.getElementById(lang).classList.add("box")
}
myfetch("all",langs)
async function myfetch(val, langs) {
    // console.log(targ, langs)
    bottom.innerHTML = ""
    const resp = await fetch(`https://newsapi.org/v2/everything?q=${val}&from=2023-01-15&language=${langs}&sortBy=publishedAt&apiKey=201b6c24d16348d1bee72289f0cb9845`)
    console.log(resp)
    const data = await resp.json()
    console.log(data)
    const arti = data.articles;
    if(data.articles.length==0){
        bottom.innerHTML ='<div class="card"><p id="err">No Latest NEWS found on this keyword</p></div>'
    }else{
        for (let i = 0; i < 20; i++) {
            console.log(arti[i]);
            bottom.innerHTML += `
            <div class="card" id="cards">
                <div class="lefts">
                    <img src= "${arti[i].urlToImage}" alt="wait image loading or may be null..."> 
                </div>
                <div class="ris">
    
                    <div class="title">
                        <h2>${arti[i].title}</h2>
                        <p> <span>short</span> by ${arti[i].author}/${arti[i].publishedAt}</p>
                    </div>
                    <div class="desp">
                        <p>${arti[i].description}</p> 
                    </div>
    
                    <div class="reads">
                        read more at <a href="${arti[i].url}">${arti[i].source.name}</a>
                    </div>
    
                </div>
                
            </div>
            `
    }
    }

}




