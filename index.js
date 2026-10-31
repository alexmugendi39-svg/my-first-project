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
  return files.map(f => `<a href="pdfs/${grade}/${folder}/${f}.pdf" target="_blank">📄 ${f.replace(/-/g,' ').replace('GRADE 1','')}</a>`).join('');
}

container.innerHTML = `
<div class="grade">
  <h2>Grade 1</h2>
  
  <div class="subject">
    <b>📘 CURRICULUM DESIGNS</b>
    <div class="links">${makeLinks(grade1Designs, 'grade1', 'designs')}</div>
  </div>

  <div class="subject">
    <b>📗 SCHEMES OF WORK</b>
    <div class="links"><a href="pdfs/grade1/schemes/">Open Schemes Folder</a></div>
  </div>

  <div class="subject">
    <b>📙 NOTES</b>
    <div class="links"><a href="pdfs/grade1/notes/">Open Notes Folder</a></div>
  </div>
</div>

<div class="grade">
  <h2>Grade 2 - 6</h2>
  <p>Copy same method - add designs to pdfs/grade2/designs/ etc</p>
</div>
`;
