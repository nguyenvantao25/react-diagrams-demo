import React from 'react';
import { EndNodeModel } from './EndNodeModel';
import { PortWidget } from 'storm-react-diagrams';

export interface EndNodeWidgetProps {
	node: EndNodeModel,
	size?: number
}

export interface EndNodeWidgetState {}

export class EndNodeWidget extends React.Component<EndNodeWidgetProps, EndNodeWidgetState> {
	constructor(props: EndNodeWidgetProps) {
		super(props);
		this.state = {};
	}
	// createMarkup() {
	// 	return {
	// 		__html:
	// 			'<g id="Layer_1"></g><g id="Layer_2"><polygon points="10,' +
	// 			this.props.size / 2 +
	// 			' ' +
	// 			this.props.size / 2 +
	// 			',10 ' +
	// 			(this.props.size - 10) +
	// 			',' +
	// 			this.props.size / 2 +
	// 			' ' +
	// 			this.props.size / 2 +
	// 			',' +
	// 			(this.props.size - 10) +
	// 			'" fill="purple" stroke="#000000" stroke-width="3" stroke-miterlimit="10"/>' +
	// 			'<text x=' +
	// 			(this.props.size / 2 - 33) +
	// 			' y=' +
	// 			(this.props.size / 2 + 5) +
	// 			'>End node 1312</text></g>'
	// 	};
	// }
	render() {
		return (
			<div
				className="end-node"
				style={{ position: 'relative', width: this.props.size, height: this.props.size }}
			>
				{/* <svg width="150" height="150" dangerouslySetInnerHTML={this.createMarkup()} /> */}
				<div>
					<p>End</p>
				</div>
				{/* port left */}
				<div style={{ position: 'absolute', zIndex: 10, left: -8, top: this.props.size / 2 - 8 }}>
					<PortWidget name="left" node={this.props.node} />
				</div>

				{/* port top */}
				{/* <div style={{ position: 'absolute', zIndex: 10, left: this.props.size / 2 - 8, top: -8 }}>
					<PortWidget name="top" node={this.props.node} />
				</div> */}

				{/* port right */}
				{/* <div
					style={{
						position: 'absolute',
						zIndex: 10,
						left: this.props.size - 8,
						top: this.props.size / 2 - 8
					}}
				>
					<PortWidget name="right" node={this.props.node} />
				</div> */}
				
				{/* port bottom */}
				{/* <div
					style={{
						position: 'absolute',
						zIndex: 10,
						left: this.props.size / 2 - 8,
						top: this.props.size - 8
					}}
				>
					<PortWidget name="bottom" node={this.props.node} />
				</div> */}
			</div>
		);
	}
}

EndNodeWidget.defaultProps = {
	size: 75,
	node: null
};

export var EndNodeWidgetFactory = React.createFactory(EndNodeWidget);
