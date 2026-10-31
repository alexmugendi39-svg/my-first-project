const container = document.getElementById("grades-container");

// Grade 1 - tunatumia majina halisi ya files uli-upload
const grade1Files = {
  "CRE": "GRADE-1-CRE-CURRICULUM-DESIGN-Rationalized-Curriculum-Design-1.pdf",
  "Creative Arts": "GRADE-1-CREATIVE-ACTIVITIES-CURRICULUM-DESIGN-Rationalized-Curriculum-Design.pdf",
  "English": "GRADE-1-ENGLISH-CURRICULUM-DESIGN-Rationalized-Curriculum-Design.pdf",
  "Environmental": "GRADE-1-ENVIRONMENTAL-ACTIVITIES-CURRICULUM-DESIGN-Rationalized-Curriculum-Design.pdf",
  "Indigenous": "GRADE-1-INDIGENOUS-LANGUAGES-CURRICULUM-DESIGN-Rationalized-Curriculum-Design.pdf",
  "Kiswahili": "GRADE-1-KISWAHILI-CURRICULUM-DESIGN-Rationalized-Curriculum-Design.pdf",
  "Mathematics": "GRADE-1-MATHEMATICS-CURRICULUM-DESIGN-Rationalized-Curriculum-Design.pdf"
};

const gradesData = [
  { grade: 1, areas: ["Mathematics", "English", "Kiswahili", "Environmental", "CRE", "Creative Arts", "Indigenous"] },
  { grade: 2, areas: ["Mathematics", "English", "Kiswahili", "Environmental", "CRE", "Creative Arts", "Indigenous", "Literacy"] },
  { grade: 3, areas: ["Mathematics", "English", "Kiswahili", "Environmental", "CRE", "Creative Arts", "Indigenous", "Literacy"] },
  { grade: 4, areas: ["Mathematics", "English", "Kiswahili", "Science & Technology", "Social Studies", "Agriculture", "CRE", "Creative Arts"] },
  { grade: 5, areas: ["Mathematics", "English", "Kiswahili", "Science & Technology", "Social Studies", "Agriculture", "CRE", "Creative Arts"] },
  { grade: 6, areas: ["Mathematics", "English", "Kiswahili", "Science & Technology", "Social Studies", "Agriculture", "CRE", "Creative Arts", "Home Science"] }
];

gradesData.forEach(g => {
  const gradeDiv = document.createElement("div");
  gradeDiv.className = "grade";
  
  let html = `<h2>Grade ${g.grade} - ${g.areas.length} Learning Areas</h2>`;
  
  g.areas.forEach(subject => {
    let designPath, schemePath, notesPath, examsPath;
    
    if (g.grade === 1 && grade1Files[subject]) {
      designPath = `pdfs/grade1/designs/${grade1Files[subject]}`;
    } else {
      // For other grades, generic path - uta-add files baadaye
      const fileName = subject.replace(/ & /g, "-").replace(/ /g, "-").toUpperCase();
      designPath = `pdfs/grade${g.grade}/designs/${fileName}.pdf`;
    }
    
    schemePath = `pdfs/grade${g.grade}/schemes/${subject}.pdf`;
    notesPath = `pdfs/grade${g.grade}/notes/${subject}.pdf`;
    examsPath = `pdfs/grade${g.grade}/exams/${subject}.pdf`;

    html += `
      <div class="subject">
        <b>${subject}</b>
        <div class="links">
          <a class="design" href="${designPath}" target="_blank">📄 Designs</a>
          <a class="scheme" href="${schemePath}" target="_blank">📘 Schemes</a>
          <a class="notes" href="${notesPath}" target="_blank">📝 Notes</a>
          <a class="exams" href="${examsPath}" target="_blank">📝 Exams</a>
        </div>
      </div>
    `;
  });
  
  gradeDiv.innerHTML = html;
  container.appendChild(gradeDiv);
});