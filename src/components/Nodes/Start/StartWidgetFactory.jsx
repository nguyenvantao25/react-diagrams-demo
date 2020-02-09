import { NodeWidgetFactory, DiagramEngine, NodeModel } from 'storm-react-diagrams';
import { StartNodeWidgetFactory } from './StartNodeWidget';

export class StartWidgetFactory extends NodeWidgetFactory {
	constructor() {
		super('start');
	}

	generateReactWidget(diagramEngine: DiagramEngine, node: NodeModel): JSX.Element {
		return StartNodeWidgetFactory({ node: node });
	}
}
