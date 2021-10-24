import React from "react";


class CadastroProdutos extends React.Component{

        state = {
            nome:'',
            sku:'',
            descricao:'',
            preco:0,
            fornecedor:''
        }

        onChange = (event)=>{
          const valor =   event.target.value
          const nomeDoCampo = event.target.name
          this.setState ({[nomeDoCampo]: valor})
        }

        onSubmit = (event)=>{

            console.log(this.state)
            
        }

    render(){
        return(
            <>

            <div className="Card">
                <div className="card-header">
                    Cadastro de Produtos
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group">
                                <label > Nome: *</label>
                                <input type="text" 
                                name="nome" 
                                onChange = {this.onChange}
                                value={this.state.nome} 
                                className="form-control" />
                            </div>

                        </div>

                        <div className="col-md-6">
                        <div className="form-group">
                                <label htmlFor=""> SKU: *</label>
                                <input type="text"
                                 name="sku"
                                 onChange = {this.onChange}
                                value={this.state.sku}  
                                className="form-control" />
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <label>Descrição: </label>
                                <textarea className="form-control" 
                                name="descricao"
                                onChange = {this.onChange}
                                value={this.state.descricao} >

                                </textarea>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group">
                                <label > Preço: *</label>
                                <input type="text" 
                                value={this.state.preco} 
                                name="preco" 
                                onChange = {this.onChange}
                                className="form-control" />
                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="form-group">
                                <label > Fornecedor: *</label>
                                <input type="text"
                                 name="fornecedor" 
                                 onChange = {this.onChange}
                                 value={this.state.fornecedor} 
                                 className="form-control" />
                            </div>

                        </div>
                    </div>   

                    <div className="row mt-3">

                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success"> Salvar</button>
                        </div>

                        <div className="col-md-1">
                            <button className="btn btn-primary"> Limpar</button>
                        </div>
                        
                    </div> 

                </div>
            </div>

            </>
        );
    }
}



export default  CadastroProdutos;