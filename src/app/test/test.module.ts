import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { TestDetailsComponent } from 'app/test/containers/test-details/test-details.component';
import { TestSidebarComponent } from 'app/test/containers/test-sidebar/test-sidebar.component';
import { TestComponent } from 'app/test/containers/test/test.component';
import { TestRoutingModule } from 'app/test/test-routing.module';

@NgModule({
    declarations: [TestComponent, TestDetailsComponent, TestSidebarComponent],
    imports: [
        // load shared components, services etc.
        SharedModule,

        // set up methodology routes
        TestRoutingModule
    ]
})
export class TestModule {}
