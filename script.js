// script.js
function redirectToProduct(productPage) {
    window.location.href = productPage;
  }


function redirectToSamePage() {
  // ใช้ window.location.href เพื่อนำทางไปยัง URL ของหน้าปัจจุบัน
 //window.open(window.location.href, '_blank') //แบบที่1 เปลี่ยนหน้าต่าง
  
 window.location.href = window.location.href; //แบบที่2 หน้าเดิม

  // หรือใช้ window.open() เพื่อเปิดหน้าเว็บใหม่ในหน้าเดียวกันหรือหน้าใหม่
  // window.open(window.location.href, '_blank');
}

const createSnowflake = () => {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  document.querySelector('.snowflakes').appendChild(snowflake);
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
};

setInterval(createSnowflake, 200);
