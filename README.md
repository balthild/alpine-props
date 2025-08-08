# alpine-props

An alpine plugin that adds props functionality. Useful for creating reusable components.

## Installation

```
# npm
npm install alpine-props

# yarn
yarn add alpine-props

# pnpm
pnpm install alpine-props
```

## Usage

Setup the plugin

```js
import props from 'alpine-props';

document.addEventListener('alpine:init', () => {
    Alpine.plugin(props);
});
```

Pass the prop with `x-prop:my-prop-name="value"`, access the prop with `$props.myPropName`.

```html
<div x-data="{ count: 0 }">
    <p>Count: <span x-text="count"></span></p>
    <p><button @click="count++">Increase</button></p>

    <div x-data="{ childCount: 0 }" x-prop:parent-count="count">
        <p>Parent count: <span x-text="$props.parentCount"></span></p>
        <p>Child count: <span x-text="childCount"></span></p>
        <p>Total count: <span x-text="$props.parentCount + childCount"></span></p>

        <p><button @click="childCount++">Increase child count</button></p>
    </div>
</div>
```
