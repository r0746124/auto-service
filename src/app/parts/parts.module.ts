import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsComponent } from './parts/parts.component';
import {SharedModule} from '../shared/shared.module';
import { AddPartComponent } from './add-part/add-part.component';




@NgModule({
  declarations: [PartsComponent, AddPartComponent],
  imports: [
    CommonModule,
    SharedModule,
    
  ]
})
export class PartsModule { }
