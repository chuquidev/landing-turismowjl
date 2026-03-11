import { onMounted, onUnmounted } from "vue";

/**
 * useScrollAnimation
 * Observa todos los elementos con clase `.reveal` y les añade
 * `.visible` cuando entran al viewport, disparando la animación CSS.
 *
 * @param {string} selector  - Selector CSS de los elementos a observar (default: '.reveal')
 * @param {number} threshold - Porcentaje del elemento visible para disparar (default: 0.1)
 */
export function useScrollAnimation(selector = ".reveal", threshold = 0.1) {
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold },
    );

    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  });

  onUnmounted(() => {
    observer?.disconnect();
  });
}
