type Permutation<T, Acc = T> = [T] extends [never]
    ? []
    : Acc extends Acc ?
    [Acc, ...Permutation<Exclude<T, Acc>>] : []
 
// type test = Exclude<'ass' | 'as' , 'ass' | 'as'>

// type a = 'a' | 'b' | 'c';

// type C<T extends string> = T extends T ? `sds${T}` : never;

// type tests = C<a>