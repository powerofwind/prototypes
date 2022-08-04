import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'one-prototype-home',
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
    path: 'one-prototype-home',
    loadChildren: () => import('./one-prototype-home/one-prototype-home.module').then( m => m.OnePrototypeHomePageModule)
  },
  {
    path: 'one-prototype-finanace-menu',
    loadChildren: () => import('./one-prototype-finanace-menu/one-prototype-finanace-menu.module').then( m => m.OnePrototypeFinanaceMenuPageModule)
  },
 
  {
    path: 'ev-page1',
    loadChildren: () => import('./ev-page1/ev-page1.module').then( m => m.EvPage1PageModule)
  },
  {
    path: 'ev-page2',
    loadChildren: () => import('./ev-page2/ev-page2.module').then( m => m.EvPage2PageModule)
  },
  {
    path: 'ev-page3',
    loadChildren: () => import('./ev-page3/ev-page3.module').then( m => m.EvPage3PageModule)
  },
  {
    path: 'ev-page4',
    loadChildren: () => import('./ev-page4/ev-page4.module').then( m => m.EvPage4PageModule)
  },
  {
    path: 'ev-page5',
    loadChildren: () => import('./ev-page5/ev-page5.module').then( m => m.EvPage5PageModule)
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
    path: 'loan-page1',
    loadChildren: () => import('./loan-page1/loan-page1.module').then( m => m.LoanPage1PageModule)
  },
  {
    path: 'loan-page2',
    loadChildren: () => import('./loan-page2/loan-page2.module').then( m => m.LoanPage2PageModule)
  },

  {
    path: 'loan-page3',
    loadChildren: () => import('./loan-page3/loan-page3.module').then( m => m.LoanPage3PageModule)
  },

  {
    path: 'loan-page4',
    loadChildren: () => import('./loan-page4/loan-page4.module').then( m => m.LoanPage4PageModule)
  },
  {
    path: 'loan-page5',
    loadChildren: () => import('./loan-page5/loan-page5.module').then( m => m.LoanPage5PageModule)
  },
  {
    path: 'loan-page6',
    loadChildren: () => import('./loan-page6/loan-page6.module').then( m => m.LoanPage6PageModule)
  },

  {
    path: 'loan-page7',
    loadChildren: () => import('./loan-page7/loan-page7.module').then( m => m.LoanPage7PageModule)
  },
  {
    path: 'loanfund-page1',
    loadChildren: () => import('./loanfund-page1/loanfund-page1.module').then( m => m.LoanfundPage1PageModule)
  },
  {
    path: 'loanfund-page2',
    loadChildren: () => import('./loanfund-page2/loanfund-page2.module').then( m => m.LoanfundPage2PageModule)
  },
  {
    path: 'loanfund-page3',
    loadChildren: () => import('./loanfund-page3/loanfund-page3.module').then( m => m.LoanfundPage3PageModule)
  },
  {
    path: 'loanfund-page4',
    loadChildren: () => import('./loanfund-page4/loanfund-page4.module').then( m => m.LoanfundPage4PageModule)
  },
  {
    path: 'loanfund-page5',
    loadChildren: () => import('./loanfund-page5/loanfund-page5.module').then( m => m.LoanfundPage5PageModule)
  },
  {
    path: 'loanfund-page6',
    loadChildren: () => import('./loanfund-page6/loanfund-page6.module').then( m => m.LoanfundPage6PageModule)
  },
 
  {
    path: 'loanfund-page7',
    loadChildren: () => import('./loanfund-page7/loanfund-page7.module').then( m => m.LoanfundPage7PageModule)
  },
  {
    path: 'loanfund-page8',
    loadChildren: () => import('./loanfund-page8/loanfund-page8.module').then( m => m.LoanfundPage8PageModule)
  },
  {
    path: 'loanfund-page9',
    loadChildren: () => import('./loanfund-page9/loanfund-page9.module').then( m => m.LoanfundPage9PageModule)
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
    path: 'consent-kyc',
    loadChildren: () => import('./consent-kyc/consent-kyc.module').then( m => m.ConsentKycPageModule)
  },
  {
    path: 'coupon01main',
    loadChildren: () => import('./coupon01main/coupon01main.module').then( m => m.Coupon01mainPageModule)
  },
  {
    path: 'coupon03cart',
    loadChildren: () => import('./coupon03cart/coupon03cart.module').then( m => m.Coupon03cartPageModule)
  },
  {
    path: 'coupon04cartconfirm',
    loadChildren: () => import('./coupon04cartconfirm/coupon04cartconfirm.module').then( m => m.Coupon04cartconfirmPageModule)
  },
  {
    path: 'coupon04cartconfirm/:next',
    loadChildren: () => import('./coupon04cartconfirm/coupon04cartconfirm.module').then( m => m.Coupon04cartconfirmPageModule)
  },
  {
    path: 'coupon05topup',
    loadChildren: () => import('./coupon05topup/coupon05topup.module').then( m => m.Coupon05topupPageModule)
  },
  {
    path: 'coupon06topupdetail',
    loadChildren: () => import('./coupon06topupdetail/coupon06topupdetail.module').then( m => m.Coupon06topupdetailPageModule)
  },
  {
    path: 'coupon06topupdetail/:next',
    loadChildren: () => import('./coupon06topupdetail/coupon06topupdetail.module').then( m => m.Coupon06topupdetailPageModule)
  },
  {
    path: 'coupon07billdetail',
    loadChildren: () => import('./coupon07billdetail/coupon07billdetail.module').then( m => m.Coupon07billdetailPageModule)
  },
  {
    path: 'coupon08received',
    loadChildren: () => import('./coupon08received/coupon08received.module').then( m => m.Coupon08receivedPageModule)
  },
  {
    path: 'landingpage',
    loadChildren: () => import('./landingpage/landingpage.module').then( m => m.LandingpagePageModule)
  },
  {
    path: 'landingpage/:title',
    loadChildren: () => import('./landingpage/landingpage.module').then( m => m.LandingpagePageModule)
  },
  {
    path: 'coupon02register',
    loadChildren: () => import('./coupon02register/coupon02register.module').then( m => m.Coupon02registerPageModule)
  },
  {
    path: 'wallet-main',
    loadChildren: () => import('./wallet-main/wallet-main.module').then( m => m.WalletMainPageModule)
  },
  {
    path: 'account-main',
    loadChildren: () => import('./account-main/account-main.module').then( m => m.AccountMainPageModule)
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
