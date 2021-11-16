import { NgModule } from '@angular/core';
import { RegistrationService } from '@upscale/web-storefront-sdk';

import { NativeExtComponent } from './native-ext.component';

@NgModule({
  declarations: [NativeExtComponent],
  imports: [],
  exports: [NativeExtComponent],
})
export class UpscaleExtensionModule {
  constructor(private registrationService: RegistrationService) {
    this.registrationService.register('native-ext', NativeExtComponent);
  }
}
