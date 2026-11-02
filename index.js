const gradesData = [
  { grade: 1, areas: ["Mathematics","English","Kiswahili","Environmental Activities","CRE","Creative Arts","Indigenous"] },
  { grade: 2, areas: ["Mathematics","English","Kiswahili","Environmental Activities","CRE","Creative Arts","Indigenous"] },
  { grade: 3, areas: ["Mathematics","English","Kiswahili","Environmental Activities","CRE","Creative Arts"] },
  { grade: 4, areas: ["Mathematics","English","Kiswahili","Science & Technology","Social Studies","CRE","Creative Arts","Agriculture"] },
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

function slugify(name) {
  return name.toLowerCase()
    .replace(/ & /g, '-')
    .replace(/ and /g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
}

gradesData.forEach(g => {
  const gradeDiv = document.createElement("div");
  gradeDiv.className = "grade";
  let html = `<h2>Grade ${g.grade} - ${g.areas.length} Learning Areas</h2>`;
  g.areas.forEach(subject => {
    const f1 = slugify(subject) + ".pdf";
    const f2 = `grade-${g.grade}-${f1}`;
    // tunajaribu file short kwanza
    html += `<div class="subject"><strong>${subject}</strong><br>
      <a href="pdfs/grade${g.grade}/designs/${f1}" target="_blank">Design</a> |
      <a href="pdfs/grade${g.grade}/schemes/${f1}" target="_blank">Scheme</a> |
      <a href="pdfs/grade${g.grade}/notes/${f1}" target="_blank">Notes</a> |
      <a href="pdfs/grade${g.grade}/exams/${f1}" target="_blank">Exam</a>
      <small style="opacity:0.6"> (alt: ${f2})</small>
    </div>`;
  });
  gradeDiv.innerHTML = html;
  container.appendChild(gradeDiv);
});