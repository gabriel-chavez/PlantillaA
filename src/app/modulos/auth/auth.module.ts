import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NebularModule } from '../../nebular.module';

@NgModule({
    imports: [
        AuthRoutingModule,
        NebularModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent
    ],

})
export class AuthModule { }