import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateEnterprise {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
 return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  stateForm: FormGroup = this._formBuilder.group({
    stateEnterprise: '',
  });

  stateEnterprise: stateEnterprise[] = [{
letter: 'A',
    names: ['Amazon', 'Amazon Inc.ARG', 'Apple']
  }, {
letter: 'N',
    names: ['Nike']
  }, {
letter: 'U',
    names: ['Uber']
  }];

  stateEnterpriseOptions: Observable<StateEnterprise[]>;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stateEnterpriseOptions = this.stateForm.get('stateEnterprise')!.valueChanges
    .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }
    private _filterGroup(value: string): StateEnterprise[] {
    if (value) {
      return this.stateEnterprise
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateEnterprise;
  
  }

}