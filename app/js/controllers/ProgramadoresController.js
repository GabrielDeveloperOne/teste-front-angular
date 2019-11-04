class ProgramadoresController {
    constructor() {
        this._programadores = new Programadores();
        this._programadoresView = new ProgramadoresView('#programadoresView');
        this._inputNome = document.querySelector('#nome');
        this._inputSobreNome = document.querySelector('#sobrenome');
        this._inputDataDeNascimento = document.querySelector('#data');
        this._inputIdade = document.querySelector('#idade');
        this._inputLagFavorita = document.querySelector('#langFavorita');
        this._inputObservacoes = document.querySelector('#obs');
        this._programadoresView.update(this._programadores);
    }
    adiciona(event) {
        event.preventDefault();
        const programador = new Programador(this._inputNome.textContent, this._inputSobreNome.textContent, new Date(this._inputDataDeNascimento.value.replace(/-/g, ',')), parseInt(this._inputIdade.value), this._inputLagFavorita.textContent, this._inputObservacoes.textContent);
        this._programadores.adiciona(programador);
        this._programadoresView.update(this._programadores);
    }
}
