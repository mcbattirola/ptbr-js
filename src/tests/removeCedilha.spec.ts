import { removeCedilha } from '../cedilha';

test('should remove replace all the ocurrences of ç with c', () => {
    expect(removeCedilha('Espaço')).toEqual('Espaco');
    expect(removeCedilha('çÇ')).toEqual('cC');
})