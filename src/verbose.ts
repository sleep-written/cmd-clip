export function verbose(argv: string[]): boolean {
    if (argv.length === 0) {
        return false;
    }

    const first = argv[0].trim();
    const result = !!first.match(/^:verbose$/gi);

    result && argv.shift();
    return result;
}