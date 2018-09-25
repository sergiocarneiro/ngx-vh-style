import { NgModule } from '@angular/core';

import { VhStyleDirective } from "./directives/vh-style.directive";
export { VhStyleDirective };

@NgModule(
{
  declarations: [
    VhStyleDirective
  ],
  
  exports: [
    VhStyleDirective
  ]
})
export class VhStyleModule {}