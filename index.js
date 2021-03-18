var nodes;
var edges;
var network;
var nodeIds = 0;
var edgeIds = 0;

function addNode() {
	try {
		nodes.add({
			id: document.getElementById("node-insert").value,
			label: document.getElementById("node-insert").value + "\n h(" + document.getElementById("heuristic").value + ")",
            heuristic: document.getElementById("heuristic").value,

		});
		console.log(nodes);
	}
	catch (error) {
		alert(error);
	}
}
function delNode() {
	try {
		nodes.remove({
			id: document.getElementById("node-delete").value,
		});
		console.clear(nodes);
	}
	catch (error) {
		alert(error);
	}
}
function addEdge() {
	try {
		edges.add({
			id: document.getElementById("node-from").value.concat("-",document.getElementById("node-to").value),
			from: document.getElementById("node-from").value,
			to: document.getElementById("node-to").value,
			label : document.getElementById("weight").value,
			arrows: "to" ,
			font: { align: "top" },
		});
		console.log(edges);
	} catch (error) {
		alert(error);
	}
}

function UpdW() {
	try {
		edges.update({
			id: document.getElementById("node-from1").value.concat("-",document.getElementById("node-to1").value),
			label : document.getElementById("new-weight").value,
		});
		console.log(edges);
	} catch (error) {
		alert(error);
	}
}

function UpdH() {
	try {
		nodes.update({
			id: document.getElementById("node1").value,
			label: document.getElementById("node-insert").value + "\n h(" + document.getElementById("heuristic1").value + ")",
            heuristic: document.getElementById("heuristic1").value,

		});
		console.log(nodes);
	}
	catch (error) {
		alert(error);
	}
}
function DelE() {
	try {
		edges.remove({
			id: document.getElementById("node-from2").value.concat("-",document.getElementById("node-to2").value),
		});
		console.clear(nodes);
	}
	catch (error) {
		alert(error);
	}



}

function createGraph() {
	nodes = new vis.DataSet();
	edges = new vis.DataSet();

	var container = document.getElementById('graph');

	var data = {
		    nodes: nodes,
		    edges: edges
		};
	var options = {};
	network = new vis.Network(container, data, options);

}


function toggle_add() {
    var dd_add = document.getElementById('Add');
		var add_value = dd_add.options[dd_add.selectedIndex].value;
		// alert(add_value);
		var edge_add = document.getElementById('add_edge');
		var node_add = document.getElementById('add_node');
    if (add_value == 'node') {
        // var node_add = document.getElementById('add_node');

					node_add.style.display = 'block';
					edge_add.style.display = 'none';
				}

		else if (add_value == 'edge') {
        // var edge_add = document.getElementById('add_edge');
					node_add.style.display = 'none';
					edge_add.style.display = 'block';



    }
		else {
			node_add.style.display = 'none';
			edge_add.style.display = 'none';
		}
}

function toggle_delete() {
    var dd_delete = document.getElementById('Delete');
		var delete_value = dd_delete.options[dd_delete.selectedIndex].value;
		// alert(add_value);
		var edge_delete = document.getElementById('delete_edge');
		var node_delete = document.getElementById('delete_node');
    if (delete_value == 'node') {
        // var node_add = document.getElementById('add_node');

					node_delete.style.display = 'block';
					edge_delete.style.display = 'none';
				}

		else if (delete_value == 'edge') {
        // var edge_add = document.getElementById('add_edge');
					node_delete.style.display = 'none';
					edge_delete.style.display = 'block';



    }
		else {
			node_delete.style.display = 'none';
			edge_delete.style.display = 'none';
		}
}

function toggle_update() {
    var dd_update = document.getElementById('Update');
		var update_value = dd_update.options[dd_update.selectedIndex].value;
		// alert(add_value);
		var weight_update = document.getElementById('update_weight');
		var hv_update = document.getElementById('update_hv');
    if (update_value == 'weights') {
        // var node_add = document.getElementById('add_node');

					weight_update.style.display = 'block';
					hv_update.style.display = 'none';
				}

		else if (update_value == 'heuristic_value') {
        // var edge_add = document.getElementById('add_edge');
				weight_update.style.display = 'none';
					hv_update.style.display = 'block';



    }
		else {
			weight_update.style.display = 'none';
			hv_update.style.display = 'none';
		}
}

function node_details() {
	var node_det =  document.getElementById('Algorithm');
	var algo_value = node_det.options[node_det.selectedIndex].value;
	var path_det = document.getElementById('path_details');
	if (algo_value != "nothing") {
	path_det.style.display = 'block';
}
	else {
		path_det.style.display = 'none';
	}

}


window.addEventListener("load", ()=>{
	createGraph();
})
