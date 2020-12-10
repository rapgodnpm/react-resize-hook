import React from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const useResizeObserver = ({
  handleHeight = true,
  handleWidth = true,
  ...props
}) => {
  const [width, setWidth] = React.useState(undefined)
  const [height, setHeight] = React.useState(undefined)

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

  function updateWidthAndHeightOnResize(entries) {
    entries.forEach(({ contentRect: { width: contentWidth, height: contentHeight } }) => {
      handleWidth && contentWidth !== null && setWidth(contentWidth)
      handleHeight && contentHeight !== null && setHeight(contentHeight)
    })
  }

  return {
    width,
    height,
  }
}
