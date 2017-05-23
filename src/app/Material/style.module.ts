import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule , MdIconModule, MdToolbarModule,
        MdButtonToggleModule
} from '@angular/material';


import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdIconModule, MdToolbarModule,
    MdButtonToggleModule
  ],
  exports: [
    MdButtonModule, MdCheckboxModule, MdIconModule, MdToolbarModule,
    MdButtonToggleModule
    ],
  declarations: []
})
export class StyleModule { }
