# react-resize-observer
Resize observer hook for react with typescript support and resize observer polyfill.

## Install

npm install --save react-resize-hook

or

yarn add react-resize-hook

## How to

To watch for resizes on an element use:

```javascript
...
import { useResizeObserver } from 'react-resize-hook'
...

const SomeFancyComponent = () => {
  const containerRef = React.useRef(null)
  const { width, height } = useResizeObserver({
    element: containerRef.current,
  })

  return (
    <div ref={containerRef}>
      ...
    </div>
  )
}

...
```

By default `useResizeObserver` watches for both `width` and `height` changes. You can only listen to `width` or `height` by adjusting the `useResizeObserver` params:

```javascript
  useResizeObserver({
    element: someDomElement,
    handleWidth: true // or false,
    handleHeight: true // or false,
  })
```

You can also observe changes on the entire page by calling:

```javascript
  useResizeObserver({
    watchEntirePage: true,
    handleWidth: true // or false,
    handleHeight: true // or false,
  })
```

Before the component is mounted (or before the first useEffect) `width` and `height` are undefined.
