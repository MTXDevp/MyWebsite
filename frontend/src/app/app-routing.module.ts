import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VpnComponent } from './components/vpn/vpn.component';

const routes: Routes = [
  { path: 'vpn', component: VpnComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
