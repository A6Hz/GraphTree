function graphMain(nodes, nodesFather, nodesChild){

    var demoNodes = [];
    var demoEdges = [];

    // Draw all nodes from nodes  var
    for (var i = 0; i < nodes.length; i++) {
        demoNodes.push({
            data: {
                id: nodes[i],
                name: nodes[i]
            }
        });
    }


    // push all nodes from nodesChild
    for (var i = 0; i < nodesChild.length; i++) {
        demoNodes.push({
            data: {
                id: nodesChild[i],
                name: nodesChild[i]
            }
        });
    }


    // relationship between fathers - children
    for (var i = 0; i < nodesChild.length; i++) {
        demoEdges.push({
            data: {
                source: nodesFather[i],
                target: nodesChild[i]
            }
        });
    }

    var cy = cytoscape({
        container: $('#canvas'),

          boxSelectionEnabled: false,
          autounselectify: true,

          layout: {
            name: 'dagre'
          },

          style: [
            {
              selector: 'node',
              style: {
                'content': 'data(id)',
                'text-opacity': 0.5,
                'text-valign': 'center',
                'text-halign': 'right',
                'background-color': '#11479e'
              }
            },

            {
              selector: 'edge',
              style: {
                'width': 4,
                //'target-arrow-shape': 'triangle',
                'target-arrow-shape': 'none',
                'line-color': '#9dbaea',
                'target-arrow-color': '#9dbaea',
                'curve-style': 'bezier'
              }
            }
          ],

          elements: {
            nodes: demoNodes,
            edges: demoEdges
          }

        });

}
