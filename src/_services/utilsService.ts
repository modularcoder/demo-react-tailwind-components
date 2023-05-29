export function debounce<T extends Function>(cb: T, wait = 200) {
    let h: NodeJS.Timeout;

    let callable = (...args: any) => {
        clearTimeout(h);
        h = setTimeout(() => cb(...args), wait);
    };

    return (callable as any) as T;
}
