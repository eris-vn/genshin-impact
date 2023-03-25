function openModal() {
  $(".modal").removeClass("hide");
  $(".modal").addClass("active");
}

function openModalYoutube(id) {
  $(".modal-body").html(`
        <iframe src="https://www.youtube.com/embed/${id}?autoplay=1"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    `);
  openModal();
  pauseMusic();
}

$(".modal").click(function () {
  if ($(".modal").hasClass("active")) {
    $(".modal-body").html("");
    $(".modal").removeClass("active");
    $(".modal").addClass("hide");
    playMusic();
  }
});

$(document).on("keyup", function (e) {
  if (e.key === "Escape" && $(".modal").hasClass("active")) {
    $(".modal-body").html("");
    $(".modal").removeClass("active");
    $(".modal").addClass("hide");
    playMusic();
  }
});
