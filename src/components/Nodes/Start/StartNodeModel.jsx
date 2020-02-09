import { NodeModel } from 'storm-react-diagrams';
import { StartPortModel } from './StartPortModel';

export class StartNodeModel extends NodeModel {
	constructor() {
		super('start');
		// this.addPort(new StartPortModel('top'));
		// this.addPort(new StartPortModel('left'));
		// this.addPort(new StartPortModel('bottom'));
		this.addPort(new StartPortModel('right'));
	}
}
