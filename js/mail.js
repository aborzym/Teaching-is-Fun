const msgStatus = document.querySelector(".msg-status");

if (document.location.search === "?message_status=sent") {
  msgStatus.classList.add("success");
  msgStatus.textContent = "Wiadomość wysłana! Dziękuję za kontakt.";

  setTimeout(() => {
    msgStatus.classList.remove("success");
  }, 3000);
}

if (document.location.search === "?message_status=error") {
  msgStatus.classList.add("error");
  msgStatus.textContent = "Błąd wysyłania wiadomości. Spróbuj jeszcze raz.";

  setTimeout(() => {
    msgStatus.classList.remove("error");
  }, 3000);
}
