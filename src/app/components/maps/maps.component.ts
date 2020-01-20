import {Component, OnInit} from '@angular/core';
import NeoVis from 'neovis.js/dist/neovis.js';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})


export class MapsComponent implements OnInit {

    title = 'my-first-app';

    config = {
        container_id: 'viz',
        server_url: 'bolt://localhost:7687',
        server_user: 'neo4j',
        server_password: '123',
        labels: {
            // "Character": "name",
            Character: {
                caption: 'name',
                size: 'pagerank',
                community: 'community'
                // "sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
            }
        },
        relationships: {
            INTERACTS: {
                thickness: 'weight',
                caption: false
            }
        },
        initial_cypher: 'MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m'
    };

    viz: NeoVis;

    ngOnInit(): void {
        this.viz = new NeoVis(this.config);
        this.viz.render();
    }
}
