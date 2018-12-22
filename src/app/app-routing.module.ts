import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'reg', loadChildren: './reg/reg.module#RegPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'homeEmployee', loadChildren: './home-employee/home-employee.module#HomeEmployeePageModule' },
  { path: 'follow', loadChildren: './follow/follow.module#FollowPageModule' },
  { path: 'addOrder', loadChildren: './add-order/add-order.module#AddOrderPageModule' },
  { path: 'updateOrder', loadChildren: './update-order/update-order.module#UpdateOrderPageModule' },
  { path: 'listOrder', loadChildren: './list-order/list-order.module#ListOrderPageModule' },
  { path: 'format', loadChildren: './format/format.module#FormatPageModule' },
  { path: 'table', loadChildren: './table/table.module#TablePageModule' },
  { path: 'into-employee', loadChildren: './into-employee/into-employee.module#IntoEmployeePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
