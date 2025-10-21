import { Routes } from '@angular/router';
import { ChatPageComponent } from './chatWidgets/chat-page/chat-page';
import { Bubbledrop } from './chatWidgets/bubbledrop/bubbledrop';

export const routes: Routes = [
  { path: 'chat', component: ChatPageComponent },
  { path: '', component: Bubbledrop },
  { path: '**', redirectTo: '' }
];
