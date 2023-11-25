type PromiseAwaited<T> =  T extends PromiseLike<infer R> ? Awaited<R> : T


declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
    [P in keyof T]: PromiseAwaited<T[P]>
}>
