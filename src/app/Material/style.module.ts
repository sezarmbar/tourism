import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule , MdIconModule, MdToolbarModule,
        MdButtonToggleModule, MdTabsModule, MdCardModule
} from '@angular/material';


import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdIconModule, MdToolbarModule,
    MdButtonToggleModule, MdTabsModule, MdCardModule
  ],
  exports: [
    MdButtonModule, MdCheckboxModule, MdIconModule, MdToolbarModule,
    MdButtonToggleModule, MdTabsModule, MdCardModule
    ],
  declarations: []
})
export class StyleModule { }
