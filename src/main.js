document.getElementById("connect").addEventListener("click", async () => {
  if (typeof window.kasware !== 'undefined') {
    alert('KasWare Wallet is installed!');
  } else {
    try {
      let accounts = await window.kasware.requestAccounts();
      console.log('connect success', accounts);
    } catch (e) {
      console.log('connect failed', e);
    }
  }
})