$(function () {
  var tabsCount = 4;
  var activeBg = "#dcdcdc";
  var normalBg = "#eeeeee";
  var accent = "#6f42c1";
  var $wrapper = $("<div>").css({ margin: "20px" }).appendTo("body");
  var $tabs = $("<div>").css({ display: "flex" }).appendTo($wrapper);
  var $content = $("<div>").css({
    background: activeBg,
    padding: "25px 25px",
    minHeight: "35px"
  }).appendTo($wrapper);

  for (var i = 1; i <= tabsCount; i++) {
    $("<div>")
      .text("Tab " + i)
      .data("index", i)
      .addClass("tab")
      .css({
        padding: "15px 14px",
        background: normalBg,
        borderTop: "2px solid transparent",
        cursor: "pointer"
      })
      .appendTo($tabs);
  }

  function activate(index) {
    $(".tab").css({ background: normalBg, borderTop: "2px solid transparent" });

    $(".tab").filter(function () {
      return $(this).data("index") === index;
    }).css({ background: activeBg, borderTop: "2px solid " + accent });

    $content.text("Content " + index);
  }
  $tabs.on("click", ".tab", function () {
    activate($(this).data("index"));
  });
  activate(1);
});