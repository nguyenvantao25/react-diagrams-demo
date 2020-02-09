import { PortModel } from 'storm-react-diagrams';
import Lodash from 'lodash';

export class ContentBeginPortModel extends PortModel {
	// position: string | 'top' | 'bottom' | 'left' | 'right';
	position: string  | 'bottom';


	constructor(pos: string = 'bottom') {
		super(pos);
		this.position = pos;
	}

	serialize() {
		return Lodash.merge(super.serialize(), {
			position: this.position
		});
	}

	deSerialize(data: any) {
		super.deSerialize(data);
		this.position = data.position;
	}
}
