import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import data from '../../../assets/InsurProducts.json';
import * as action from '../../redux/actions';
import { InsuranceObject } from 'src/app/objects/insurance.object.js';
import { FavWindowComponent } from '../fav-window/fav-window.component.js';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers/index.js';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'brandImage', 'kind', 'price', 'favourite'];
  dataSource: MatTableDataSource<InsuranceObject>;
  favInsurances: InsuranceObject[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private store: Store<State>) {
    const insurances = Array.from({ length: data.length }, (_, k) => this.createNewInsuranceRow(k));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(insurances);

    this.store.subscribe(state => {
      if (state.insurance.action === 'add') {
        this.favInsurances[this.favInsurances.length] = state.insurance.insuranceFav;
      } else if (state.insurance.action === 'del') {
        const insuranceToDelete = this.favInsurances.indexOf(state.insurance.insuranceFav);
        if (insuranceToDelete !== -1) {
          this.favInsurances.splice(insuranceToDelete, 1);
        }
      }
    });
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
    } else {
      this.store.dispatch(new action.AddFavInsurance(insurance));
      insurance.favourite = true;
    }
  }

  openFavouritesWindow(): void {
    this.dialog.open(FavWindowComponent, {
      width: '30%'
    });
  }

  createNewInsuranceRow(id) {
    return {
      id: data[id].id,
      name: data[id].name,
      brand: data[id].brand,
      brandImage: data[id].brandImage,
      kind: data[id].kind,
      kindImage: data[id].kindImage,
      price: data[id].price,
      favourite: false
    };
  }
}
