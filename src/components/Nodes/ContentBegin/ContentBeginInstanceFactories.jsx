import { AbstractInstanceFactory } from 'storm-react-diagrams';
import { ContnentBeginNodeModel } from './ContentBeginNodeModel';
import { ContnentBeginPortModel } from './ContentBeginPortModel';

export class ContnentBeginNodeFactory extends AbstractInstanceFactory<ContnentBeginNodeModel> {
	constructor() {
		super('ContnentBeginNodeModel');
	}

	getInstance() {
		return new ContnentBeginNodeModel();
	}
}

export class ContnentBeginPortFactory extends AbstractInstanceFactory<ContnentBeginPortModel> {
	constructor() {
		super('ContnentBeginPortModel');
	}

	getInstance() {
		return new ContnentBeginPortModel();
	}
}
