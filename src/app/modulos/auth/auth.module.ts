import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';


import { NebularModule } from '../../nebular.module';

@NgModule({
    imports: [
        AuthRoutingModule,
        NebularModule

    ],
    declarations: [
        AuthComponent,
        LoginComponent
    ],

})
export class AuthModule { }