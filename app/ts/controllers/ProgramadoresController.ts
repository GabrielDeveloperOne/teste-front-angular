class ProgramadoresController {

    private _inputNome: HTMLInputElement;
    private _inputSobreNome: HTMLInputElement;
    private _inputDataDeNascimento: HTMLInputElement;
    private _inputIdade: HTMLInputElement;
    private _inputLagFavorita: HTMLInputElement;
    private _inputObservacoes: HTMLInputElement;
    private _programadores = new Programadores();
    private _programadoresView = new ProgramadoresView('#programadoresView');

    constructor(){
        
        this._inputNome = <HTMLInputElement>document.querySelector('#nome');
        this._inputSobreNome = <HTMLInputElement>document.querySelector('#sobrenome');
        this._inputDataDeNascimento = <HTMLInputElement>document.querySelector('#data');
        this._inputIdade = <HTMLInputElement>document.querySelector('#idade');
        this._inputLagFavorita = <HTMLInputElement>document.querySelector('#langFavorita');
        this._inputObservacoes = <HTMLInputElement>document.querySelector('#obs');
        this._programadoresView.update(this._programadores);
    }

    adiciona(event: Event){

        event.preventDefault();

        const programador = new Programador(
            this._inputNome.textContent,
            this._inputSobreNome.textContent,
            new Date(this._inputDataDeNascimento.value.replace(/-/g, ',')),
            parseInt(this._inputIdade.value),
            this._inputLagFavorita.textContent,
            this._inputObservacoes.textContent
            
        );

        this._programadores.adiciona(programador);
        this._programadoresView.update(this._programadores);
    }
}