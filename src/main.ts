import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

import { importProvidersFrom } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers!,
    importProvidersFrom(MarkdownModule.forRoot()) // 👈 Bắt buộc thêm ở đây
  ]
}).catch((err) => console.error(err));
