// import { ExtratoComponent } from './extrato/extrato.component';
// import { NovaTransgerenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'extrato',
//     pathMatch: 'full',
//   },
//   {
//     path: 'extrato',
//     component: ExtratoComponent,
//   },
//   {
//     path: 'nova-transferencia',
//     component: NovaTransgerenciaComponent,
//   },
// ];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
