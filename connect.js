(function () {
  'use strict';

  /* --------------------------------------------------------------------
     Stagger the action-card entrance so the grid animates as one
     orchestrated sequence rather than popping in all at once.
  -------------------------------------------------------------------- */
  function staggerActionCards() {
    var cards = document.querySelectorAll('.action-card');
    cards.forEach(function (card, i) {
      card.style.setProperty('--i', i);
      card.setAttribute('data-animate', String(i + 2));
    });
  }

  /* --------------------------------------------------------------------
     Build and trigger download of SabariNathan.vcf
  -------------------------------------------------------------------- */
  function buildVCard() {
    var lines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Nathan;Sabari;;;',
      'FN:Sabari Nathan',
      'TITLE:IT Operations & Digital Transformation Leader',
      'TEL;TYPE=CELL:+919744230986',
      'EMAIL;TYPE=INTERNET:sabarinathan36@gmail.com',
      'URL:https://sabarinathan.co.in',
      'X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/sabarinathan-chelladurai/',
      'END:VCARD'
    ];
    return lines.join('\r\n');
  }

  function saveContact(button) {
    try {
      var vcard = buildVCard();
      var blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
      var url = URL.createObjectURL(blob);

      var link = document.createElement('a');
      link.href = url;
      link.download = 'SabariNathan.vcf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);

      confirmSaved(button);
    } catch (err) {
      // Fallback: navigate directly to the file reference if Blob download fails
      window.location.href = 'SabariNathan.vcf';
    }
  }

  function confirmSaved(button) {
    if (!button) return;
    var label = button.querySelector('span:last-child');
    var icon = button.querySelector('.action-icon i');
    var originalText = label ? label.textContent : null;
    var originalIconClass = icon ? icon.className : null;

    button.classList.add('saved');
    if (icon) icon.className = 'fa-solid fa-check';
    if (label) label.textContent = 'Saved';

    setTimeout(function () {
      button.classList.remove('saved');
      if (icon && originalIconClass) icon.className = originalIconClass;
      if (label && originalText) label.textContent = originalText;
    }, 2200);
  }

  /* --------------------------------------------------------------------
     Init
  -------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    staggerActionCards();

    var saveBtn = document.getElementById('saveContactBtn');
    if (saveBtn) {
      saveBtn.addEventListener('click', function () {
        saveContact(saveBtn);
      });
    }
  });
})();
