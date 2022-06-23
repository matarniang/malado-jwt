 import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
   
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/authentification/authentification.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./pages/faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'login-ad',
    loadChildren: () => import('./pages/register/register.module').then( m => m.LoginAdPageModule)
  },
  {
    path: 'dashboard2',
    loadChildren: () => import('./pages/dashboard2/dashboard2.module').then( m => m.Dashboard2PageModule)
  },
  {
    path: 'windows',
    loadChildren: () => import('./pages/windows/windows.module').then( m => m.WindowsPageModule)
  },
  {
    path: 'nessico',
    loadChildren: () => import('./pages/nessico/nessico.module').then( m => m.NessicoPageModule)
  },
  {
    path: 'oracle',
    loadChildren: () => import('./pages/oracle/oracle.module').then( m => m.OraclePageModule)
  },
  {
    path: 'gaia',
    loadChildren: () => import('./pages/gaia/gaia.module').then( m => m.GaiaPageModule)
  },
  {
    path: 'autres',
    loadChildren: () => import('./pages/autres/autres.module').then( m => m.AutresPageModule)
  },
  {
    path: 'simplissimo',
    loadChildren: () => import('./pages/simplissimo/simplissimo.module').then( m => m.SimplissimoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./pages/historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'assistance',
    loadChildren: () => import('./pages/assistance/assistance.module').then( m => m.AssistancePageModule)
  },
  {
    path: 'test-code',
    loadChildren: () => import('./pages/test-code/test-code.module').then( m => m.TestCodePageModule)
  },
  {
    path: 'demande-windows',
    loadChildren: () => import('./pages/demande-windows/demande-windows.module').then( m => m.DemandeWindowsPageModule)
  },
  {
    path: 'demande-oracle',
    loadChildren: () => import('./pages/demande-oracle/demande-oracle.module').then( m => m.DemandeOraclePageModule)
  },
  {
    path: 'demande-nessico',
    loadChildren: () => import('./pages/demande-nessico/demande-nessico.module').then( m => m.DemandeNessicoPageModule)
  },
  {
    path: 'login-ad1',
    loadChildren: () => import('./pages/finishregister/finishregister.module').then( m => m.LoginAd1PageModule)
  },
  {
    path: 'finishforgotpassword',
    loadChildren: () => import('./pages/finishforgotpassword/finishforgotpassword.module').then( m => m.FinishforgotpasswordPageModule)
  },




  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
