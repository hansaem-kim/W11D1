import React from "react";

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.updateGame()
    }
    
    render(){
        let tileImg;
        if (this.props.tile.explored) {
            if (this.props.tile.bombed) {
                tileImg = "\u1F4A3"
            } else {
                if (this.props.tile.adjacentBombCount() > 0) {
                    tileImg = this.props.tile.adjacentBombCount()
                } else {
                    tileImg = ""    
                }
            }
        } else {
            if (this.props.tile.flagged) {
                tileImg = "\u2691"
            } else {
                tileImg = ""   
            }
        }

        return(
            <div className = "tile" onClick = {this.handleClick}>{tileImg}</div>
        )
    }
}

export default Tile