import React from "react";

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        let flagged = e.altKey;
        this.props.updateGame(this.props.tile, flagged)

        
    }
    
    render(){
        let tileImg;
        let tileCss;
        if (this.props.tile.explored) {
            if (this.props.tile.bombed) {
                tileImg = "\uD83D\uDCA3"
            } else {
                if (this.props.tile.adjacentBombCount() > 0) {
                    tileImg = this.props.tile.adjacentBombCount()
                } else {
                    tileImg = ""    
                }
                
            }
            tileCss = "explored"
        } else {
            if (this.props.tile.flagged) {
                tileImg = "\u2691"
            } else {
                tileImg = ""   
            } tileCss = "notExplored"
        }

        return(
            <div className = {tileCss} onClick = {this.handleClick}>{tileImg}</div>
        )
    }
}

export default Tile