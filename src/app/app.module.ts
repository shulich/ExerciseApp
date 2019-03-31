import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { httpLoaderFactory } from './core/translate/httpLoaderFactory';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import { UserAutocompleteComponent } from './user-search/component/user-autocomplete/user-autocomplete.component';
import { UserHeaderComponent } from './user-search/component/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAutocompleteComponent,
    UserHeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: httpLoaderFactory,
              deps: [HttpClient]
          }
      }),
      MatInputModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatButtonModule,
      MatProgressSpinnerModule,

  ],
  entryComponents: [UserAutocompleteComponent],
  providers: [],
  bootstrap: [AppComponent,UserAutocompleteComponent]
})
export class AppModule { }
