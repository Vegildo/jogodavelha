import React from 'react';
import './styles.css';
import Display from './Display';


class App extends React.Component {

    arrayVazio = Array(9).fill("")    
    state = { bloco: this.arrayVazio, jogadorAtual: "O" }

    clickBloco = ( index ) => {           
        if (this.state.bloco[index] !== "") {
            return null;
        }

        var newbloco = this.state.bloco.map((item, itemIndex) => itemIndex === index ? this.state.jogadorAtual : item)
        
        this.setState( { bloco: newbloco, jogadorAtual: this.state.jogadorAtual === "O" ? "X" : "O" } )      
       
    }

    verifiVitoria = () => {
        
    }

    renderBloco = () => {
        return (
            <div className='bloco-wrapper'>
                {this.state.bloco.map((item, index) => <div onClick={() => this.clickBloco(index)} key={index} className="celula">{item}</div>)}
            </div>
        );
    }

    render() {
        console.log(this.state.bloco)
        return (
            <div className='App'>
                <h1>Jogo da Velha do VV</h1>
                <div style={ {display: 'flex', justifyContent: 'center' }}>
                    <div className='jogo-wrapper'>
                        <Display jgdrAtualDisplay={this.state.jogadorAtual}></Display>
                        {this.renderBloco()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;