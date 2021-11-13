import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {SurveyControlService} from '../services/survey-control.service';
import {SurveyBase} from '../survey/survey-base';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ SurveyControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: SurveyBase<string>[] | null = [];
  form!: FormGroup;
  matcher = new MyErrorStateMatcher();
  get isValid() { return this.form.valid }
  constructor(private scs: SurveyControlService, private router: Router) {}

  ngOnInit() {
    this.form = this.scs.toFormGroup(this.questions as SurveyBase<string>[]);
  }

  onSubmit() {
    this.router.navigate(['/confirmation']);
  }
}
