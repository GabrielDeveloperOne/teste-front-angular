class Programador {
    constructor(_nome, _sobreNome, _dataDeNascimento, _idade, _langFavorita, _obs) {
        this._nome = _nome;
        this._sobreNome = _sobreNome;
        this._dataDeNascimento = _dataDeNascimento;
        this._idade = _idade;
        this._langFavorita = _langFavorita;
        this._obs = _obs;
        this._nome = _nome;
        this._sobreNome = _sobreNome;
        this._idade = _idade;
        this._dataDeNascimento = _dataDeNascimento;
        this._langFavorita = _langFavorita;
        this._obs = _obs;
    }
    get nome() {
        return this._nome;
    }
    get sobreNome() {
        return this._sobreNome;
    }
    get idade() {
        return this._idade;
    }
    get dataDeNascimento() {
        return this._dataDeNascimento;
    }
    get langFavorita() {
        return this._langFavorita;
    }
    get obs() {
        return this._obs;
    }
}
