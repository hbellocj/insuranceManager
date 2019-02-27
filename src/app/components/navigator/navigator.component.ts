import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InsuranceObject } from 'src/app/objects/insurance.object';
import { Store } from '@ngrx/store';
import { State } from '../../redux/reducers';
import { MatDialog } from '@angular/material';
import { FavWindowComponent } from '../fav-window/fav-window.component';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  favInsurances: InsuranceObject[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<State>, public dialog: MatDialog) {
    this.store.subscribe(data => {
      if (data.insurance.action === 'add') {
        this.favInsurances[this.favInsurances.length] = data.insurance.insuranceFav;
      } else if (data.insurance.action === 'del') {
        const insuranceToDelete = this.favInsurances.indexOf(data.insurance.insuranceFav);
        if (insuranceToDelete !== -1) {
          this.favInsurances.splice(insuranceToDelete, 1);
        }
      }
    });
  }

  openFavouritesWindow(): void {
    this.dialog.open(FavWindowComponent, {
      width: '40%',
      height: '40%',
      data: {
        insurances: this.favInsurances
      }
    });
  }

}
