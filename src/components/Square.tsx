import * as React from "react";
import './Square.less';

export interface ISquareProps {
    value: String;
    onClick: () => void;
}

export class Square extends React.Component<ISquareProps, {}> {
    public render(): JSX.Element {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}