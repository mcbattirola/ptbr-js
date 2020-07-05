import { removeCedilha } from '../cedilha';

test('should remove replace all the ocurrences of ç with c', () => {
    expect(removeCedilha('Espaço')).toEqual('Espaco');
})
test('should respect the casing', () => {
    expect(removeCedilha('çÇ')).toEqual('cC');
})