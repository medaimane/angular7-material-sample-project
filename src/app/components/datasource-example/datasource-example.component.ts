import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DatasourceExampleDataSource } from './datasource-example-datasource';

@Component({
  selector: 'app-datasource-example',
  templateUrl: './datasource-example.component.html',
  styleUrls: ['./datasource-example.component.scss'],
})
export class DatasourceExampleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DatasourceExampleDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DatasourceExampleDataSource(this.paginator, this.sort);
  }
}
