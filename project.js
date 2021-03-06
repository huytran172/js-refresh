<<<<<<< HEAD
/*
 * Hard coded edges in the graph
 */
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split('-'))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(des) {
        // Return to the old state if there is no path
        if (! roadGraph[this.place].includes(des)) {
            return this;
        } else {
            let parcels = this.parcels
            .map(p => {
                // this.place current location
                if (p.place !== this.place) { 
                    return p; 
                }

                return { place: des, address: p.address };
            }).filter(p => p.place !== p.address); // Remove delivered parcels
            return new VillageState(des, parcels);
        }
    }
}

let first = new VillageState(
    'Post Office',
    [{ place: 'Post Office', address: "Alice\'s House" }]
);

let next = first.move("Alice\'s House");

console.log(next.place);
=======
/*
 * Hard coded edges in the graph
 */
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split('-'))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(des) {
        // Return to the old state if there is no path
        if (! roadGraph[this.place].includes(des)) {
            return this;
        } else {
            let parcels = this.parcels
            .map(p => {
                // this.place current location
                if (p.place !== this.place) { 
                    return p; 
                }

                return { place: des, address: p.address };
            }).filter(p => p.place !== p.address); // Remove delivered parcels
            return new VillageState(des, parcels);
        }
    }
}

let first = new VillageState(
    'Post Office',
    [{ place: 'Post Office', address: "Alice\'s House" }]
);

let next = first.move("Alice\'s House");

console.log(next.place);
>>>>>>> 9ad4c95221ef44616514f8868fd90bac4bb1542b
console.log(next.parcels);