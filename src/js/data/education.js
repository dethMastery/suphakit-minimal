const EduElement = document.querySelector("#education > .container-content");

for (let i = 0; i < Education.length; i++) {
  let data = revData[i];

  const Template = `<div class="edu-container" id="edu-${data.id}">
  <h3 class="school">
    ${data.school}
  </h3>
  <p class="grade">
    ${data.class != "" ? `${data.class} · ` : ""}${data.grade}
  </p>
  <p class="year">
    ${data.year}
  </p>
</div>`;

  EduElement.innerHTML += Template;
}
