import { Component } from '@angular/core';
import { IonContent, IonInput, IonItem } from '@ionic/angular/standalone';
import { MaskDirective } from '../global/directives/mask.directive';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonItem, MaskDirective],
})
export class HomePage {
  constructor() { }
}
