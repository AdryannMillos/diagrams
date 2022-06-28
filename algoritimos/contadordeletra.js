function comFilter(frase, letra) {
    console.log([...frase].filter(letraProcurada=> letraProcurada === letra).length);
}

comFilter('lord of the rings', 'o');