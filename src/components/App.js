import React from 'react';
import './styles.css';

import Bloco from './Bloco';
import Display from './Display';


class App extends React.Component {
    state = {modo: ''}

    render() {
        return (
            <div className='App'>
                <h1>Jogo da Velha do VV</h1>
                <div style={ {display: 'flex', justifyContent: 'center' }}>
                    <div className='jogo-wrapper'>
                        <Display></Display>
                        <div className='linha'>
                            <Bloco></Bloco>
                            <Bloco></Bloco>
                            <Bloco></Bloco>
                        </div>
                        <div className='linha'>
                            <Bloco></Bloco>
                            <Bloco></Bloco>
                            <Bloco></Bloco>
                        </div>
                        <div className='linha'>
                            <Bloco></Bloco>
                            <Bloco></Bloco>
                            <Bloco></Bloco>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;