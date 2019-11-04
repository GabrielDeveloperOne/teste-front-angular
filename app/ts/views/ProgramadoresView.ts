class ProgramadoresView{

    private _elemento: Element;

    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
        
    }

    update(model: Programadores): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: Programadores): string {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Data de Nascimento</th>
                <th>Idade</th>
                <th>Linguagem favorita</th>
                <th>Observações</th>
            </tr>
        </thead>

        <tbody>
        ${model.paraArray().map(programador =>{
             `
                <tr>
                    <td>${programador.nome}</td>
                    <td>${programador.sobreNome}</td>
                    <td>${programador.dataDeNascimento.getDate()/programador.dataDeNascimento.getMonth() +1/programador.dataDeNascimento.getFullYear()}</td>
                    <td>${programador.idade}</td>
                    <td>${programador.langFavorita}</td>
                    <td>${programador.obs}</td>
                </tr>
            `
        }).join()}
        </tbody>

        <tfoot>
        </tfoot>
    </table>
        
        `
    }
}