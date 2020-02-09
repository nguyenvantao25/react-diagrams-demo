import { NodeWidgetFactory, DiagramEngine, NodeModel } from 'storm-react-diagrams';
import { EndNodeWidgetFactory } from './EndNodeWidget';

export class EndWidgetFactory extends NodeWidgetFactory {
	constructor() {
		super('end');
	}

	generateReactWidget(diagramEngine: DiagramEngine, node: NodeModel): JSX.Element {
		return EndNodeWidgetFactory({ node: node });
	}
}
