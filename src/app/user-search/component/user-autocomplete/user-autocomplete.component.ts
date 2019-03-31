import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms"
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { User } from 'src/app/user-search/model/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-autocomplete',
  templateUrl: './user-autocomplete.component.html',
  styleUrls: ['./user-autocomplete.component.css']
})
export class UserAutocompleteComponent implements OnInit {

  constructor(private translate: TranslateService) { }


  public myControl = new FormControl();
  public options: User[] = [
    { id: 1, name: 'שולמית' },
    { id: 2, name: 'חגית' },
    { id: 3, name: 'חיה' },
    { id: 4, name: 'גלעד' },
    { id: 5, name: 'שמואל' }
  ];
  public filteredOptions: Observable<User[]>;
  public newUserId: number = 0;
  @ViewChild('userFilterInput') userFilterInput: ElementRef;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User) {
    if (user != undefined && this.newUserId == user.id) {
      user = new User(user.id, user.name.slice(0, user.name.length - 3));
      this.options.push(user);
    }
    if (this.userFilterInput != undefined){
      this.userFilterInput.nativeElement.value = user ? user.name : undefined;
    }
  }

  private _filter(name: string): User[] {
    let filterOption = this.options.filter(user => user.name.includes(name) || user.id.toString() == name);
    let isSameWord = this.options.filter(user => user.name == name).length == 1;
    if (!isSameWord) {
      let newUser = new User()
      newUser.id = this.options[this.options.length - 1].id + 1;
      newUser.name = name + "new";
      this.newUserId = newUser.id;
      filterOption.unshift(newUser);
    }
    return filterOption;
  }

}
