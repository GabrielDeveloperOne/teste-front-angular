class Programadores {
    constructor() {
        this._programadores = [];
    }
    adiciona(programador) {
        this._programadores.push(programador);
    }
    paraArray() {
        return [].concat(this._programadores);
    }
}
