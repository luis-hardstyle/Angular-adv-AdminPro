import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  constructor(private settingsServoce: SettingsService) { }

  ngOnInit(): void {
    this.settingsServoce.checkCurrentTheme();
  }

  changeTheme(theme:string){
    this.settingsServoce.changeTheme(theme);
  }
}
