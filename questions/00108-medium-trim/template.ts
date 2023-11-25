type TrimL<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimL<R> : S
type TrimR<S extends string> = S extends `${infer L}${' ' | '\n' | '\t'}` ? TrimR<L> : S


type Trim<S extends string> = TrimL<TrimR<S>>
