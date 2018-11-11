import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, DialogModule, CalendarModule} from 'primeng/primeng';
import {IMaskModule} from 'angular-imask';

import {EntriesRoutingModule} from './entries-routing.module';
import {EntryListComponent} from './entry-list/entry-list.component';
import {EntryFormComponent} from './entry-form/entry-form.component';

@NgModule({
  declarations: [EntryListComponent, EntryFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EntriesRoutingModule,
    CalendarModule,
    DialogModule,
    ButtonModule,
    IMaskModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntriesModule {
}
