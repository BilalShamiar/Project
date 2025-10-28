// Detect mobile devices OR small screens
if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768) {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      background:#0d0d0d;
      color:#fff;
      font-family:sans serif;
      text-align:center;
      flex-direction:column;">
      <h1 style="font-size:24px;margin-bottom:10px;">Desktop Only</h1>
      <p style="font-size:16px;">Please open this website on a computer for the best experience.</p>
    </div>
  `;
}