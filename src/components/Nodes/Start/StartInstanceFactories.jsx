import { AbstractInstanceFactory } from 'storm-react-diagrams';
import { StartNodeModel } from './StartNodeModel';
import { StartPortModel } from './StartPortModel';

export class StartNodeFactory extends AbstractInstanceFactory<StartNodeModel> {
	constructor() {
		super('StartNodeModel');
	}

	getInstance() {
		return new StartNodeModel();
	}
}

export class StartPortFactory extends AbstractInstanceFactory<StartPortModel> {
	constructor() {
		super('StartPortModel');
	}

	getInstance() {
		return new StartPortModel();
	}
}
