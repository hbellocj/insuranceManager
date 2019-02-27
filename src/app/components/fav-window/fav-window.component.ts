import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { InsuranceObject } from 'src/app/objects/insurance.object';
import * as action from '../../redux/actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';

export interface DialogData {
  insurances: InsuranceObject[];
}

@Component({
  selector: 'app-fav-window',
  templateUrl: './fav-window.component.html',
  styleUrls: ['./fav-window.component.scss']
})
export class FavWindowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private store: Store<State>) {
    const favInsurances: InsuranceObject[] = this.data.insurances;
    this.store.dispatch(new action.GetFavsInsurances(favInsurances));
  }

  ngOnInit() {
  }

}
