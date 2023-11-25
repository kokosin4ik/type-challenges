type LengthOfString1<S extends string, Acc extends string[] = []> = 
 S extends `${infer first}${infer R}` ? LengthOfString1<R, [...Acc, first]> : Acc['length']

