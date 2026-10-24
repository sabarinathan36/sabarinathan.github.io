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
  var VCARD_PHOTO = 'Assets/connect/vcard-photo.jpg';

  function foldLine(line) {
    // vCard lines should be folded at 75 characters
    var out = [];
    while (line.length > 75) { out.push(line.slice(0, 75)); line = ' ' + line.slice(75); }
    out.push(line);
    return out.join('\r\n');
  }

  function buildVCard(photoBase64) {
    var lines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:C;Sabari Nathan;;;',
      'FN:Sabari Nathan C',
      'ORG:Navins Housing and Property Pvt Ltd',
      'TITLE:Head of IT & Digital Transformation',
      'TEL;TYPE=CELL:+919744230986',
      'EMAIL;TYPE=INTERNET:sabarinathan36@gmail.com',
      'URL:https://sabarinathan.co.in',
      'URL;TYPE=LinkedIn:https://www.linkedin.com/in/sabarinathan-chelladurai/',
      'X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/sabarinathan-chelladurai/',
      'ADR;TYPE=WORK:;;;Chennai;Tamil Nadu;;India'
    ];
    if (photoBase64) lines.push(foldLine('PHOTO;ENCODING=b;TYPE=JPEG:' + photoBase64));
    lines.push('END:VCARD');
    return lines.join('\r\n');
  }

  function loadPhoto() {
    if (!window.fetch || !window.FileReader) return Promise.resolve(null);
    return fetch(VCARD_PHOTO)
      .then(function (r) { if (!r.ok) throw new Error('photo'); return r.blob(); })
      .then(function (blob) {
        return new Promise(function (resolve) {
          var reader = new FileReader();
          reader.onloadend = function () {
            var data = String(reader.result || '');
            resolve(data.indexOf(',') > -1 ? data.split(',')[1] : null);
          };
          reader.onerror = function () { resolve(null); };
          reader.readAsDataURL(blob);
        });
      })
      .catch(function () { return null; });
  }

  function downloadVCard(vcard) {
    var blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'SabariNathan.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function saveContact(button) {
    loadPhoto().then(function (photo) {
      try {
        downloadVCard(buildVCard(photo));
        confirmSaved(button);
      } catch (err) {
        try { downloadVCard(buildVCard(null)); confirmSaved(button); } catch (e) {}
      }
    });
  }

  /* --------------------------------------------------------------------
     QR code sheet
  -------------------------------------------------------------------- */
  function initQr() {
    var btn = document.getElementById('qrBtn');
    var modal = document.getElementById('qrModal');
    var close = document.getElementById('qrClose');
    if (!btn || !modal) return;
    function open() { modal.hidden = false; document.body.classList.add('qr-open'); if (close) close.focus(); }
    function shut() { modal.hidden = true; document.body.classList.remove('qr-open'); btn.focus(); }
    btn.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    modal.addEventListener('click', function (e) { if (e.target === modal) shut(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) shut(); });
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
    initQr();

    var saveBtn = document.getElementById('saveContactBtn');
    if (saveBtn) {
      saveBtn.addEventListener('click', function () {
        saveContact(saveBtn);
      });
    }
  });
})();
