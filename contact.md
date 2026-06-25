---
layout: page
title: Contact
---

<div class="c-contact-form">
  <div class="container">
    <div class="row">
      <div class="col col-12">
        <div class="c-contact-form__form-box">
          <div class="c-contact-form__contact-head">
            <h2 class="c-contact-form__contact-title">Me contacter</h2>
            <p class="c-contact-form__contact-description">
              Envoyez-moi un message via le formulaire ci-dessous.
            </p>
          </div>
          <form class="c-contact-form__form" id="contact-form">
            <div class="c-contact-form__form-group">
              <input class="c-contact-form__form-input" type="text" name="name" placeholder="Nom" required>
            </div>
            <div class="c-contact-form__form-group">
              <input class="c-contact-form__form-input" type="email" name="email" placeholder="Email" required>
            </div>
            <div class="c-contact-form__form-group">
              <input class="c-contact-form__form-input" type="text" name="subject" placeholder="Sujet" required>
            </div>
            <div class="c-contact-form__form-group">
              <textarea class="c-contact-form__form-input" name="message" rows="6" placeholder="Message" required></textarea>
            </div>
            <div class="c-contact-form__form-group c-contact-form__form-group--button">
              <button class="c-button c-button--primary c-button--large" type="submit">Envoyer</button>
            </div>
          </form>
          <div id="form-status" style="display:none;text-align:center;padding:24px;border-radius:8px;font-size:18px;font-weight:600;"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const status = document.getElementById("form-status");
  const form = this;
  const btn = form.querySelector('button[type="submit"]');
  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };
  btn.disabled = true;
  btn.textContent = "Envoi en cours...";
  status.style.display = "none";
  try {
    await fetch("https://script.google.com/macros/s/AKfycbzvES-Rw3s_Wr5DKYEgPs2rmNVb8SYNQh11km2Am6Xxdmvkf2PBNl_fdDnI1YnNR25TSQ/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    });
    form.style.display = "none";
    status.style.display = "block";
    status.style.color = "#1495a7";
    status.style.background = "#e6f4f6";
    status.textContent = "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.";
  } catch (err) {
    btn.disabled = false;
    btn.textContent = "Envoyer";
    status.style.display = "block";
    status.style.color = "#e74c3c";
    status.style.background = "#fde8e8";
    status.textContent = "Une erreur est survenue. Veuillez réessayer ou me contacter via LinkedIn.";
  }
});
</script>
