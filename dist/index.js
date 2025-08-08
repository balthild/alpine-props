//#region src/index.ts
function props(Alpine) {
	Alpine.directive("prop", (el, { value, expression }, { effect }) => {
		if (!el.hasAttribute("x-data") || !value) return;
		const $props = initPropsObject(Alpine, el);
		effect(() => {
			const field = value.replace(/-./g, (x) => x[1].toUpperCase());
			const result = Alpine.evaluate(el.parentElement, expression);
			$props[field] = result;
		});
	}).before("bind");
}
const propsObjects = /* @__PURE__ */ new WeakMap();
function initPropsObject(Alpine, el) {
	if (propsObjects.has(el)) return propsObjects.get(el);
	const $props = Alpine.reactive({});
	Alpine.addScopeToNode(el, { $props });
	propsObjects.set(el, $props);
	return $props;
}

//#endregion
export { props as default };