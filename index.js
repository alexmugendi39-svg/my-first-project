// index.js - FINAL - Kila Grade na buttons 5

const grades = [
  "Grade 1", "Grade 2", "Grade 3", "Grade 4", 
  "Grade 5", "Grade 6", "Grade 7 (JSS)", 
  "Grade 8 (JSS)", "Grade 9 (JSS)", 
  "Grade 10", "Grade 11", "Grade 12"
];

const materials = ["Designs", "Schemes", "Lesson Plans", "Records", "Notes & Exams"];

const listDiv = document.getElementById("list");

grades.forEach(grade => {
  let buttons = "";
  materials.forEach(mat => {
    const msg = `Habari Alex, naomba ${grade} - ${mat}`;
    buttons += `<a href="https://wa.me/254759679830?text=${encodeURIComponent(msg)}" 
    class="bg-green-600 hover:bg-green-700 text-white text-[10px] px-2 py-1 rounded-full font-bold">${mat}</a>`;
  });

  listDiv.innerHTML += `
    <div class="border p-3 rounded-xl bg-gray-50 mb-2">
      <p class="font-bold text-sm mb-2">${grade} - Available ✅</p>
      <div class="flex flex-wrap gap-1.5">
        ${buttons}
      </div>
    </div>
  `;
});