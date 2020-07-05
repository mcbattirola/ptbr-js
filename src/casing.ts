import { ehPreposicao } from './preposicao';

export function capitalize(str: string): string {
    const firstLetter = str.charAt(0).toUpperCase();
    if (!firstLetter) return '';
    const rest = str.slice(1);
    return firstLetter.toUpperCase() + (rest ? rest.toLowerCase() : '');
}

export function capitalizeEveryWord(str: string, scapePreposition?: boolean) : string {
    let words = str.split(' ');
    let wordsCapitalized = '';
    words.forEach(word => {
        if (scapePreposition) {
            wordsCapitalized += ehPreposicao(word)
                ? word.toLowerCase() + ' '
                : capitalize(word) + ' ';
        } else {
            wordsCapitalized += capitalize(word) + ' ';
        }
    });
    return wordsCapitalized.trim();
};