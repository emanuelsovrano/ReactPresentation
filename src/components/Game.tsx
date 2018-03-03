import * as React from "react";
import { Board } from "./Board";
import './Game.less'

/* export interface IGameProps {
    Prop: String;
} */

export class Game extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return (
            <div className="game">
                <div className="game-board">
                <Board />
                </div>
                <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}