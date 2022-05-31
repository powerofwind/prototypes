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
  },
  {
    path: 'form-send-data',
    loadChildren: () => import('./form-send-data/form-send-data.module').then( m => m.FormSendDataPageModule)
  },
  {
    path: 'form-receive-data',
    loadChildren: () => import('./form-receive-data/form-receive-data.module').then( m => m.FormReceiveDataPageModule)
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
    path: 'condition-timer-template',
    loadChildren: () => import('./condition-timer-template/condition-timer-template.module').then( m => m.ConditionTimerTemplatePageModule)
  },
  {
    path: 'consent-register-template',
    loadChildren: () => import('./consent-register-template/consent-register-template.module').then( m => m.ConsentRegisterTemplatePageModule)
  },
  {
    path: 'option-dialog-binding',
    loadChildren: () => import('./option-dialog-binding/option-dialog-binding.module').then( m => m.OptionDialogBindingPageModule)
  },
  {
    path: 'form-confirm-dialog',
    loadChildren: () => import('./form-confirm-dialog/form-confirm-dialog.module').then( m => m.FormConfirmDialogPageModule)
  },
  {
    path: 'form-service',
    loadChildren: () => import('./form-service/form-service.module').then( m => m.FormServicePageModule)
  },
  {
    path: 'option-dialog-no-submit',
    loadChildren: () => import('./option-dialog-no-submit/option-dialog-no-submit.module').then( m => m.OptionDialogNoSubmitPageModule)
  },
  {
    path: 'consent',
    loadChildren: () => import('./consent/consent.module').then( m => m.ConsentPageModule)
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
    path: 'eslip-home-m3',
    loadChildren: () => import('./eslip-home-m3/eslip-home-m3.module').then( m => m.EslipHomeM3PageModule)
  },
  {
    path: 'topup-list',
    loadChildren: () => import('./topup-list/topup-list.module').then( m => m.TopupListPageModule)
  },
  {
    path: 'topup-confirm',
    loadChildren: () => import('./topup-confirm/topup-confirm.module').then( m => m.TopupConfirmPageModule)
  },
  {
    path: 'condition-m3',
    loadChildren: () => import('./condition-m3/condition-m3.module').then( m => m.ConditionM3PageModule)
  },
  {
    path: 'condition-topup',
    loadChildren: () => import('./condition-topup/condition-topup.module').then( m => m.ConditionTopupPageModule)
  },
  {
    path: 'cart-edit-m3',
    loadChildren: () => import('./cart-edit-m3/cart-edit-m3.module').then( m => m.CartEditM3PageModule)
  },
  {
    path: 'cart-checkout-m3',
    loadChildren: () => import('./cart-checkout-m3/cart-checkout-m3.module').then( m => m.CartCheckoutM3PageModule)
  },
  {
    path: 'cart-dialog-m3',
    loadChildren: () => import('./cart-dialog-m3/cart-dialog-m3.module').then( m => m.CartDialogM3PageModule)
  },
  {
    path: 'cart-checkout-m4',
    loadChildren: () => import('./cart-checkout-m4/cart-checkout-m4.module').then( m => m.CartCheckoutM4PageModule)
  },
  // {
  //   path: 'cart-checkout-m4',
  //   loadChildren: () => import('./cart-checkout-m4/cart-checkout-m4.module').then( m => m.CartCheckoutM5PageModule)
  // },
  {
    path: 'topup-list-m4',
    loadChildren: () => import('./topup-list-m4/topup-list-m4.module').then( m => m.TopupListM4PageModule)
  },
  {
    path: 'topup-confirm-m4',
    loadChildren: () => import('./topup-confirm-m4/topup-confirm-m4.module').then( m => m.TopupConfirmM4PageModule)
  },
  {
    path: 'cart-dialog-m4',
    loadChildren: () => import('./cart-dialog-m4/cart-dialog-m4.module').then( m => m.CartDialogM4PageModule)
  },  {
    path: 'condition-m4',
    loadChildren: () => import('./condition-m4/condition-m4.module').then( m => m.ConditionM4PageModule)
  },
  {
    path: 'eslip-detail-m4',
    loadChildren: () => import('./eslip-detail-m4/eslip-detail-m4.module').then( m => m.EslipDetailM4PageModule)
  },
  {
    path: 'condition-topup-m3',
    loadChildren: () => import('./condition-topup-m3/condition-topup-m3.module').then( m => m.ConditionTopupM3PageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
