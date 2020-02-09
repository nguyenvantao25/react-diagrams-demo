import { NodeWidgetFactory, DiagramEngine, NodeModel } from 'storm-react-diagrams';
import { ContentBeginNodeWidgetFactory } from './ContentBeginNodeWidget';

export class ContentBeginWidgetFactory extends NodeWidgetFactory {
	constructor() {
		super('contentBegin');
	}

	generateReactWidget(diagramEngine: DiagramEngine, node: NodeModel): JSX.Element {
		return ContentBeginNodeWidgetFactory({ node: node });
	}
}
