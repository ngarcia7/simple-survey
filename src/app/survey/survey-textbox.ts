import { SurveyBase } from './survey-base';

export class TextboxSurvey extends SurveyBase<string> {
  override controlType = 'textbox';
}
