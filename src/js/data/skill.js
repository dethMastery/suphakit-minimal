const techElement = document.querySelector("#tech-stats-list");

for (let i = 0; i < Skill.length; i++) {
  const Template = `<a href="${Skill[i].link}" target="_blank" class="tech-icon" style="background: url(${Skill[i].img})">
  
</a>`;

  techElement.innerHTML += Template;
}
