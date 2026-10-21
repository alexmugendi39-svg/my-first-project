document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.section') || document.body;
  
  Object.keys(learningAreas).forEach((grade) => {
    const div = document.createElement('div');
    div.className = 'grade';
    let areasHTML = '';
    learningAreas[grade].forEach(area => {
      areasHTML += `<div class="area"><span>${area}</span><div class="links"><a class="notes" href="pdfs/${grade.toLowerCase().replace(' ','')}/notes/${area.toLowerCase()}.pdf">Notes</a><a class="schemes" href="pdfs/${grade.toLowerCase().replace(' ','')}/schemes/${area.toLowerCase()}.pdf">Schemes</a></div></div>`;
    });
    div.innerHTML = `<div class="grade-head" onclick="this.parentElement.classList.toggle('active')"><h3>${grade}</h3><span>▼</span></div><div class="grade-body">${areasHTML}</div>`;
    container.appendChild(div);
  });
});