class Programadores {
    private _programadores: Programador[] = [];

    adiciona(programador: Programador) {
        this._programadores.push(programador);
    }

    paraArray(){
        return [].concat(this._programadores);
    }
}