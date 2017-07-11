function traverseTheTree(allNodes, nodeFather, nodeChild){


    // hint: TreeModel, tree and root are
    // globally available on this page
    tree = new TreeModel();

    /*
    // typical tree definition

    root = tree.parse({
        id: 1,
        children: [
            {
                id: 11,
                children: [{id: 111}]
            },
            {
                id: 12,
                children: [{id: 121}, {id: 122}]
            },
            {
                id: 13
            }
        ]
    });*/



    // define root
    root = tree.parse({
        id: allNodes[0],
    });


    var i = 0;
    // add child to a node existent
    root.walk(function (node){
        var x = 0;
        while (nodeFather[x]) {
            if(node.model.id === nodeFather[x]){
                node124 = tree.parse({ id: nodeChild[x]});
                node.addChildAtIndex(node124, node);
                //console.log("child added: " + nodeChild[x] + "  |  Index: " + node.model.id);
            }
            x++;
        }
        if(!nodeFather[i]){
            return false;
        }
        i++;
    });



    // walk tree. output preorden string.
    var a = "";
    root.walk({strategy: 'post'}, function (node) {
        //console.log('node id:', node.model.id);
        a = node.model.id + ", " +a ;
    });



    $("#salidaPreOrden").html("Pre-orden: " + a);

}
