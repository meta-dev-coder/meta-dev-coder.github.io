import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';


const MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatCardModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatExpansionModule,
  MatMenuModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatDialogModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
