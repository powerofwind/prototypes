import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cart-edit-template',
    loadChildren: () => import('./cart-edit-template/cart-edit-template.module').then( m => m.CartEditTemplatePageModule)
  },
  {
    path: 'cart-checkout-template',
    loadChildren: () => import('./cart-checkout-template/cart-checkout-template.module').then( m => m.CartCheckoutTemplatePageModule)
  },
  {
    path: 'option-dialog-template',
    loadChildren: () => import('./option-dialog-template/option-dialog-template.module').then( m => m.OptionDialogTemplatePageModule)
  },
  {
    path: 'cart-dialog-template',
    loadChildren: () => import('./cart-dialog-template/cart-dialog-template.module').then( m => m.CartDialogTemplatePageModule)
  },
  {
    path: 'form-template',
    loadChildren: () => import('./form-template/form-template.module').then( m => m.FormTemplatePageModule)
  },
  {
    path: 'form-binding',
    loadChildren: () => import('./form-binding/form-binding.module').then( m => m.FormBindingPageModule)
  },  {
    path: 'form-send-data',
    loadChildren: () => import('./form-send-data/form-send-data.module').then( m => m.FormSendDataPageModule)
  },
  {
    path: 'form-receive-data',
    loadChildren: () => import('./form-receive-data/form-receive-data.module').then( m => m.FormReceiveDataPageModule)
  },
  {
    path: 'memory',
    loadChildren: () => import('./memory/memory.module').then( m => m.MemoryPageModule)
  },
  {
    path: 'list-template',
    loadChildren: () => import('./list-template/list-template.module').then( m => m.ListTemplatePageModule)
  },
  {
    path: 'form-input-template',
    loadChildren: () => import('./form-input-template/form-input-template.module').then( m => m.FormInputTemplatePageModule)
  },
  {
    path: 'condition-template',
    loadChildren: () => import('./condition-template/condition-template.module').then( m => m.ConditionTemplatePageModule)
  },
  {
    path: 'agreement-template',
    loadChildren: () => import('./agreement-template/agreement-template.module').then( m => m.AgreementTemplatePageModule)
  },
  {
    path: 'consent-info-user-template',
    loadChildren: () => import('./consent-info-user-template/consent-info-user-template.module').then( m => m.ConsentInfoUserTemplatePageModule)
  },
  {
    path: 'consent-info-manager-template',
    loadChildren: () => import('./consent-info-manager-template/consent-info-manager-template.module').then( m => m.ConsentInfoManagerTemplatePageModule)
  },
  {
    path: 'home-template',
    loadChildren: () => import('./home-template/home-template.module').then( m => m.HomeTemplatePageModule)
  },
  {
    path: 'eslip-detail',
    loadChildren: () => import('./eslip-detail/eslip-detail.module').then( m => m.EslipDetailPageModule)
  },
  {
    path: 'condition',
    loadChildren: () => import('./condition/condition.module').then( m => m.ConditionPageModule)
  },
  {
    path: 'consent',
    loadChildren: () => import('./consent/consent.module').then( m => m.ConsentPageModule)
  },
  {
    path: 'cart-edit',
    loadChildren: () => import('./cart-edit/cart-edit.module').then( m => m.CartEditPageModule)
  },
  {
    path: 'cart-checkout',
    loadChildren: () => import('./cart-checkout/cart-checkout.module').then( m => m.CartCheckoutPageModule)
  },
  {
    path: 'cart-dialog',
    loadChildren: () => import('./cart-dialog/cart-dialog.module').then( m => m.CartDialogPageModule)
  },
  {
    path: 'eslip-home',
    loadChildren: () => import('./eslip-home/eslip-home.module').then( m => m.EslipHomePageModule)
  },
  {
    path: 'memeber',
    loadChildren: () => import('./memeber/memeber.module').then( m => m.MemeberPageModule)
  },
  {
    path: 'eslip-detail-m2',
    loadChildren: () => import('./eslip-detail-m2/eslip-detail-m2.module').then( m => m.EslipDetailM2PageModule)
  },
  {
    path: 'condition-m2',
    loadChildren: () => import('./condition-m2/condition-m2.module').then( m => m.ConditionM2PageModule)
  },
  {
    path: 'consent-m2',
    loadChildren: () => import('./consent-m2/consent-m2.module').then( m => m.ConsentM2PageModule)
  },
  {
    path: 'cart-edit-m2',
    loadChildren: () => import('./cart-edit-m2/cart-edit-m2.module').then( m => m.CartEditM2PageModule)
  },
  {
    path: 'cart-checkout-m2',
    loadChildren: () => import('./cart-checkout-m2/cart-checkout-m2.module').then( m => m.CartCheckoutM2PageModule)
  },
  {
    path: 'cart-dialog-m2',
    loadChildren: () => import('./cart-dialog-m2/cart-dialog-m2.module').then( m => m.CartDialogM2PageModule)
  },
  {
    path: 'eslip-home-m2',
    loadChildren: () => import('./eslip-home-m2/eslip-home-m2.module').then( m => m.EslipHomeM2PageModule)
  },
  {
    path: 'consent-m3',
    loadChildren: () => import('./consent-m3/consent-m3.module').then( m => m.ConsentM3PageModule)
  },
  {
    path: 'eslip-home-m3',
    loadChildren: () => import('./eslip-home-m3/eslip-home-m3.module').then( m => m.EslipHomeM3PageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
