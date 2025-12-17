# @nogateui/button

A beginner-friendly, flexible React Button component.

This package is part of **NoGateUI**, an open-source React UI component ecosystem focused on making open source contributions accessible, welcoming, and practical.

---

## Why

Many developers want to contribute to open source but don’t know where to start or are afraid of getting things wrong.

NoGateUI exists to remove that fear.

This Button component is intentionally simple, real-world, and easy to understand. It’s designed as a safe entry point into open source while still being useful in production projects.

---

## Install

```bash
npm install @kendevelops/nogateui-button
```

---

## Usage

```tsx
import { Button } from "@kendevelops/nogateui-button";

<Button>Primary</Button>

<Button variant="outline">Outline</Button>

<Button variant="ghost">Ghost</Button>

<Button size="lg">Large Button</Button>

<Button loading>Loading...</Button>
```

---

## Props

| Prop     | Type                              | Default   | Description                             |
| -------- | --------------------------------- | --------- | --------------------------------------- |
| variant  | `primary` \| `outline` \| `ghost` | `primary` | Visual style of the button              |
| size     | `sm` \| `md` \| `lg`              | `md`      | Size of the button                      |
| loading  | `boolean`                         | `false`   | Shows loading state and disables button |
| disabled | `boolean`                         | `false`   | Disables the button                     |
| children | `ReactNode`                       | —         | Button content                          |

All native HTML button props are supported.

---

## Accessibility

- Uses native `<button>` element
- Supports disabled state
- Keyboard accessible by default

---

## Contributing

We operate with an approximate **95% pull request acceptance rate**.

This means we default to merging and improving together instead of rejecting contributions over small mistakes. If something isn’t perfect, we guide, iterate, and refactor openly.

This project is beginner-friendly by design, but experienced developers are also welcome to contribute, review code, and help shape the API.

If you’ve ever wanted to contribute to open source but didn’t know where to start, this is for you.

---

## Roadmap

- Hover and focus styles
- Animation variants
- Icon support
- Theme s
