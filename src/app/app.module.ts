import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SurveyComponent } from './survey/survey.component';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '',   redirectTo: '/survey', pathMatch: 'full' }
]; // sets up routes constant where you define your routes


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    DynamicFormComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
