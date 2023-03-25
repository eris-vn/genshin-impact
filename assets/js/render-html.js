function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");
}

// characters info
let characters_html = "";
let activeIndex = 0;
characters.forEach((land) => {
  land.list.forEach((data) => {
    characters_html += `
    <div class="info-wrapper ${activeIndex === 0 ? "active" : ""}" id="${toSlug(
      data.name
    )}">
        <img class="thumbnails" src="/assets/img/characters/${toSlug(
          data.name
        )}.png" alt="Character">
        <div class="info">
            <div class="name">
                <div>${data.name}</div>
                <img class="vision" src="/assets/img/Vision_${land.land}_${
      data.vision
    }.png" alt="vision">
                <img class="line" src="/assets/img/line-2.png" alt="line">
            </div>
            <div class="desc">
                ${data.desc}
            </div>
        </div>
        <div class="video">
            <div class="name">Tiêu Điểm</div>
            <div class="thumbnails" onclick="openModalYoutube('${data.video}')">
                <img class="bg" src="https://i3.ytimg.com/vi/${
                  data.video
                }/maxresdefault.jpg" alt="thumbnails">
                <img class="play-btn" src="/assets/img/youtube-icon.svg" alt="logo">
            </div>
        </div>
    </div>`;
    activeIndex++;
  });
});
$("#characters-info").prepend(characters_html);

// characters avatar info
let characters_avt_html = "";
characters.forEach((land) => {});

// land
let land_html = "";
characters.forEach((land) => {
  land_html += `
    <div class="swiper-slide">
        <div class="title">${capitalizeFirstLetter(land.land)}</div>
    </div>
    `;
});
$("#land-list").html(`${land_html}`);

// land list
let land_list_html = "";
characters.forEach((land) => {
  land_item = "";
  land.list.forEach((data) => {
    land_item += `
    <div class="swiper-slide">
        <div class="avatar ${
          land.list.indexOf(data) == 0 ? "active" : ""
        }" id="${toSlug(data.name)}">
            <img src="/assets/img/characters/avt_${toSlug(
              data.name
            )}.png" alt="Avatar">
            <div class="name">${data.name}</div>
        </div>
    </div>
    `;
  });

  land_list_html += `
  <div class="swiper-container character-${land.land} ${
    characters.indexOf(land) == 0 ? "active" : ""
  }">
    <div class="swiper-wrapper">
        ${land_item}
    </div>
  </div>
  `;
});
$("#land-form-list").append(land_list_html);
