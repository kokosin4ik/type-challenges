type AnyOf<T extends any[]> = T[number] extends 0 | '' | false | [] | undefined | null | { [key: string]: never }
    ? false : true