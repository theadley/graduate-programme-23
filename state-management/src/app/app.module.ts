import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {DatePipe, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DutyContainerComponent } from './components/duty-container/duty-container.component';
import { DutyControllerComponent } from './components/duty-controller/duty-controller.component';
import { SelectedOpsComponent } from './components/selected-ops/selected-ops.component';

// Ant-d
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzFormModule } from 'ng-zorro-antd/form';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DutyContainerComponent,
    DutyControllerComponent,
    SelectedOpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzTabsModule,
    NzDividerModule,
    NzInputModule,
    NzIconModule,
    NzSwitchModule,
    NzToolTipModule,
    NzFormModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
