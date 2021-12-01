var now;
var where;
var link;
var running = new Set();
var loop = new Set();
const parser = new DOMParser();


document.addEventListener("DOMContentLoaded", function(){
    now = window.location.pathname;
    addClickEvent();
    window.addEventListener('popstate', pageUpdate);
    setTimeout(function() { fancyName(); }, 500);
    tinykeys(window, {
        "ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight B A": () => {
          location="https://www.youtube.com/watch?v=KBjhAqXg8MY";
      },
      "h i g b y": () => {
        fancyName();
      }
    });
});

function addClickEvent() {
    document.querySelectorAll("a[href^='/']").forEach(el => {
        el.removeEventListener('click', pageUpdate);
        el.addEventListener('click', pageUpdate);
    });
    document.querySelectorAll("nav ol li span").forEach(el => {
        el.removeEventListener('click', tableOfContents);
        el.addEventListener('click', tableOfContents);
    });
    document.querySelectorAll(".poke").forEach(el => {
        el.removeEventListener('mouseover', pokeHop);
        el.addEventListener('mouseover', pokeHop);
        el.removeEventListener('mouseout', pokeHopReset);
        el.addEventListener('mouseout', pokeHopReset);
    });
    running.clear();
    loop.clear();
}

function pageUpdate() {
    if (this.href) {
        event.preventDefault();
        link = true;
        where = this.pathname;
    } else {
        link = false;
        where = window.location.pathname;
    }
    if (where != now) {
        fetchContent(where);
        now = where;
    }
}

async function fetchContent(where) {
    if (where.slice(-1) != '/') {
        where += '/';
    }
    let response = await fetch(where);
    if (response.ok != true) {
        response = await fetch('/404.html');
    } 
    let data = await response.text();
    let dom = parser.parseFromString(data, "text/html");
    dom.body.querySelector("main").style.opacity = '0';
    let main = document.querySelector("main");
    anime({
        targets: main,
        duration: "200",
        easing: "linear",
        opacity: '0',
        complete: function() {
            document.querySelector("main").replaceWith('');
            setTimeout(function() {
                document.querySelector("body").append(dom.body.querySelector("main"));
                document.querySelector("title").replaceWith(dom.querySelector("title"));
                if (link == true) {
                    history.pushState({}, "", where);
                }
                addClickEvent();
                let main = document.querySelector("main");
                anime({
                    targets: main,
                    duration: "200",
                    easing: "linear",
                    opacity: '1',
                });
            }, 25);           
        },
    });
}

function fancyName() {
    var internal = true;

    if (document.querySelector("header h1 a").className == 'internal') {
        document.querySelector("header h1 a").setAttribute('class', 'animating internal');
    } else {
        internal = false;
        document.querySelector("header h1 a").setAttribute('class', 'animating');
    }
    const header = new Letterize({ targets: "header h1 a", className: "individual", });
    for (i = 0; i < 7; i++) {
        document.querySelector(".individual").setAttribute('class', 'branden');
    } 
    var purple = anime.timeline({
        targets: header.listAll,
        duration: "1000",
        delay: anime.stagger(45),
        easing: "easeInOutQuad",
    });
    purple
    .add({color: [{value: "#e8e8e8",},{value: "#965ee5",},],})
    .add({targets: ".branden",color: [{value: "#e8e8e8",},],
        complete: function () {
            document.querySelector("header h1 i").style.color = '#965ee5';
            header.deletterize();
            if (internal == true) {
                document.querySelector("header h1 a").setAttribute('class', 'internal');
            } else {
                document.querySelector("header h1 a").setAttribute('class', '');
            }
        },
   });
}

function tableOfContents() {
    let toc = this.nextSibling.nextSibling;
    if (window.getComputedStyle(toc).getPropertyValue('display') == "none") {
        toc.style.display = "block";
        anime({
            targets: this.children,
            rotateZ: 90,
            duration: 100,
            easing: 'easeOutQuad'
        });
    } else {
        toc.style.display = "none";
        anime({
            targets: this.children,
            rotateZ: 0,
            duration: 100,
            easing: 'easeOutQuad'
          }); 
    }
}

function pokeHop() {
    var poke = this;
    if (running.has(poke) != true) {
        running.add(poke);
        var hop = anime({
            targets: this,
            easing: "easeOutQuad",
            duration: "250",
            direction: "alternate",
            translateY: "-10",
            complete: function () {
                if (loop.has(poke) != true) {
                    hop.play();
                } else {
                    running.delete(poke);
                    loop.delete(poke);
                }
            },
        });
        hop.play();
    }
}

function pokeHopReset() {
    var poke = this;
    loop.add(poke);
}