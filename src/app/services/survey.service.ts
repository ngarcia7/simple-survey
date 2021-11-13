import { Injectable } from '@angular/core';
import {SurveyBase} from '../survey/survey-base';
import {TextboxSurvey} from '../survey/survey-textbox';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {


  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: SurveyBase<string>[] = [
      new TextboxSurvey({
        key: 'firstName',
        label: 'First name (Optional)',
        type: 'text',
        order: 1
      }),
      new TextboxSurvey({
        key: 'favoriteDrink',
        label: 'Favorite drink',
        type: 'text',
        required: true,
        order: 2
      }),

      new TextboxSurvey({
        key: 'favoriteFood',
        label: 'Favorite food',
        type: 'text',
        required: true,
        order: 3
      }),
      new TextboxSurvey({
        key: 'favoriteColor',
        label: 'Favorite color',
        type: 'text',
        required: true,
        order: 4
      }),
      new TextboxSurvey({
        key: 'favoriteIceCream',
        label: 'Favorite ice cream flavor',
        type: 'text',
        required: true,
        order: 5
      }),
      new TextboxSurvey({
        key: 'favoriteAnimal',
        label: 'Favorite animal',
        type: 'text',
        required: true,
        order: 6
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
