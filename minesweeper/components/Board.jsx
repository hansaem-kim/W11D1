import React from "react";
import Tile from "./Tile";

class Board extends React.Component {
    constructor(props){
        super(props);

    }
    
    render(){
        const grid = this.props.board.grid
        let tiles = grid.map((row, xindex) => {
                return ( <div key = {` row + ${xindex} `}>
                    
                    {row.map((tile, yindex)=>{
                    return ( 
                        <Tile 
                        updateGame = {this.props.updateGame}
                        tile={tile}
                        key={`${xindex} + ${yindex}`} 
                        />    
                    )
                    }
                    ) }
                    </div>
                )
        })
        return (
            <div id = 'Board'>
                {tiles}
            </div>
        )
  
            
    }

}


export default Board;