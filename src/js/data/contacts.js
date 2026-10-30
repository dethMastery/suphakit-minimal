const contactElement = document.querySelector("#user-contacts");

console.log(contacts)

const data = contacts.map((data) => {
  const valSplit = data.value.split('|')
  const value = valSplit[0]
  const text = valSplit[1]

  return `<a class="contacts-container" href="${value}" target="_blank">
  <p class="contact-floor">
    ${data.floor}
  </p>
  <p class="contact-link">
    ${text}
  </p>
</a>`
}).join('')

contactElement.innerHTML = data
