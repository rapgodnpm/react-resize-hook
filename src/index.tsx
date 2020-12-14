import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

type IUseResizeObserverElement = {
  element: HTMLElement
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

  const elementToObserve = props['watchEntirePage'] ? document.body : props['element']

  React.useEffect(attachObserverEffect, [elementToObserve])

  function attachObserverEffect() {
    if (!elementToObserve) {
      return
    }

    const resizeObserver = new ResizeObserver(updateWidthAndHeightOnResize)
    resizeObserver.observe(elementToObserve)

    return () => {
      resizeObserver.disconnect()
    }
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
