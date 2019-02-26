import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { InsuranceObject } from 'src/app/objects/insurance.object';
import * as action from '../../redux/actions';
import { Store, State } from '@ngrx/store';

@Component({
  selector: 'app-fav-table',
  templateUrl: './fav-table.component.html',
  styleUrls: ['./fav-table.component.scss']
})
export class FavTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'kindImage', 'brandImage', 'price'];
  dataSource: MatTableDataSource<InsuranceObject>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<State>) {
    let favInsurance: InsuranceObject[];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(favInsurance);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
