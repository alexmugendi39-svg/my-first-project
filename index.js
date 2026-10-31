const container = document.getElementById("grades-container");

const grade1Map = {
  "Mathematics": "GRADE-1-mathematics.pdf",
  "English": "GRADE-1-ENGLISH.pdf",
  "Kiswahili": "GRADE-1-KISWAHILI.pdf",
  "Environmental": "GRADE-1-ENVIRONMENTAL.pdf",
  "CRE": "GRADE-1-CRE.pdf",
  "Creative Arts": "GRADE-1-CREATIVE.pdf",
  "Indigenous": "GRADE-1-INDIGENOUS.pdf"
};

const gradesData = [
  { grade: 1, areas: ["Mathematics","English","Kiswahili","Environmental","CRE","Creative Arts","Indigenous"] },
  { grade: 2, areas: ["Mathematics","English","Kiswahili","Environmental","CRE","Creative Arts","Indigenous","Literacy"] },
  { grade: 3, areas: ["Mathematics","English","Kiswahili","Environmental","CRE","Creative Arts","Indigenous","Literacy"] },
  { grade: 4, areas: ["Mathematics","English","Kiswahili","Science & Technology","Social Studies","Agriculture","CRE","Creative Arts"] },
  { grade: 5, areas: ["Mathematics","English","Kiswahili","Science & Technology","Social Studies","Agriculture","CRE","Creative Arts"] },
  { grade: 6, areas: ["Mathematics","English","Kiswahili","Science & Technology","Social Studies","Agriculture","CRE","Creative Arts","Home Science"] }
];

gradesData.forEach(g => {
  const gradeDiv = document.createElement("div");
  gradeDiv.className = "grade";
  let html = `<h2>Grade ${g.grade} - ${g.areas.length} Learning Areas</h2>`;
  
  g.areas.forEach(subject => {
    let designFile;
    if(g.grade === 1 && grade1Map[subject]){
      designFile = grade1Map[subject];
    } else {
      designFile = subject.toLowerCase().replace(/ & /g,"-").replace(/ /g,"-") + ".pdf";
    }
    const baseName = subject.toLowerCase().replace(/ & /g,"-").replace(/ /g,"-");
    
    html += `
      <div class="subject">
        <b>${subject}</b>
        <div class="links">
          <a class="design" href="pdfs/grade${g.grade}/designs/${designFile}" target="_blank">📄 Designs</a>
          <a class="scheme" href="pdfs/grade${g.grade}/schemes/${baseName}.pdf" target="_blank">📘 Schemes</a>
          <a class="notes" href="pdfs/grade${g.grade}/notes/${baseName}.pdf" target="_blank">📝 Notes</a>
          <a class="exams" href="pdfs/grade${g.grade}/exams/${baseName}.pdf" target="_blank">📝 Exams</a>
        </div>
      </div>
    `;
  });
  
  gradeDiv.innerHTML = html;
  container.appendChild(gradeDiv);
});