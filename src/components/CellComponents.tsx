import React from "react";
import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell;
    seleced: boolean;
    click: (cell:Cell)=>void;
}

const CellComponent: FC<CellProps> = ({cell, seleced, click})=>{

    
    return (
        <div className={['cell', cell.color, seleced ? "selected" : ''].join(' ')} onClick={e=>click(cell)} style={{background: cell.available && cell.figure ? 'green':''}}>
            
            { cell.available && !cell.figure && <div className={'available'}/>}

            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    )
}

export default CellComponent