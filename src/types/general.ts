/**
 * Get the value type(s) from an object
 */
export type ValueOf<T> = T[keyof T];

export type OnClick<Element, ReturnType = void> = (event: React.MouseEvent<Element, MouseEvent>) => ReturnType;
