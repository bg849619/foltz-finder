import { Routes } from '@angular/router'; 
import { MessagePage } from './message-page/message-page';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
    {
        path: 'message',
        component: MessagePage
    },
    {
        path: '',
        component: MainPage
    }
];
