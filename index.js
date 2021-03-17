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

window.addEventListener("load", ()=>{
	createGraph();
})

