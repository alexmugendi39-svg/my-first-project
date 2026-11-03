// index.js
const grades = [
  "Grade 1","Grade 2","Grade 3","Grade 4","Grade 5 (NEW)",
  "Grade 6","Grade 7 (JSS)","Grade 8 (JSS)","Grade 9 (JSS)",
  "Grade 10","Grade 11","Grade 12"
];

const listDiv = document.getElementById("list");

grades.forEach(g => {
  listDiv.innerHTML += `
    <div style="display:flex;justify-content:space-between;border:1px solid #ddd;padding:12px;border-radius:12px">
      <span>${g} - Available ✅</span>
      <a href="https://wa.me/254759679830?text=Naomba ${g}" 
         style="background:green;color:white;padding:5px 15px;border-radius:20px;text-decoration:none">
         Request
      </a>
    </div>
  `;
});