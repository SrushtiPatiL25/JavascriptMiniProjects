document.addEventListener("DOMContentLoaded", () => {
    const passwordBox = document.getElementById("passwordBox");
    const copyBtn = document.getElementById("copyBtn");
    const generateBtn = document.getElementById("generateBtn");
    const toggleVisibility = document.getElementById("toggleVisibility");
  
    generateBtn.addEventListener("click", generatePassword);
    copyBtn.addEventListener("click", copyPassword);
    toggleVisibility.addEventListener("change", togglePasswordVisibility);
  
    function generatePassword() {
      const length = document.getElementById("length").value;
      const useUpper = document.getElementById("uppercase").checked;
      const useLower = document.getElementById("lowercase").checked;
      const useNumbers = document.getElementById("numbers").checked;
      const useSymbols = document.getElementById("symbols").checked;
  
      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+~<>?[]{}";
  
      let allChars = "";
      if (useUpper) allChars += upper;
      if (useLower) allChars += lower;
      if (useNumbers) allChars += numbers;
      if (useSymbols) allChars += symbols;
  
      if (allChars.length === 0) {
        passwordBox.value = "";
        passwordBox.placeholder = "❌ Select at least one character type!";
        copyBtn.disabled = true;
        return;
      }
  
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
      }
  
      passwordBox.value = password;
      copyBtn.disabled = false;
      passwordBox.placeholder = "Your password will appear here";
    }
  
    function copyPassword() {
      const password = passwordBox.value;
  
      if (!password) return;
  
      navigator.clipboard.writeText(password).then(() => {
        copyBtn.textContent = "✅ Copied!";
        setTimeout(() => {
          copyBtn.textContent = "📋 Copy to Clipboard";
        }, 1500);
      });
    }
  
    function togglePasswordVisibility() {
      passwordBox.type = toggleVisibility.checked ? "text" : "password";
    }
  });
  