const removeCedilha = (text: String): String => {
    return text.split('ç').join('c').split('Ç').join('C');
}

export { removeCedilha };