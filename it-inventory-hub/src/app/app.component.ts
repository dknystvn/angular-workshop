import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DropDownItem } from 'ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public constructor(private readonly translation: TranslateService) {}

  public languageChanged(itemSelected: DropDownItem): void {
    this.translation.use(itemSelected.value);
  }
}
