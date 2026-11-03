// index.js - FINAL - Alex Mugendi

const materials = [
  "Grade 1 - CBC Designs",
  "Grade 2 - CBC Designs",
  "Grade 3 - CBC Designs",
  "Grade 4 - CBC Designs",
  "Grade 5 - NEW 2024",
  "Grade 6 - CBC Designs",
  "Grade 7 (JSS)",
  "Grade 8 (JSS)",
  "Grade 9 (JSS)",
  "Grade 10",
  "Grade 11",
  "Grade 12",
  "Schemes of Work - All Grades",
  "Lesson Plans - All Subjects",
  "Records of Work",
  "Notes & Exams"
];

const listDiv = document.getElementById("list");

materials.forEach(item => {
  listDiv.innerHTML += `
    <div class="flex justify-between items-center border p-3 rounded-xl bg-gray-50">
      <span class="font-medium text-sm">${item} - Available ✅</span>
      <a href="https://wa.me/254759679830?text=Habari Alex, naomba ${item}" 
         class="bg-green-600 text-white text-xs px-4 py-1.5 rounded-full">
         Request
      </a>
    </div>
  `;
});