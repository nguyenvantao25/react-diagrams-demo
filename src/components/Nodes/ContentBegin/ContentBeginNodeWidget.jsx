import React from 'react';
import { ContentBeginNodeModel } from './ContentBeginNodeModel';
import { PortWidget } from 'storm-react-diagrams';

export interface ContentBeginNodeWidgetProps {
	node: ContentBeginNodeModel,
	size?: number
}

export interface ContentBeginNodeWidgetState {}

export class ContentBeginNodeWidget extends React.Component<ContentBeginNodeWidgetProps, ContentBeginNodeWidgetState> {
	constructor(props: ContentBeginNodeWidgetProps) {
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
	// 			'>ContentBegin node 1312</text></g>'
	// 	};
	// }
	render() {
		return (
			<div
				className="content-begin-node"
				style={{ position: 'relative', width: this.props.size, height: this.props.size }}
			>
				{/* <svg width="150" height="150" dangerouslySetInnerHTML={this.createMarkup()} /> */}
				<div>
					<p>Nội dung bắt đầu</p>
				</div>
				{/* <div style={{ position: 'absolute', zIndex: 10, left: -8, top: this.props.size / 2 - 8 }}>
					<PortWidget name="left" node={this.props.node} />
				</div>
				<div style={{ position: 'absolute', zIndex: 10, left: this.props.size / 2 - 8, top: -8 }}>
					<PortWidget name="top" node={this.props.node} />
				</div> */}
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

ContentBeginNodeWidget.defaultProps = {
	size: 75,
	node: null
};

export var ContentBeginNodeWidgetFactory = React.createFactory(ContentBeginNodeWidget);
