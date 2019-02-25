import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import data from '../../../assets/InsurProducts.json';
import { InsuranceObject } from 'src/app/objects/insurance.object.js';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {
  toggle = true;
  favInsurance = [];

  displayedColumns: string[] = ['id', 'name', 'brand', 'brandImage', 'kind', 'price', 'favourite'];
  dataSource: MatTableDataSource<InsuranceObject>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const insurances = Array.from({ length: data.length }, (_, k) => this.createNewInsuranceRow(k));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(insurances);
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  addOrRemoveFav(insurance) {
    debugger;
    if (insurance.favourite) {
      insurance.favourite === false;
    } else {
      insurance.favourite === true;
    }
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
