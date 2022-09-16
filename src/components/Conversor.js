import react, { Component } from 'react';
import './Conversor.css'

export default class Conversor extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            moedaA_valor : "",
            moedaB_valor : 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter(){
        
            let cotacao = 5.25;
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
            
            this.setState({moedaB_valor})
    }

    render() {
        return (
            <div className='full'>
                <h1>{this.props.moedaA} para {this.props.moedaB}</h1>
                <input type="text" className='textozin' onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
                <input type="button" className='botao' value="Converter" onClick={this.converter}></input>
                <h2>R$ {this.state.moedaB_valor}</h2>
            </div>
        )
    }
}