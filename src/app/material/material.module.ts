import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialComponet=[MatButtonModule,MatToolbarModule];

@NgModule({
    imports: [MaterialComponet],
    exports:[MaterialComponet]
})
export class MaterialModule { }
