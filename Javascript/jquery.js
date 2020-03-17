$("li a").css({ "text-decoration": "none", "font-size": "24px" });

$("ul").css({
  "list-style": "none",
  display: "flex",
  "justify-content": "space-around",
  backgroundColor: "black"
});

$("a").css("color", "orange");

$("#one").css({ color: "pink" });

$(".js").css({ "border-radius": "50%" });

$("#two").mouseenter(function() {
  $(this).css({
    color: "white"
  });
});
$("#two").mouseleave(function() {
  $(this).css({
    color: "green"
  });
});

$("button").click(function() {
  $(".js").fadeOut();
});

$("button").click(function() {
  $(".js").fadeIn();
});
//using 'on' to do 2 works at a time for same tag
$("input").on({
  focus: function() {
    $(this).css({
      backgroundColor: "yellow"
    });
  },
  blur: function() {
    $(this).css({
      backgroundColor: "lightblue"
    });
  }
});

$("#id").hover(function() {
  $(this).fadeOut("slow");
  $(this).fadeIn("slow");
});

/*doing one at a time
$("input").focus(function () {
    $(this).css({
        backgroundColor: "yellow"
    });
})
$("input").blur(function () {
    $(this).css({
        backgroundColor: "lightblue"
    });
})*/
