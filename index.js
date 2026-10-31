const container = document.getElementById("grades-container");

const gradesData = [
  { grade: 1, areas: [
    {name:"Mathematics", file:"mathematics.pdf"},
    {name:"English", file:"english.pdf"},
    {name:"Kiswahili", file:"kiswahili.pdf"},
    {name:"Environmental", file:"environmental.pdf"},
    {name:"CRE", file:"cre.pdf"},
    {name:"Creative Arts", file:"creative.pdf"},
    {name:"Indigenous", file:"indigenous.pdf"}
  ]},
  { grade: 2, areas: [
    {name:"Mathematics"}, {name:"English"}, {name:"Kiswahili"}, {name:"Environmental"}, 
    {name:"CRE"}, {name:"Creative Arts"}, {name:"Indigenous"}, {name:"Literacy"}
  ]},
  { grade: 3, areas: [
    {name:"Mathematics"}, {name:"English"}, {name:"Kiswahili"}, {name:"Environmental"}, 
    {name:"CRE"}, {name:"Creative Arts"}, {name:"Indigenous"}, {name:"Literacy"}
  ]},
  { grade: 4, areas: [
    {name:"Mathematics"}, {name:"English"}, {name:"Kiswahili"}, {name:"Science & Technology"}, 
    {name:"Social Studies"}, {name:"Agriculture"}, {name:"CRE"}, {name:"Creative Arts"}
  ]},
  { grade: 5, areas: [
    {name:"Mathematics"}, {name:"English"}, {name:"Kiswahili"}, {name:"Science & Technology"}, 
    {name:"Social Studies"}, {name:"Agriculture"}, {name:"CRE"}, {name:"Creative Arts"}
  ]},
  { grade: 6, areas: [
    {name:"Mathematics"}, {name:"English"}, {name:"Kiswahili"}, {name:"Science & Technology"}, 
    {name:"Social Studies"}, {name:"Agriculture"}, {name:"CRE"}, {name:"Creative Arts"}, {name:"Home Science"}
  ]}
];

gradesData.forEach(g => {
  const gradeDiv = document.createElement("div");
  gradeDiv.className = "grade";
  let html = `<h2>Grade ${g.grade} - ${g.areas.length} Learning Areas</h2>`;
  
  g.areas.forEach(subject => {
    const designFile = subject.file ? subject.file : subject.name.toLowerCase().replace(/ & /g,"-").replace(/ /g,"-") + ".pdf";
    const baseName = subject.name.toLowerCase().replace(/ & /g,"-").replace(/ /g,"-");
    
    const designPath = `pdfs/grade${g.grade}/designs/${designFile}`;
    const schemePath = `pdfs/grade${g.grade}/schemes/${baseName}.pdf`;
    const notesPath = `pdfs/grade${g.grade}/notes/${baseName}.pdf`;
    const examsPath = `pdfs/grade${g.grade}/exams/${baseName}.pdf`;

    html += `
      <div class="subject">
        <b>${subject.name}</b>
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