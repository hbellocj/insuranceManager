import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { InsuranceObject } from 'src/app/objects/insurance.object';
import * as action from '../../redux/actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';

@Component({
  selector: 'app-fav-table',
  templateUrl: './fav-table.component.html',
  styleUrls: ['./fav-table.component.scss']
})
export class FavTableComponent implements OnInit {

  displayedColumns: string[] = ['kindImage', 'name', 'brandImage', 'price', 'favourite'];
  dataSource: MatTableDataSource<InsuranceObject>;
  favInsurances: InsuranceObject[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<State>) {
    // Assign the data to the data source for the table to render
    this.store.subscribe(data => {
      if (data.insurance.action === 'get') {
        this.favInsurances = data.insurance.favInsurances;
      }
    });
    this.dataSource = new MatTableDataSource(this.favInsurances);
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

  addOrRemoveFav(insurance: InsuranceObject) {
    if (insurance.favourite) {
      this.store.dispatch(new action.DeleteFavInsurance(insurance));
      insurance.favourite = false;
      this.dataSource = new MatTableDataSource(this.favInsurances);
    }
  }

  favInsurancesEmpty() {
    return this.favInsurances === null || this.favInsurances.length === 0;
  }
}
