import { NodeModel } from 'storm-react-diagrams';
import { EndPortModel } from './EndPortModel';

export class EndNodeModel extends NodeModel {
	constructor() {
		super('end');
		// this.addPort(new EndPortModel('top'));
		this.addPort(new EndPortModel('left'));
		// this.addPort(new EndPortModel('bottom'));
		// this.addPort(new EndPortModel('right'));
	}
}
