const contacts = [
  {
    floor: "Github",
    value: "https://github.com/dethMastery",
    text: "dethMastery",
  },
  {
    floor: "X (Formerly Twitter)",
    value: "https://x.com/georgeKdeterk",
    text: "@georgeKdeterk",
  },
  {
    floor: "E-Mail",
    value: "mailto:pinyoworapot@suphakit.net",
    text: "pinyoworapot@suphakit.net",
  },
];

const contactElement = document.querySelector("#user-contacts");

for (let i = 0; i < contacts.length; i++) {
  const template = `<a class="contacts-container" href="${contacts[i].value}" target="_blank">
  <p class="contact-floor">
    ${contacts[i].floor}
  </p>
  <p class="contact-link">
    ${contacts[i].text}
  </p>
</a>`;

  contactElement.innerHTML += template;
}
