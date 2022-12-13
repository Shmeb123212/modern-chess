import React, {useState, useEffect} from "react";
import { Board } from "../models/Board";
import { FC } from "react";
import CellComponent from "./CellComponents";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: ()=>void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) =>{
    const [selectedCell, setSelectedCell] = useState<Cell|null>(null)


    useEffect(()=>{
        highlightcells()
    }, [selectedCell])

    function click (cell: Cell) {
        if (selectedCell && selectedCell !==cell&& selectedCell.figure?.canMove(cell) ) {
            selectedCell.moveFigure(cell);
            swapPlayer()
            setSelectedCell(null);
        } else {
            if(cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }


    function highlightcells () {
        board.highlightCells(selectedCell)
        updateBoard()
    }


    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
       <div>
            <h3>текущий игрок {currentPlayer?.color}</h3>
            <div className="board">
            {board.cells.map((row, i)=>
                <React.Fragment key={i}>
                    {row.map((cell,index) => 
                         <CellComponent click={click} seleced={cell.x === selectedCell?.x&& cell.y === selectedCell?.y } cell={cell} key={cell.id}/>
                    )}
                </React.Fragment>
            )}
        </div>
       </div>
    )
}

export default BoardComponent