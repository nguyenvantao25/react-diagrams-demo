import { NodeModel } from 'storm-react-diagrams';
import { ContentBeginPortModel } from './ContentBeginPortModel';

export class ContentBeginNodeModel extends NodeModel {
	constructor() {
		super('contentBegin');
		// this.addPort(new ContentBeginPortModel('top'));
		// this.addPort(new ContentBeginPortModel('left'));
		// this.addPort(new ContentBeginPortModel('bottom'));
		this.addPort(new ContentBeginPortModel('right'));
	}
}
