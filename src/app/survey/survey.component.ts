import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Observable} from 'rxjs';
import {SurveyService} from '../services/survey.service';
import {SurveyBase} from './survey-base';

/** Error when invalid control is dirty, touched, or submitted. */

interface IGenericFormFieldConfigUIBase {
  id: string;
  label: string;
}
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  form!: FormGroup;
  questions$: Observable<SurveyBase<any>[]>;
  constructor(service: SurveyService) {
    this.questions$ = service.getQuestions();
  }

}
