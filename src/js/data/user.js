const userImageElement = document.querySelector(
  "#user-data > .user-image-container > .user-image"
);
userImageElement.innerHTML = `<div class="img" style="background: url(https://suphakit.net${userData.image});"></div>`;

const userDataElement = document.querySelector("#user-data > .data-user");
let detailElement = "";

for (let i = 0; i < userData.details.length; i++) {
  let dateSlug = "";

  if (userData.details[i].floor == "Birth Date") {
    const date = new Date(Number(userData.details[i].value));
    const BD = new Date().getFullYear() - date.getFullYear();

    dateSlug = `${date.getDate()} ${
      mS[date.getMonth()]
    }. ${date.getFullYear()} (${BD} years old now)`;
  }

  let template = `<div class="floor-container">
  <p class="floor">${userData.details[i].floor}</p>
  <p class="value">${
    userData.details[i].floor != "Birth Date" &&
    userData.details[i].floor != "Interview Availability"
      ? userData.details[i].value
      : userData.details[i].floor == "Birth Date"
      ? dateSlug
      : userData.details[i].floor == "Interview Availability"
      ? Boolean(userData.details[i].value)
        ? "Yes"
        : "No"
      : ""
  }</p>
</div>`;

  detailElement += template;
}

userDataElement.innerHTML = `<h2>${userData.name}</h2>
<p class="subText-1">${userData.subText[0]}</p>
<p class="subText-2">${userData.subText[1]}</p>
<p class="desp">${userData.desp}</p>
<div class="detailing">
  ${detailElement}
</div>`;
