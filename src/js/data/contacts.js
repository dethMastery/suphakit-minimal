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
