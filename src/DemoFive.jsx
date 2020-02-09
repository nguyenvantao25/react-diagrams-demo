import React from "react";
import Lodash from "lodash";
import {
  DiagramModel,
  DiagramWidget,
  DiagramEngine,
  DefaultNodeFactory,
  DefaultLinkFactory,
  DefaultNodeModel,
  DefaultPortModel
} from "storm-react-diagrams";
import TrayWidget from "./components/TrayWidget";
import TrayItemWidget from "./components/TrayItemWidget";
import { DiamondNodeModel } from "./components/Nodes/Diamond/DiamondNodeModel";
import { DiamondWidgetFactory } from "./components/Nodes/Diamond/DiamondWidgetFactory";
import { StartNodeModel } from "./components/Nodes/Start/StartNodeModel";
import { StartWidgetFactory } from "./components/Nodes/Start/StartWidgetFactory";
import { EndNodeModel } from "./components/Nodes/End/EndNodeModel";
import { EndWidgetFactory } from "./components/Nodes/End/EndWidgetFactory";

import { ContentBeginNodeModel } from "./components/Nodes/ContentBegin/ContentBeginNodeModel";
import { ContentBeginWidgetFactory } from "./components/Nodes/ContentBegin/ContentBeginWidgetFactory";

// import SplitPane, { Pane } from 'react-split-pane';
import "./srd.css";

class DemoFive extends React.Component {
  componentWillMount() {
    this.engine = new DiagramEngine();
    this.engine.registerNodeFactory(new DefaultNodeFactory());
    this.engine.registerLinkFactory(new DefaultLinkFactory());
    this.engine.registerNodeFactory(new DiamondWidgetFactory());
    this.engine.registerNodeFactory(new StartWidgetFactory());
	this.engine.registerNodeFactory(new EndWidgetFactory());
	this.engine.registerNodeFactory(new ContentBeginWidgetFactory());

    const model = new DiagramModel();
    const node1 = new StartNodeModel("Start 1");
    node1.x = 100;
	node1.y = 100;
	
    model.addNode(node1);
	this.engine.setDiagramModel(model);
	console.log(this.engine);
  }
  render() {
    return (
      <div className="content diagram-container">
        <div className="sider-bar">
          <TrayWidget>
            <TrayItemWidget model={{ type: 'end' }} name="End" color="hotpink" />
			<TrayItemWidget model={{ type: 'contentBegin' }} name="Nội dung bắt đầu" color="hotpink" />
            <TrayItemWidget
              model={{ type: "in" }}
              name="In Node"
              color="peru"
            />
            <TrayItemWidget
              model={{ type: "out" }}
              name="Out Node"
              color="hotpink"
            />
          </TrayWidget>
        </div>

        <div className="diagram-layer"
          onDrop={event => {
            var data = JSON.parse(
              event.dataTransfer.getData("storm-diagram-node")
            );
            var nodesCount = Lodash.keys(
              this.engine.getDiagramModel().getNodes()
            ).length;
            var node = null;
            if (data.type === "start") {
              node = new DiamondNodeModel("Start Node", "peru");
              node.addPort(new DefaultPortModel(true, "", "Start"));
			} 
			else if (data.type === "contentBegin") {
				node = new ContentBeginNodeModel("Nội dung bắt đầu", "peru");
				node.addPort(new DefaultPortModel(true, "", "Start"));
			  }
		
			else if (data.type === "end") {
              node = new EndNodeModel("End", "peru");
              node.addPort(new DefaultPortModel(true, "", "end"));
			} 
			else if (data.type === "in") {
              node = new DefaultNodeModel("Node " + (nodesCount + 1), "peru");
              node.addPort(new DefaultPortModel(true, "in-1", "In"));
			}
			 else {
              node = new DefaultNodeModel(
                "Node " + (nodesCount + 1),
                "hotpink"
              );
              node.addPort(new DefaultPortModel(false, "out-1", "Out"));
            }
            var points = this.engine.getRelativeMousePoint(event);
            node.x = points.x;
            node.y = points.y;
            this.engine.getDiagramModel().addNode(node);
            this.forceUpdate();
          }}
          onDragOver={event => {
            event.preventDefault();
          }}
        >
          <DiagramWidget diagramEngine={this.engine}></DiagramWidget>
        </div>
      
	  <div className="right-sider-bar">
		  <p>Action</p>
	  </div>

	  </div>
	  
    );
  }
}
export default DemoFive;
