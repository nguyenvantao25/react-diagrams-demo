import React from 'react';
import { StartNodeModel } from './StartNodeModel';
import { PortWidget } from 'storm-react-diagrams';

export interface StartNodeWidgetProps {
	node: StartNodeModel,
	size?: number
}

export interface StartNodeWidgetState {}

export class StartNodeWidget extends React.Component<StartNodeWidgetProps, StartNodeWidgetState> {
	constructor(props: StartNodeWidgetProps) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div
				className="start-node"
				style={{ position: 'relative', width: this.props.size, height: this.props.size }}
			>
				<div>
					<p>start</p>
				</div>
			{/* vị trí mũi tên */}
				<div
					style={{
						position: 'absolute',
						zIndex: 10,
						left: this.props.size - 8,
						top: this.props.size / 2 - 8
					}}
				>
					<PortWidget name="right" node={this.props.node} />
				</div>
			</div>
		);
	}
}

StartNodeWidget.defaultProps = {
	size: 75,
	node: null
};

export var StartNodeWidgetFactory = React.createFactory(StartNodeWidget);
