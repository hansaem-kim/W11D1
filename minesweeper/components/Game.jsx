import React from "react";
import * as Minesweeper from "../minesweeper.js"
import Board from "./Board.jsx";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(9, 10)
        }
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagged){
        if (flagged){
            tile.toggleFlag();
        }else{
            tile.explore();
        }
        this.setState({board: this.state.board})
    }   

    restartGame(){
        this.setState({board: new Minesweeper.Board(9, 5) })
    }

    render(){
        if (this.state.board.won()){
            return(
                <> 
                    <Board board={this.state.board} updateGame={this.updateGame}/>
                    <div className = "modal">
                        <p>You won!</p>
                        <button onClick={this.restartGame}> Play Again </button>
                    </div>
                </>

            )     
        } else if (this.state.board.lost()){
            return (
                <> 
                    <Board board={this.state.board} updateGame={this.updateGame}/>
                    <div className = "modal">
                        <p>You Lost!</p>
                        <button onClick={this.restartGame}> Play Again </button>
                    </div>
                </>
            )
        } else {
            return (
                <Board board={this.state.board} updateGame={this.updateGame}/>
                )
        }
    
    }



}

export default Game;