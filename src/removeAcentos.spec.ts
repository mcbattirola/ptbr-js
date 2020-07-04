import { removeAcento } from './removeAcentos'

test('should return the string without any accent marks', () => {
    const withAccent = "socorram-me subi no ônibus em marrocos";
    expect(removeAcento(withAccent)).not.toMatch(/ô/);

    const vogals = "aeiou";
    const vogalsWithAcute = "áéíóú";
    expect(removeAcento(vogalsWithAcute)).toEqual(vogals);

    const vogalsWithGrave = "àèìòù";
    expect(removeAcento(vogalsWithGrave)).toEqual(vogals);

    const vogalsWithCircunflex = "âêîôû";
    expect(removeAcento(vogalsWithCircunflex)).toEqual(vogals);

    const vogalsThatGoWithTilde="ao";
    const vogalsWithTilde = "ãõ";
    expect(removeAcento(vogalsWithTilde)).toEqual(vogalsThatGoWithTilde);

    const vogalsWithDieresis = "äëïöü";
    expect(removeAcento(vogalsWithDieresis)).toEqual(vogals);
});

test('should not change a string without accents', () => {
    const regularString = "vou cozinhar daqui a alguns instantes";
    expect(removeAcento(regularString)).toEqual(regularString)
});