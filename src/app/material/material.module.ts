import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


const MaterialComponet=[MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule];

@NgModule({
    imports: [MaterialComponet],
    exports:[MaterialComponet]
})
export class MaterialModule { }

// https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/