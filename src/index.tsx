import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

type IUseResizeObserverElement = {
  elementRef: React.MutableRefObject<HTMLElement>,
  parentLevel?: number,
} | {
  watchEntirePage: true,
}

type IUseResizeObserverProps = IUseResizeObserverElement & {
  handleWidth?: boolean,
  handleHeight?: boolean,
}

export const useResizeObserver = ({
  handleHeight = true,
  handleWidth = true,
  ...props
}: IUseResizeObserverProps): {
  width?: number,
  height?: number,
} => {
  const [width, setWidth] = React.useState(undefined as number)
  const [height, setHeight] = React.useState(undefined as number)

  React.useEffect(attachObserverEffect)

  function attachObserverEffect() {
    if (!props['watchEntirePage'] && !props['elementRef'].current) {
      return
    }

    const elementToObserve = getElementToObserve()

    const resizeObserver = new ResizeObserver(updateWidthAndHeightOnResize)
    resizeObserver.observe(elementToObserve)

    return () => {
      resizeObserver.disconnect()
    }
  }

  function getElementToObserve(): HTMLElement {
    if (props['watchEntirePage']) {
      return document.body
    }

    if (!props['parentLevel']) {
      return props['elementRef'].current
    }

    let elementToObserve = props['elementRef'].current as HTMLElement

    for (let i = 0; i < props['parentLevel']; i++) {
      elementToObserve = elementToObserve.parentElement
    }

    return elementToObserve
  }

  function updateWidthAndHeightOnResize(
    [{ contentRect: { width: contentWidth, height: contentHeight } }]: ResizeObserverEntry[]
  ) {
    handleWidth && contentWidth !== null && setWidth(contentWidth)
    handleHeight && contentHeight !== null && setHeight(contentHeight)
  }

  return {
    width,
    height,
  }
}
