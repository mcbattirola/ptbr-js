import { capitalize, capitalizeEveryWord } from '../casing';

//capitalize
test('the first letter of a string will be uppercased', () => {
    expect(capitalize('ronaldo')).toBe('Ronaldo')
    expect(capitalize('my test')).toBe('My test')
})

test('it should not change an empty string', () => {
    expect(capitalize('')).toBe('')
})

test('it should not change the first character if it isnt alphabetical', () => {
    expect(capitalize('5test')).toBe('5test')
    expect(capitalize('!test')).toBe('!test')
    expect(capitalize('@test')).toBe('@test')
    expect(capitalize('/test')).toBe('/test')
})

//capitalizeEveryWord
test('every word should be capitalized', () => {
    expect(capitalizeEveryWord('This is my string')).toBe('This Is My String');
    expect(capitalizeEveryWord('a string do teste terá uppercase')).toBe('A String Do Teste Terá Uppercase');
})

test('if scapePreposition is true, dont capitalize prepositions', () => {
    expect(capitalizeEveryWord('a string do teste terá uppercase', true)).toBe('a String do Teste Terá Uppercase');
})