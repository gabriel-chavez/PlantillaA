/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';


@Component({
  selector: 'ngx-app',
  template: `
            <!--<ngx-spinner
            name="spcargando"
            type = "ball-spin-clockwise-fade"
            bdColor = "#e2e0e0cc"
            color = "#124c8c"
            size = "medium"
            [fullScreen] = "true"            
            style="margin-top:-50px"
            >
            
            <div class="text-center">
              <div style="color: #124c8c"><b>Estamos procesando su solicitud.</b></div>
              <div style="color: #f8981f"><b>Espere un momento por favor.</b></div>
            </div>            
            </ngx-spinner>-->
            <!--<uv-pantalla-cargando></uv-pantalla-cargando>-->
            <router-outlet></router-outlet>            
            `,
  styleUrls: ['./app.component.scss'],


})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {
    // this.showSpinner();
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }


}
