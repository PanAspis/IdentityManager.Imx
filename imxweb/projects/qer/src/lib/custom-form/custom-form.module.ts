import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService, MenuItem, ClassloggerService } from 'qbm';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from 'qbm';
import { CustomFormComponent } from './custom-form.component';

const routes: Routes = [
  {
    path: 'custom-form',
    component: CustomFormComponent,
    canActivate: [RouteGuardService],
    resolve: [RouteGuardService],
  },
];

@NgModule({
  declarations: [CustomFormComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CustomFormModule {
  constructor(private readonly menuService: MenuService, private readonly logger: ClassloggerService) {
    this.logger.info(this, '▶️ Custom Form Module loaded');
    this.setupMenu();
  }

  /** This method defines the menu structure for the portal. */
  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], features: string[]) => {

        const menu: MenuItem = {
          id: 'ROOT_CustomForm',
          title: '#LDS#Custom form',
          sorting: '70',
          route: routes[0].path,
        };
        return menu;

    });
  }
 }
