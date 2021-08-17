$(document).ready(function () {
  onReload();
  oldValue = "";
  oldValue = window.location.pathname.split(".html");
  tinykeys(window, {
    "ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight B A": () => {
      location="https://www.youtube.com/watch?v=KBjhAqXg8MY";
  },
  "h i g b y": () => {
    fancyName();
  }
})
});

//Page Transition
$(document).on("click", ".internal", function () {
  event.preventDefault();
  var a = $(this).attr("href").split(".html");
  var current = window.location.pathname.split(".html");
  if (a.length > 1) {
    a.pop();
  }
  if (a != current[0]) {
    history.pushState({}, "", a);
    contentUpdate();
  }
});
window.addEventListener("popstate", (event) => {
  contentUpdate();
});
function contentUpdate() {

  newValue = window.location.pathname.split(".html");
  if (newValue[0] != oldValue[0]) {
    h = true;
    g = true;
    p = true;
    $("main").fadeOut("fast", function () {
      if (h == true) {
        h = false;
        //Updates URL
        var location = window.location.pathname;

        //Loads Title Bar
        $("title").load(location + " title", function (response, status, xhr) {
          if ( status == "error" ) {
            $("title").load("/404" + " title", function () {
              if (g == true) {
                g = false;
                $("title title").unwrap();

              }
            });
          }
          else if (g == true) {
              g = false;
              $("title title").unwrap();
            }
        });

        //Loads Page Conent
        $("main").load(location + " main", function (response, status, xhr) {
          if ( status == "error" ) {
            $("main").load("/404" + " main", function () {
              if (p == true) {
                p = false;
                $("main main").hide();
                $("main main").unwrap();
                $("main").fadeIn("fast");
                onReload();
              }
            });
          }
          else if (p == true) {
              p = false;
              $("main main").hide();
              $("main main").unwrap();
              $("main").fadeIn("fast");
              onReload();
            }
        });
      }
    });
  }
  oldValue[0] = newValue[0];
}
function onReload() {
  pokeHop();
}

//Fancy Name
$("header h1 a").ready(function() {
  setTimeout(
    function() {
      fancyName();
    }, 250);
})
function fancyName() {
  var headerClass = $("header h1 a").attr("class");
  var headerColor = $("header h1 a").css("color");
  if ($.type( headerClass ) === "undefined") {
    $("header h1 a").attr("class", "animating");
  } else {
    $("header h1 a").attr("class", "animating internal");
  }
  // Turn header into a fuck ton of spans
  const header = new Letterize({
    targets: "header h1 a",
  });
  $("header h1 a span:lt(7)").attr("id", "branden"); // Give the first seven spans a specific id

  // Setup animation
  var purple = anime.timeline({
    targets: header.listAll,
    duration: "1000",
    delay: anime.stagger(45),
    easing: "easeInOutQuad",
  });
  purple
    .add({
      color: [
        {
          value: headerColor,
        },
        {
          value: "#965ee5",
        },
      ],
    })
    .add({
      targets: "#branden",
      color: [
        {
          value: headerColor,
        },
      ],
      complete: function () {
        $("header h1 i").css("color", "#965ee5");
        header.deletterize();
        if ($.type( headerClass ) !== "undefined") {
          $("header h1 a").attr("class", "internal");
        } else {
          $("header h1 a").removeAttr("class");
        }
      },
    });
}

//Table Of Contents
$(document).on("click", "nav ol li span", function () {
  if ($(this).next().next().is(":hidden")) {
    $(this).next().next().slideDown("fast");
    var arrow = $(this).children();
    anime({
      targets: this.children,
      rotateZ: 90,
      duration: 100,
      easing: 'easeOutQuad'
    });
  } else {
    $(this).next().next().slideUp("fast");
    anime({
      targets: this.children,
      rotateZ: 0,
      duration: 100,
      easing: 'easeOutQuad'
    });
  }
});

//Page Scripts

//Pokemon
function pokeHop() {
  list = $(".imgHolder .poke");
  list2 = $(".imgHolder .poke");
  loop = $(".imgHolder .poke");
  for (var i = 0; i < list.length; i++) {
    var poke = list[i];
    list[i] = anime({
      targets: poke,
      easing: "easeOutQuad",
      duration: "250",
      autoplay: false,
      direction: "alternate",
      translateY: "-10",
      complete: function (anim) {
        b = anim.animatables[0].target.id;
        e = $.inArray(b, list2);
        if (loop[e] == true) {
          anim.play();
        }
      },
    });
    list2[i] = $(".imgHolder .poke")[i].id;
  }
  $(".imgHolder .poke").hover(
    function () {
      var hovered = $(this).attr("id");
      q = $.inArray(hovered, list2);
      list[q].play();
      loop[q] = true;
    },
    function () {
      loop[q] = false;
    }
  );
}
