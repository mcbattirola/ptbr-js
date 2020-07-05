import { ehPreposicao } from '../preposicao';

test('should return true if input is preposition', () => {
    expect(ehPreposicao('de')).toBe(true);
    expect(ehPreposicao('a')).toBe(true);
    expect(ehPreposicao('do')).toBe(true);
})

test('should return false if input is not preposition', () => {
    expect(ehPreposicao('oi')).toBe(false);
    expect(ehPreposicao('aranha')).toBe(false);
    expect(ehPreposicao('teste')).toBe(false);
})