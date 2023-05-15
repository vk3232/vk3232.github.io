const colleges = document.querySelectorAll(".collage-none");
const menuColleges = document.querySelectorAll("#education-left ul li");

colleges[0].classList.add("collage-active");
colleges[0].classList.remove("collage-none");
menuColleges[0].classList.add("education-click");

function showsColleges(index) {
  colleges.forEach((item) => {
    item.classList.add("collage-none");
  });

  colleges[index].classList.add("collage-active");
  colleges[index].classList.add("text-focus-in");
  menuColleges[index].classList.add("education-click");

  if (index == 0) {
    menuColleges[1].classList.remove("education-click");
    menuColleges[2].classList.remove("education-click");
    colleges[0].classList.remove("collage-none");
    colleges[0].classList.add("collage-active");
    colleges[1].classList.add("collage-none");
    colleges[1].classList.remove("collage-active");
    colleges[2].classList.add("collage-none");
    colleges[2].classList.remove("collage-active");
  }

  if (index == 1) {
    menuColleges[0].classList.remove("education-click");
    menuColleges[2].classList.remove("education-click");
    colleges[1].classList.remove("collage-none");
    colleges[0].classList.add("collage-none");
    colleges[0].classList.remove("collage-active");
    colleges[2].classList.add("collage-none");
    colleges[2].classList.remove("collage-active");
  }

  if (index == 2) {
    menuColleges[0].classList.remove("education-click");
    menuColleges[1].classList.remove("education-click");
    colleges[2].classList.remove("collage-none");
    colleges[0].classList.add("collage-none");
    colleges[0].classList.remove("collage-active");
    colleges[1].classList.add("collage-none");
    colleges[1].classList.remove("collage-active");

  }

}

menuColleges.forEach((itens, index) => {
  itens.addEventListener("click", () => {
    showsColleges(index);
  });
});
