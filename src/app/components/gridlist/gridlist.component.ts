import { Component, OnInit, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.component.html',
  styleUrls: ['./gridlist.component.scss']
})
export class GridlistComponent implements OnInit {

  @Input() page: any;

  tiles: Tile[];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.run(() => {
      this.tiles = [
        { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
        { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
      ];
    });
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
