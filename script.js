// ==========================
// PAGE LOAD FADE IN
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.querySelector(".page-overlay");

    if (overlay) {
        setTimeout(() => {
            overlay.classList.add("fade-in-active");
        }, 40);
    }

    // ==========================
    // ACTIVE NAVIGATION LINK
    // ==========================

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

    // ==========================
    // PAGE TRANSITION EFFECT
    // ==========================

    const pageLinks = document.querySelectorAll(
        ".nav-links a, .btn, .btn-shop"
    );

    pageLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetUrl = this.getAttribute("href");

            if (
                targetUrl &&
                targetUrl !== "#" &&
                !targetUrl.startsWith("http")
            ) {

                e.preventDefault();

                if (overlay) {

                    overlay.classList.remove("fade-in-active");

                    setTimeout(() => {
                        window.location.href = targetUrl;
                    }, 500);

                } else {

                    window.location.href = targetUrl;

                }

            }

        });

    });

});
// LIVE SEARCH SYSTEM
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll(".shop-card, .product-item");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
// Database of specific hardware items and their properties tailored for Thailand construction
const productData = {
  "ปูนซีเมนต์": {
    title: "คุณสมบัติ ปูนซีเมนต์ (Cement Properties)",
    description: "จำหน่ายปูนคุณภาพจากแบรนด์ชั้นนำ เหมาะสำหรับงานโครงสร้างและงานตกแต่ง",
    items: [
      { name: "ปูนซีเมนต์ TPI (แดง/เขียว)", property: "สูตรผสมพิเศษ ให้กำลังอัดสูงพิเศษ เหมาะสำหรับงานเทคาน เสา และฐานรากคอนกรีตที่ต้องการความแข็งแรง" },
      { name: "ปูนเสือ ซีเมนต์", property: "เนื้อปูนละเอียด เหนียวลื่นเป็นพิเศษ จัดแต่งแนวง่าย ไม่หดตัว เหมาะสำหรับงานก่ออิฐและฉาบผนัง" },
      { name: "ปูนลูกดิ่ง / ปูนจระเข้", property: "ปูนฉาบผิวบาง (Skim Coat) และกาวซีเมนต์ปูกระเบื้อง แรงยึดเกาะสูงพิเศษ ป้องกันปัญหากระเบื้องระเบิด" }
    ]
  },
  "เหล็กโครงสร้าง": {
    title: "คุณสมบัติ เหล็กโครงสร้าง (Structural Steel)",
    description: "เหล็กแปรรูปหลากหลายขนาด ได้มาตรฐาน มอก. แข็งแรง ทนทานต่องานคำนวณโครงสร้าง",
    items: [
      { name: "เหล็กกล่อง / เหล็กแป (Square Pipes)", property: "ความหนาเต็มมิลลิเมตร ผิวเรียบเนียน ไร้รอยตะเข็บแตก เหมาะสำหรับงานทำโครงหลังคาบ้านและโครงสร้างทั่วไป" },
      { name: "เหล็กเส้น / เหล็กข้ออ้อย (Deformed Bars)", property: "เหนียว ดัดโค้งง่ายตามมาตรฐานวิศวกรรม มีบั้งลึกช่วยเพิ่มแรงยึดเกาะกับเนื้อคอนกรีตในงานฐานราก" },
      { name: "เหล็กฉาก / เหล็กแบน (Angles & Flats)", property: "มุมฉากคมชัด 90 องศาเต็มพิกัด รับแรงบิดและแรงกดทับได้ดีเยี่ยมสม่ำเสมอตลอดทั้งเส้น" }
    ]
  },
  "สีทาบ้าน": {
    title: "คุณสมบัติ สีทาบ้าน (Paint & Coatings)",
    description: "นวัตกรรมสีปกป้องพื้นผิวอาคาร ทนแดด ทนฝนเมืองไทย สะท้อนความร้อนได้ดี",
    items: [
      { name: "TOA (4 Seasons / Shield-1)", property: "เทคโนโลยีอะคริลิกแท้ 100% สะท้อนความร้อนจากรังสี UV ช่วยให้บ้านเย็น เช็ดล้างทำความสะอาดง่าย" },
      { name: "BegerCool (เบเยอร์คูล)", property: "ผสมไมโครสเฟียร์เซรามิก กันความร้อนยอดเยี่ยม ช่วยลดอุณหภูมิพื้นผิวผนังบ้านและประหยัดค่าไฟ" },
      { name: "สีเคลือบเงา Kobe / สีกันสนิม", property: "ฟิล์มสีหนา เงางามสูง ยึดเกาะแน่นหนา แห้งไว ช่วยปกป้องพื้นผิวเหล็กจากการเกิดสนิมได้อย่างยาวนาน" }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inject the CSS styles directly into the document so you don't even have to change style.css
  const style = document.createElement('style');
  style.textContent = `
    .custom-modal-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
    }
    .custom-modal-overlay.active { opacity: 1; pointer-events: auto; }
    .custom-modal-box {
      background: #1e1e24; border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 30px; border-radius: 12px; width: 90%; max-width: 550px;
      color: #fff; position: relative; box-shadow: 0 15px 40px rgba(0,0,0,0.5);
      transform: translateY(20px); transition: transform 0.3s ease;
      font-family: 'Inter', sans-serif;
    }
    .custom-modal-overlay.active .custom-modal-box { transform: translateY(0); }
    .custom-modal-close {
      position: absolute; top: 15px; right: 20px; background: none;
      border: none; color: #888; font-size: 28px; cursor: pointer; transition: color 0.2s;
    }
    .custom-modal-close:hover { color: #ff4d4d; }
    .custom-modal-box h2 { margin-top: 0; font-size: 1.6rem; color: #fff; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
    .custom-modal-box .desc { color: #aaa; font-size: 0.9rem; margin-bottom: 20px; }
    .property-item { background: rgba(255,255,255,0.05); padding: 12px 15px; border-radius: 6px; margin-bottom: 12px; border-left: 4px solid #fff; }
    .property-item strong { display: block; color: #fff; font-size: 1rem; margin-bottom: 4px; }
    .property-item p { margin: 0; color: #ccc; font-size: 0.85rem; line-height: 1.4; }
  `;
  document.head.appendChild(style);

  // 2. Create the Modal elements dynamically in the DOM
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'custom-modal-overlay';
  
  const modalBox = document.createElement('div');
  modalBox.className = 'custom-modal-box';
  
  const closeBtn = document.createElement('button');
  closeBtn.className = 'custom-modal-close';
  closeBtn.innerHTML = '&times;';
  
  const modalContentContainer = document.createElement('div');
  
  modalBox.appendChild(closeBtn);
  modalBox.appendChild(modalContentContainer);
  modalOverlay.appendChild(modalBox);
  document.body.appendChild(modalOverlay);

  // 3. Find all "VIEW MORE" buttons and attach the click events
  const viewMoreButtons = document.querySelectorAll(".btn-shop");

  viewMoreButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Get the closest card component
      const card = e.target.closest(".shop-card");
      if (!card) return;

      // Extract the <h3> heading text (e.g., "ปูนซีเมนต์", "เหล็กโครงสร้าง", "สีทาบ้าน")
      const categoryTitle = card.querySelector("h3").textContent.trim();
      const data = productData[categoryTitle];

      if (data) {
        // Build the inner interactive HTML data layout
        let itemsListHtml = data.items.map(item => `
          <div class="property-item">
            <strong>${item.name}</strong>
            <p>${item.property}</p>
          </div>
        `).join("");

        modalContentContainer.innerHTML = `
          <h2>${data.title}</h2>
          <p class="desc">${data.description}</p>
          <div style="max-height: 350px; overflow-y: auto;">
            ${itemsListHtml}
          </div>
        `;

        // Turn display layout on
        modalOverlay.classList.add("active");
      }
    });
  });

  // 4. Close functions
  closeBtn.addEventListener("click", () => modalOverlay.classList.remove("active"));
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
});