import * as React from "react";
import { Square } from "./Square";
import './Board.less';

export interface IBoardState {
    squares: String[];
}

export class Board extends React.Component<{}, IBoardState> {
    constructor(props:any) {
        super(props);
        this.state = {
            squares: [null,null,null,null,null,null,null,null,null]
        };
    }

    renderSquare(i: number) {
        return <Square/>;
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className="board-status">{status}</div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}