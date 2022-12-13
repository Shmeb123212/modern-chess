import { Cell } from "../Cell";
import { Colors } from "../Colors";

export enum FigureNames {
    FIGURE = "Фигура",
    KING = "Король",
    KNIGNT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон",
}

export class Figure {
    color: Colors;
    logo: string | null;
    cell: Cell;
    name: FigureNames;
    id: number ;
    constructor (color: Colors, cell: Cell) {
        this.cell = cell;
        this.color = color;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }


    canMove (target: Cell) : boolean {
        return true
    }

    moveFigure(target: Cell) {

    }
}