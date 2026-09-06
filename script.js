document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('main-nav');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.classList.toggle('is-open', !expanded);
  menuButton.setAttribute('aria-expanded', String(!expanded));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-wrap')) closeMenu();
});
window.matchMedia('(min-width: 581px)').addEventListener('change', closeMenu);
document.getElementById('year').textContent = String(new Date().getFullYear());

// Progressive enhancement: content is visible even when motion is unavailable.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionTargets = document.querySelectorAll(
  '.hero-copy, .section-head, .about-fact, .work-introduction, .principle-card, ' +
  '.drivers-card, .project-card, .bpmn-project, .experience-row, .tech-cloud, ' +
  '.featured-project, .contact-panel'
);
const revealed = new WeakSet();
const activeAnimations = new Set();
let revealObserver;

function playEntrance(element, keyframes, options) {
  const animation = element.animate(keyframes, options);
  activeAnimations.add(animation);
  animation.onfinish = animation.oncancel = () => activeAnimations.delete(animation);
}

function syncMotion() {
  revealObserver?.disconnect();
  activeAnimations.forEach(animation => animation.cancel());
  activeAnimations.clear();
  if (motionPreference.matches || !('IntersectionObserver' in window) ||
      typeof Element.prototype.animate !== 'function') return;

  revealObserver = new IntersectionObserver(entries => {
    let stagger = 0;
    entries.forEach(entry => {
      if (!entry.isIntersecting || revealed.has(entry.target) || motionPreference.matches) return;
      const element = entry.target;
      revealed.add(element);
      revealObserver.unobserve(element);
      const delay = Math.min(stagger++ * 55, 110);
      // Individual translate leaves the card's CSS hover transform intact.
      playEntrance(element, [
        { opacity: 0.55, translate: '0 12px' },
        { opacity: 1, translate: '0 0' }
      ], { duration: 460, delay, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'backwards' });
      element.querySelectorAll('.text-highlight').forEach((highlight, index) => {
        playEntrance(highlight, [
          { backgroundSize: '0% 100%' },
          { backgroundSize: '100% 100%' }
        ], { duration: 540, delay: delay + Math.min(index * 60, 120),
          easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'backwards' });
      });
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
  motionTargets.forEach(element => {
    if (!revealed.has(element)) revealObserver.observe(element);
  });
}

motionPreference.addEventListener('change', syncMotion);
syncMotion();
