export type Unit = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y';

type FormatterAtom<T extends Unit> = {
  [K in Unit as K extends T ? never : K]?: string;
} & {
  [K in T]: string;
};

export type Formatter = Unit extends infer U
  ? U extends Unit
    ? FormatterAtom<U>
    : never
  : never;
