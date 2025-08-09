import { readonly } from '@vue/reactivity';
import type { Alpine } from 'alpinejs';

export default function props(Alpine: Alpine) {
  Alpine.directive('prop', (el, { value, expression }, { effect }) => {
    if (!el.hasAttribute('x-data') || !value) {
      return;
    }

    const $props = initPropsObject(Alpine, el);

    effect(() => {
      const field = value.toLowerCase().replace(/-[^-]/g, (x) => x[1].toUpperCase());
      const result = Alpine.evaluate(el.parentElement!, expression);
      $props[field] = result;
    });
  }).before('bind');
}

const propsObjects = new WeakMap();

function initPropsObject(Alpine: Alpine, el: Element) {
  if (propsObjects.has(el)) {
    return propsObjects.get(el);
  }

  const $props = Alpine.reactive({});
  propsObjects.set(el, $props);

  Alpine.addScopeToNode(el, {
    $props: readonly($props),
  });

  return $props;
}
