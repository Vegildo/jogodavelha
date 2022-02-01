import React from 'react';
import './styles.css';

import Bloco from './Bloco';
import Display from './Display';


class App extends React.Component {
    arrayVazio = Array(9).fill("");
    state = { bloco: this.arrayVazio }

    const renderBloco = () => {
        return (
            <div className='bloco-wrapper bloco'>
                {this.state.bloco.map((item, index) => <div key={index} className={`celula ${item}`}>{item}</div>)}
            </div>
        );
    }

    render() {
        return (
            <div className='App'>
                <h1>Jogo da Velha do VV</h1>
                <div style={ {display: 'flex', justifyContent: 'center' }}>
                    <div className='jogo-wrapper'>
                        <Display></Display>
                        {renderBloco}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;