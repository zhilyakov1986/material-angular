import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'material-sandbox';
  public form500: FormGroup | undefined;
  public form300: FormGroup | undefined;
  public from300or: FormGroup | undefined;

  constructor(private builder: FormBuilder) {}

  public ngOnInit(): void {
    this.buildForms();
  }

  public buildForms() {
    this.form500 = this.builder.group({});
    this.form300 = this.builder.group({});
    this.from300or = this.builder.group({});
  }
}
