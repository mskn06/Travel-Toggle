import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';

const routes: Routes = [
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'require',
    component: RequirementsComponent,
  },
  {
    path: '',
    redirectTo: 'require',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
