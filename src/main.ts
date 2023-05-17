import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { PowerBiService } from './app/power-bi.service';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // platformBrowserDynamic().bootstrapModule(AppModule).then(()=>
  // {
  //   let powerBiService = new PowerBiService();
  //   powerBiService.config.serviceUrl='https://api.powerbi.com';
  // });
