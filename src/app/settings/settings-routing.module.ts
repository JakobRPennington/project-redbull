import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'app/core/models/app-routes.model';
import { SettingsComponent } from 'app/settings/containers/settings/settings.component';

const routes: Routes = [
    {
        path: AppRoutes.SETTINGS,
        component: SettingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule {}
