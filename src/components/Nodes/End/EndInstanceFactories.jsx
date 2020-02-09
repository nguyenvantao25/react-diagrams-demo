import { AbstractInstanceFactory } from 'storm-react-diagrams';
import { EndNodeModel } from './EndNodeModel';
import { EndPortModel } from './EndPortModel';

export class EndNodeFactory extends AbstractInstanceFactory<EndNodeModel> {
	constructor() {
		super('EndNodeModel');
	}

	getInstance() {
		return new EndNodeModel();
	}
}

export class EndPortFactory extends AbstractInstanceFactory<EndPortModel> {
	constructor() {
		super('EndPortModel');
	}

	getInstance() {
		return new EndPortModel();
	}
}
