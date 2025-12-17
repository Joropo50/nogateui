# @nogateui/skeleton

A beginner-friendly React Skeleton Loader component.

## Why

Contributing to open source shouldn’t be hard, but for many people it is.

This package is part of **NoGateUI**, an open-source React UI library built to make contributing feel accessible, not intimidating. We prioritise learning, iteration, and collaboration over gatekeeping.

## Install

```bash
npm install @nogateui/skeleton
```

## Usage

```tsx
import { Skeleton } from "@nogateui/skeleton";

<Skeleton width={200} height={20} />
<Skeleton variant="circle" width={40} height={40} />
```

## Props

| Name    | Type                         | Default | Description            |
| ------- | ---------------------------- | ------- | ---------------------- |
| width   | number \| string             | "100%"  | Width of the skeleton  |
| height  | number \| string             | 16      | Height of the skeleton |
| variant | "text" \| "rect" \| "circle" | "text"  | Shape variant          |

## Contributing

We operate with an approximate **95% pull request acceptance rate**.

This means we default to merging and improving together instead of rejecting contributions over small mistakes. If something isn’t perfect, we guide, iterate, and refactor openly.

Contributions of any size are welcome. Beginners and experienced developers alike are encouraged to contribute.

## License

MIT
