const menu = ["TRANG CHỦ", "TEYVAT", "NHÂN VẬT", "SỰ KIỆN", "THAM GIA"];
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  slidesPerView: "auto",
  // freeMode: true,
  parallax: true,
  watchSlidesVisibility: true,
  mousewheel: true,
  breakpoints: {
    768: {},
    480: {},
    1200: {},
  },
  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
var slider1 = new Swiper(".mondstadt", {
  effect: "slide",
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var slider2 = new Swiper(".swiper-news", {
  effect: "slide",
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var slider3 = new Swiper(".character-mondstadt", {
  effect: "slide",
  slidesPerView: 5,
  spaceBetween: 15,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 7.5,
    },
    768: {
      slidesPerView: 5,
    },
    480: {
      slidesPerView: 5,
    },
    0: {
      slidesPerView: 3,
    },
  },
});

var slider4 = new Swiper(".character-change-land", {
  allowTouchMove: false,
  slidesPerView: 1,
  effect: "slide",
  navigation: {
    nextEl: ".land-btn-next",
    prevEl: ".land-btn-prev",
  },
});

var slider5 = new Swiper(".character-liyue", {
  effect: "slide",
  slidesPerView: 5,
  spaceBetween: 15,
  breakpoints: {
    480: {},
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 7.5,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var slider6 = new Swiper(".character-inazuma", {
  effect: "slide",
  slidesPerView: 5,
  spaceBetween: 15,
  breakpoints: {
    768: {},
    480: {},
    1024: {
      slidesPerView: 7.5,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

// xử lý đổi vùng đất nhân vật
slider4.on("slideChange", (index) => {
  $("#character-bg").removeClass("character-background-mondstadt");
  $("#character-bg").removeClass("character-background-liyue");
  $("#character-bg").removeClass("character-background-inazuma");
  $(".character-liyue").removeClass("active");
  $(".character-mondstadt").removeClass("active");
  $(".character-inazuma").removeClass("active");

  if (index.activeIndex == 0) {
    slider3.slideTo(0);
    $("#venti.avatar").click();
    $(".character-mondstadt").addClass("active");
    $("#character-bg").addClass("character-background-mondstadt");
  } else if (index.activeIndex == 1) {
    slider5.slideTo(0);
    $("#zhongli.avatar").click();
    $(".character-liyue").addClass("active");
    $("#character-bg").addClass("character-background-liyue");
  } else if (index.activeIndex == 2) {
    $("#raiden.avatar").click();
    $("#character-bg").addClass("character-background-inazuma");
    $(".character-inazuma").addClass("active");
  }
});

// bắt dữ kiện đổi slide và đổi navbar
swiper.on("slideChange", (slide) => {
  if (slide.activeIndex == 0 || slide.activeIndex == 4) {
    $(".paimon-dl").addClass("disable");
    $(".paimon-dl").removeClass("active");
  } else {
    $(".paimon-dl").removeClass("disable");
    $(".paimon-dl").addClass("active");
  }

  $(".h-item").each(function (itemIndex) {
    if (slide.activeIndex == itemIndex) {
      $(".h-item").removeClass("active");
      $(this).addClass("active");
    }
  });
});
$(document).ready(function () {
  $(".h-item").click(function () {
    let index = menu.indexOf($(this).text());
    if (index != -1) {
      swiper.slideTo(index);
    }
  });
});

// xử lý nhạc nền
$(document).ready(function () {
  // $('#audio')[0].play();
});
$("#music").click(function () {
  if ($("#music").hasClass("offmusic")) {
    $("#audio")[0].play();
    $("#music").removeClass("offmusic");
  } else {
    $("#audio")[0].pause();
    $("#music").addClass("offmusic");
  }
});
function pauseMusic() {
  $("#audio")[0].pause();
  $("#music").addClass("offmusic");
}
function playMusic() {
  $("#audio")[0].play();
  $("#music").removeClass("offmusic");
}

// chuyển đến slide teyvat
$(".arrow-down").click(function () {
  swiper.slideTo(1);
});

// xử lý đổi vùng đất
function change_land(land) {
  $(".teyvat-content").removeClass("active");
  $(`#${land}`).addClass("active");
}

// xử lý avatar
$(".avatar").click(function () {
  $(".avatar").removeClass("active");
  $(this).addClass("active");
  $(".info-wrapper").removeClass("active");
  $(`#${$(this).attr("id")}`).addClass("active");
});
