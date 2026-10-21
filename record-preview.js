// Local sample-record interaction only. No accounts, storage, or network calls.
(() => {
  const records = [{"merchant":"Adobe","detail":"Software · Today","amount":"-$59.99","status":"Ready","confidence":"98%","evidence":"Invoice matched","category":"Software & tools"},{"merchant":"Home Depot","detail":"Materials · Yesterday","amount":"-$284.16","status":"Review","confidence":"72%","evidence":"Receipt needed","category":"Needs your input"},{"merchant":"Stripe","detail":"Income · Jun 24","amount":"+$2,480.00","status":"Ready","confidence":"100%","evidence":"Payout reconciled","category":"Business income"}];
  const rows = Array.from(document.querySelectorAll('[data-preview-record]'));
  const panel = document.querySelector('#preview-record-details');
  if (!panel || rows.length === 0) return;

  const confidence = panel.querySelector('.confidence');
  const merchant = panel.querySelector('.clarity-merchant strong');
  const icon = panel.querySelector('.clarity-merchant .merchant-icon');
  const lines = panel.querySelectorAll('.decision-line strong');
  if (!confidence || !merchant || !icon || lines.length !== 2) return;
  let animations = [];

  for (const row of rows) {
    row.addEventListener('click', () => {
      const index = records.findIndex(record => record.merchant === row.dataset.previewRecord);
      if (index < 0) return;
      const record = records[index];
      for (const other of rows) {
        other.classList.toggle('selected', other === row);
        other.setAttribute('aria-pressed', String(other === row));
      }
      panel.setAttribute('aria-label', `Details for ${record.merchant}`);
      confidence.textContent = `${record.confidence} confidence`;
      merchant.textContent = record.merchant;
      icon.textContent = record.merchant.slice(0, 1);
      icon.className = `merchant-icon merchant-${index}`;
      lines[0].textContent = record.category;
      lines[1].textContent = record.evidence;

      for (const animation of animations) animation.cancel();
      animations = [];
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (typeof row.animate !== 'function' || typeof panel.animate !== 'function') return;
      // A small lift on the selected record; its existing details gently pop in.
      animations = [
        row.animate([
          { transform: 'translateX(3px) translateY(0) scale(1)' },
          { transform: 'translateX(3px) translateY(-2px) scale(1.012)', offset: 0.45 },
          { transform: 'translateX(3px) translateY(0) scale(1)' },
        ], { duration: 260, easing: 'cubic-bezier(.2,.75,.2,1)' }),
        panel.animate([
          { opacity: 0.35, transform: 'translateY(8px) scale(.99)' },
          { opacity: 1, transform: 'translateY(0) scale(1)' },
        ], { duration: 240, easing: 'cubic-bezier(.2,.75,.2,1)' }),
      ];
    });
  }
})();
