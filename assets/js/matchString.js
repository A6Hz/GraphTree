function matchString(){
    var value = $("#stringGraph").val();

    // get only the nodes. 1st part,
    // input: {1, 2, 3, 4, 555, 651}, {1 -> 2, 1 -> 3, 1 -> 4, 4 -> 555, 4 ->651}
    // return only "{1, 2, 3, 4, 5, 6}"

    var nodesPat = /\{(.*?)\},/;
    var nodesArr = nodesPat.exec(value);
    var nodesStr = nodesArr[1];
    //console.log("NODES raw: " + nodesStr);


    // create object whit the nodes
    // output: ["1,", "2,", "3,", "4,", "555,"]
    var nodeObj = nodesStr.match(/([0-9])+/g);
    //console.log("arr: " , nodeObj);



    // relationship between father - children
    //  input: {1, 2, 3, 4, 555, 651}, {1 -> 2, 1 -> 3, 1 -> 4, 4 -> 555, 4 ->651}
    //  output: , {1 -> 2, 1 -> 3, 1 -> 4, 4 -> 555, 4 ->651}
    var relShipPatt = /, \{.*\}/;
    var nodesRelShipStr = relShipPatt.exec(value);
    //console.log("RSHIP raw: "+ nodesRelShipStr);

    // match only int. Return an object with \w elements
    var matchAph = String(nodesRelShipStr).match( /([0-9])+/g );
    //console.log("alph: " , matchAph);


    var nodeFather = [];
    var nodeChild = [];

    i = 0;
    while (matchAph[i] ) {
        if(i % 2 == 0) {
            //return "pair";
            nodeFather.push(matchAph[i]);
        }
        else {
            //return "odd";
            nodeChild.push(matchAph[i]);
        }
        i++;
    }


    // draw graph
    graphMain(nodeObj, nodeFather, nodeChild);

    // preorden
    traverseTheTree(nodeObj, nodeFather, nodeChild);
}
