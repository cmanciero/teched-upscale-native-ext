import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from '@upscale/web-storefront-sdk';

import { NativeExtComponent } from './native-ext.component';

@NgModule({
  declarations: [NativeExtComponent],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [NativeExtComponent],
})
export class UpscaleExtensionModule {
  constructor(private registrationService: RegistrationService) {
    this.registrationService.register('native-ext', NativeExtComponent);
  }
}
