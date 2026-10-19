$.getJSON("https://jsonplaceholder.typicode.com/users", function (users) {
  $.each(users, function (index, user) {
    const tab = $("<button class='tab'></button>").text(user.name);
    tab.click(function () {
      selectUser(user.id, tab);
    });
    $(".users").append(tab);
    if (index === 0) selectUser(user.id, tab);
  });
});

function selectUser(userId, tab) {
  $(".tab").removeClass("active");
  tab.addClass("active");
  $(".posts").empty();
  $.getJSON(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
    function (posts) {
      $.each(posts, function (i, post) {
        $(".posts").append($("<li></li>").text(post.title));
      });
    }
  );
}