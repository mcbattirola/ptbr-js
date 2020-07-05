import { removeAcentos } from '../acentos'

test('should return the string without any accent marks', () => {
    const withAccent = "socorram-me subi no ônibus em marrocos";
    expect(removeAcentos(withAccent)).not.toMatch(/ô/);

    const vogals = "aeiou";
    const vogalsWithAcute = "áéíóú";
    expect(removeAcentos(vogalsWithAcute)).toEqual(vogals);

    const vogalsWithGrave = "àèìòù";
    expect(removeAcentos(vogalsWithGrave)).toEqual(vogals);

    const vogalsWithCircunflex = "âêîôû";
    expect(removeAcentos(vogalsWithCircunflex)).toEqual(vogals);

    const vogalsThatGoWithTilde="ao";
    const vogalsWithTilde = "ãõ";
    expect(removeAcentos(vogalsWithTilde)).toEqual(vogalsThatGoWithTilde);

    const vogalsWithDieresis = "äëïöü";
    expect(removeAcentos(vogalsWithDieresis)).toEqual(vogals);
});

test('should not change a string without accents', () => {
    const regularString = "vou cozinhar daqui a alguns instantes";
    expect(removeAcentos(regularString)).toEqual(regularString)
});