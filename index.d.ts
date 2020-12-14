declare type IUseResizeObserverElement = {
    element: HTMLElement;
} | {
    watchEntirePage: true;
};
declare type IUseResizeObserverProps = IUseResizeObserverElement & {
    handleWidth?: boolean;
    handleHeight?: boolean;
};
export declare const useResizeObserver: ({ handleHeight, handleWidth, ...props }: IUseResizeObserverProps) => {
    width?: number;
    height?: number;
};
export {};
