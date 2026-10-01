// --- ตัวอย่างโค้ด JavaScript สำหรับมินิโปรเจกต์ (Random Background Color) ---
const colorBtn = document.getElementById('colorBtn');
const colorCode = document.getElementById('colorCode');
const colorApp = document.getElementById('colorApp');

if (colorBtn) {
  colorBtn.addEventListener('click', () => {
    // 1. ສ້າງເລກຖານສີ Hexadecimal แบบสุ่ม
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    // 2. DOM Manipulation: เปลี่ยนสีพื้นหลังของกล่องตัวอย่าง และเปลี่ยนข้อความแสดงโค้ดสี
    colorApp.style.backgroundColor = color;
    colorCode.textContent = color;

    // 3. ปรับสีตัวหนังสือให้อ่านง่าย ตามความสว่างของสีพื้นหลัง (คำนวณจากค่า R, G, B)
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    colorApp.style.color = brightness < 140 ? '#fff' : '#333';
  });
}