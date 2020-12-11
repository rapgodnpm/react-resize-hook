declare module 'react-resize-hook' {
  type IUseResizeObserverElement = {
    element: HTMLElement
  } | {
    watchEntirePage: true,
  }

  export type IUseResizeObserverProps = IUseResizeObserverElement & {
    handleWidth?: boolean,
    handleHeight?: boolean,
  }

  export const useResizeObserver: (props: IUseResizeObserverProps) => {
    width?: number,
    height?: number,
  }
}
