export const prepositions: string[] = [
    "por", "a", "para", "de", "em", "o", "pelo", "ao", "pro", "do",
    "no", "a", "pela", "à", "pra", "da", "na", "os", "pelos", "aos",
    "pros", "dos", "nos", "as", "pelas", "às", "pras", "das", "nas",
    "dum", "num", "duma", "numa", "uns", "duns", "nuns", "umas", "dumas",
    "numas", "dele", "nele", "dela", "nela", "deles", "neles", "delas", "nelas",
    "este", "deste", "neste", "disto", "nisto", "desse",
    "nesse", "disso", "nisso", "àquele", "praquele",
    "daquele", "naquele", "àquilo", "praquilo", "daquilo", "naquilo"
];

export function ehPreposicao(str: string) : boolean {
    return !!prepositions.find(preposition => str === preposition);
}