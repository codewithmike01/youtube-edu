const clickShowMore = document.getElementById("changeShowMore");
const showMore = document.getElementById("showMoreDescrip");
clickShowMore.addEventListener("click", openWide);

function openWide() {
  showMore.setAttribute("style", "visibility:visible");
  clickShowMore.setAttribute("style", "visibility:hidden");
}
