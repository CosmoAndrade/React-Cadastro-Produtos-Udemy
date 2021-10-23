import React from "react";


class CadastroProdutos extends React.Component{
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
                                <input type="text"  className="form-control" />
                            </div>

                        </div>

                        <div className="col-md-6">
                        <div className="form-group">
                                <label htmlFor=""> SKU: *</label>
                                <input type="text"  className="form-control" />
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <label>Descrição: </label>
                                <textarea className="form-control">

                                </textarea>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">

                            <div className="form-group">
                                <label > Preço: *</label>
                                <input type="text"  className="form-control" />
                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="form-group">
                                <label > Fornecedor: *</label>
                                <input type="text"  className="form-control" />
                            </div>

                        </div>
                    </div>   

                    <div className="row mt-3">

                        <div className="col-md-1">
                            <button className="btn btn-success"> Salvar</button>
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