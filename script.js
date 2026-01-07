const connectBtn = document.getElementById("connectBtn");
const walletAddress = document.getElementById("walletAddress");

connectBtn.addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      walletAddress.textContent =
        "Connected: " +
        accounts[0].slice(0, 6) +
        "..." +
        accounts[0].slice(-4);
    } catch {
      walletAddress.textContent = "Connection rejected";
    }
  } else {
    walletAddress.textContent = "MetaMask not detected";
  }
});