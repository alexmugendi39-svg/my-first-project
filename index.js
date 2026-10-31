const container = document.getElementById('grades-container');

const grade1Designs = [
  "GRADE-1-CRE-Rationalized-Curriculum-Design",
  "GRADE-1-Creative-Activities-Rationalized-Curriculum-Design",
  "GRADE-1-English-Rationalized-Curriculum-Design",
  "GRADE-1-Environmental-Activities-Rationalized-Curriculum-Design",
  "GRADE-1-Indigenous-Languages-Rationalized-Curriculum-Design",
  "GRADE-1-IRE-Rationalized-Curriculum-Design",
  "GRADE-1-Kiswahili-Rationalized-Curriculum-Design",
  "GRADE-1-Mathematics-Rationalized-Curriculum-Design"
];

function makeLinks(files, grade, folder) {
  return files.map(f => {
    let name = f.replace('GRADE-1-','').replace('-Rationalized-Curriculum-Design','').replace(/-/g,' ');
    return `<a href="pdfs/${grade}/${folder}/${f}.pdf" target="_blank">📄 ${name}</a>`;
  }).join('');
}

container.innerHTML = `
<div class="grade">
  <h2>Grade 1 - CBC Materials</h2>
  <div class="subject">
    <b>📘 CURRICULUM DESIGNS</b>
    <div class="links">${makeLinks(grade1Designs, 'grade1', 'designs')}</div>
  </div>
  <div class="subject">
    <b>📗 SCHEMES OF WORK</b>
    <div class="links"><a href="pdfs/grade1/schemes/" target="_blank">Open Schemes</a></div>
  </div>
  <div class="subject">
    <b>📙 NOTES</b>
    <div class="links"><a href="pdfs/grade1/notes/" target="_blank">Open Notes</a></div>
  </div>
</div>

<div class="grade"><h2>Grade 2 - 6</h2><p>Add files same way - pdfs/grade2/designs/ etc. Then we update index.js</p></div>
`;