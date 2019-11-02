class Programadores {
    constructor(nome, sobreNome, idade, dataDeNascimento, langFavorita, obs){
        this._nome = nome;
        this._sobreNome = sobreNome;
        this._idade = idade;
        this._dataDeNascimento = dataDeNascimento
        this._langFavorita = langFavorita
        this._obs = obs
    }

    get nome() {
        return this._nome;
    }

    get sobreNome(){
        return this._sobreNome;
    }

    get idade(){
        return this._idade;
    }

    get dataDeNascimento(){
        return this._dataDeNascimento;
    }

    get langFavorita(){
        return this._langFavorita;
    }

    get obs(){
        return this._obs;
    }
}