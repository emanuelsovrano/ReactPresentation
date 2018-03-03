import * as React from "react";
import './Square.less';

export interface ISquareState {
    value: String;
}

export class Square extends React.Component<{}, ISquareState> {
    constructor(props:any, value:String) {
        super(props);
        this.state = {
            value: null
        };
    }

    private handleClick(sign:String){
        this.setState({
            value: sign
        });
    }

    public render(): JSX.Element {
        return (
            <button className="square" onClick={() => this.handleClick("X")}>
                {this.state.value}
            </button>
        );
    }
}