/* ==========================================================================
   Unruly Creative Taste Index: brand.js
   Motion and small interactions. No dependencies.
   Timings match the tokens in brand.css.
   Loops are skipped when the visitor prefers reduced motion.
   The live site was not tested against reduced motion. Honouring it here is [X].
   ========================================================================== */

(() => {
  const root = document.documentElement;
  root.classList.add('js');

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ----------------------------------------------------------------------
  // 1. Marquee
  //    .marquee [data-marquee] holds one .marquee__track of items.
  //    The site animates .scroll for 60s linear, from translateX(0)
  //    to translateX(calc(-100% - 1rem)). [M]
  //    This clones the track once and slides the pair by half its width,
  //    which is the same distance. The half-width is [I].
  // ----------------------------------------------------------------------
  function initMarquee() {
    document.querySelectorAll('[data-marquee]').forEach((marquee) => {
      const track = marquee.querySelector('.marquee__track');
      if (!track || reduce) return;
      const row = document.createElement('div');
      row.className = 'marquee__row is-scrolling';
      const copy = track.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      marquee.insertBefore(row, track);
      row.append(track, copy);
    });
  }

  // ----------------------------------------------------------------------
  // 2. Float
  //    [data-float] rises 15px and returns, 3s ease-in-out, infinite. [M]
  // ----------------------------------------------------------------------
  function initFloat() {
    if (reduce) return;
    document.querySelectorAll('[data-float]').forEach((el) => {
      el.classList.add('is-floating');
    });
  }

  // ----------------------------------------------------------------------
  // 3. Spin
  //    [data-spin] rotates one full turn every 12s, linear, infinite. [M]
  // ----------------------------------------------------------------------
  function initSpin() {
    if (reduce) return;
    document.querySelectorAll('[data-spin]').forEach((el) => {
      el.classList.add('is-spinning');
    });
  }

  // ----------------------------------------------------------------------
  // 4. Copy on click
  //    [data-copy] copies its value and flashes "Copied".
  //    Used by the swatches on index.html. Not a site behaviour. [X]
  // ----------------------------------------------------------------------
  function initCopy() {
    document.querySelectorAll('[data-copy]').forEach((el) => {
      el.addEventListener('click', () => {
        const value = el.getAttribute('data-copy');
        const label = el.querySelector('[data-copy-label]');
        if (label) {
          const original = label.textContent;
          label.textContent = 'Copied';
          setTimeout(() => { label.textContent = original; }, 900);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).catch(() => {});
        }
      });
    });
  }

  const boot = () => {
    initMarquee();
    initFloat();
    initSpin();
    initCopy();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
