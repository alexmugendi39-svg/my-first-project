const gradesData = [
  { grade: 1, areas: ["Mathematics","English","Kiswahili","Environmental Activities","CRE","Creative Arts"] },
  { grade: 2, areas: ["Mathematics","English","Kiswahili","Environmental Activities","CRE","Creative Arts"] },
  { grade: 3, areas: ["Mathematics","English","Kiswahili","Environmental Activities","CRE","Creative Arts"] },
  { grade: 4, areas: ["Mathematics","English","Kiswahili","Science & Technology","Social Studies","CRE","Creative Arts"] },
  { grade: 5, areas: ["Mathematics","English","Kiswahili","Science & Technology","Social Studies","Agriculture and Nutrition","Creative Arts","CRE"] },
  { grade: 6, areas: ["Mathematics","English","Kiswahili","Science & Technology","Social Studies","Agriculture and Nutrition","Creative Arts","CRE"] },
  { grade: 7, areas: ["Mathematics","English","Kiswahili","Integrated Science","Social Studies","Agriculture and Nutrition","Creative Arts and Sports","Pre-Technical Studies","CRE"] },
  { grade: 8, areas: ["Mathematics","English","Kiswahili","Integrated Science","Social Studies","Agriculture and Nutrition","Creative Arts and Sports","Pre-Technical Studies","CRE"] },
  { grade: 9, areas: ["Mathematics","English","Kiswahili","Integrated Science","Social Studies","Agriculture and Nutrition","Creative Arts and Sports","Pre-Technical Studies","CRE"] },
  { grade: 10, areas: ["Mathematics","English","Kiswahili","Biology","Chemistry","Physics","History","Geography","CRE","Business Studies","Computer Studies"] },
  { grade: 11, areas: ["Mathematics","English","Kiswahili","Biology","Chemistry","Physics","History","Geography","CRE","Business Studies","Computer Studies"] },
  { grade: 12, areas: ["Mathematics","English","Kiswahili","Biology","Chemistry","Physics","History","Geography","CRE","Business Studies","Computer Studies"] },
];

const container = document.getElementById("grades-container");

gradesData.forEach(g => {
  const gradeDiv = document.createElement("div");
  gradeDiv.className = "grade";
  let html = `<h2>Grade ${g.grade} - ${g.areas.length} Learning Areas</h2>`;
  
  g.areas.forEach(subject => {
    const cleanSubject = subject.replace(/ & /g, "-").replace(/ /g, "-");
    html += `
      <div class="subject">
        <strong>${subject}</strong><br>
        <a class="design" href="pdfs/grade${g.grade}/designs/${subject}.pdf" target="_blank">Design</a>
        <a class="scheme" href="pdfs/grade${g.grade}/schemes/${subject}.pdf" target="_blank">Scheme</a>
        <a class="notes" href="pdfs/grade${g.grade}/notes/${subject}.pdf" target="_blank">Notes</a>
        <a class="exams" href="pdfs/grade${g.grade}/exams/${subject}.pdf" target="_blank">Exam</a>
      </div>
    `;
  });
  
  gradeDiv.innerHTML = html;
  container.appendChild(gradeDiv);
});