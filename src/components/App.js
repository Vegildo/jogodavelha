import React from 'react';
import './styles.css';
import Display from './Display';


class App extends React.Component {

    arrayVazio = Array(9).fill("")    
    state = { bloco: this.arrayVazio, jogadorAtual: "O" }

    clickBloco = ( { index } ) => {        

        var newbloco = this.state.bloco.map((item, itemIndex) => {
            if (itemIndex === index) {
                return "X";
            } else {
                return item
            }
        } )

        console.log(newbloco)     
        this.setState( { bloco: newbloco  } ) 
        
        this.setState( { jogadorAtual: this.state.jogadorAtual === "O" ? "X" : "O"} )
       
    }

    renderBloco = () => {
        return (
            <div className='bloco-wrapper'>
                {this.state.bloco.map((item, index) => <div onClick={() => this.clickBloco(index)} key={index} className={`celula ${item}`}>{item}</div>)}
            </div>
        );
    }

    render() {
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