import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoMesPage } from './nuevo-mes';

@NgModule({
  declarations: [
    NuevoMesPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoMesPage),
  ],
})
export class NuevoMesPageModule {}
