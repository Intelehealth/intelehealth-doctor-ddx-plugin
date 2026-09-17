import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiddxService } from '../services/aiddx.service';
import { AiTxService } from '../services/aitx.service';
import { ENVIRONMENT } from './token';
import { AillmddxComponent } from '../public-api';
import { TranslateModule } from '@ngx-translate/core';
import { AillmtxMedicationComponent } from './aillmtx-medication/aillmtx-medication.component';
import { AillmtxAdviceComponent } from './aillmtx-advice/aillmtx-advice.component';
import { AillmtxTestComponent } from './aillmtx-test/aillmtx-test.component';
import { AillmtxFollowupComponent } from './aillmtx-followup/aillmtx-followup.component';
import { AillmtxReferralComponent } from './aillmtx-referral/aillmtx-referral.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export class AiddxLibraryModule {
    static forRoot(config) {
        return {
            ngModule: AiddxLibraryModule,
            providers: [
                { provide: ENVIRONMENT, useValue: config.environment },
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, declarations: [AillmddxComponent,
            AillmtxMedicationComponent,
            AillmtxAdviceComponent,
            AillmtxTestComponent,
            AillmtxFollowupComponent,
            AillmtxReferralComponent], imports: [CommonModule,
            /* Required by [(ngModel)] in these components' templates. */
            FormsModule,
            TranslateModule,
            MatMenuModule,
            MatExpansionModule,
            NgbTooltipModule], exports: [AillmddxComponent,
            AillmtxMedicationComponent,
            AillmtxAdviceComponent,
            AillmtxTestComponent,
            AillmtxFollowupComponent,
            AillmtxReferralComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, providers: [
            { provide: ENVIRONMENT, useValue: {} },
            AiddxService,
            AiTxService
        ], imports: [CommonModule,
            /* Required by [(ngModel)] in these components' templates. */
            FormsModule,
            TranslateModule,
            MatMenuModule,
            MatExpansionModule,
            NgbTooltipModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AillmddxComponent,
                        AillmtxMedicationComponent,
                        AillmtxAdviceComponent,
                        AillmtxTestComponent,
                        AillmtxFollowupComponent,
                        AillmtxReferralComponent,
                    ],
                    imports: [
                        CommonModule,
                        /* Required by [(ngModel)] in these components' templates. */
                        FormsModule,
                        TranslateModule,
                        MatMenuModule,
                        MatExpansionModule,
                        NgbTooltipModule
                    ],
                    exports: [
                        AillmddxComponent,
                        AillmtxMedicationComponent,
                        AillmtxAdviceComponent,
                        AillmtxTestComponent,
                        AillmtxFollowupComponent,
                        AillmtxReferralComponent
                    ],
                    providers: [
                        { provide: ENVIRONMENT, useValue: {} },
                        AiddxService,
                        AiTxService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlkZHgtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9haWRkeC1saWJyYXJ5L3NyYy9saWIvYWlkZHgtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBcUMsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQW9DOUQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BRWQ7UUFDQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO2FBQ3ZEO1NBQ0YsQ0FBQztJQUNKLENBQUM7dUdBVlUsa0JBQWtCO3dHQUFsQixrQkFBa0IsaUJBOUIzQixpQkFBaUI7WUFDakIsMEJBQTBCO1lBQzFCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLHdCQUF3QixhQUd4QixZQUFZO1lBQ1osNkRBQTZEO1lBQzdELFdBQVc7WUFDWCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixnQkFBZ0IsYUFHaEIsaUJBQWlCO1lBQ2pCLDBCQUEwQjtZQUMxQixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4Qix3QkFBd0I7d0dBUWYsa0JBQWtCLGFBTmxCO1lBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7WUFDdEMsWUFBWTtZQUNaLFdBQVc7U0FDWixZQXBCQyxZQUFZO1lBQ1osNkRBQTZEO1lBQzdELFdBQVc7WUFDWCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixnQkFBZ0I7OzJGQWdCUCxrQkFBa0I7a0JBaEM5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWiw2REFBNkQ7d0JBQzdELFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dCQUN0QyxZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWlkZHhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWlkZHguc2VydmljZSc7XG5pbXBvcnQgeyBBaVR4U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FpdHguc2VydmljZSc7XG5pbXBvcnQgeyBDT05GSUdfU0VSVklDRSwgRElBR05PU0lTX1NFUlZJQ0UsIEVOVklST05NRU5UIH0gZnJvbSAnLi90b2tlbic7XG5pbXBvcnQgeyBBaWxsbWRkeENvbXBvbmVudCB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBBaWxsbXR4TWVkaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWlsbG10eC1tZWRpY2F0aW9uL2FpbGxtdHgtbWVkaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWlsbG10eEFkdmljZUNvbXBvbmVudCB9IGZyb20gJy4vYWlsbG10eC1hZHZpY2UvYWlsbG10eC1hZHZpY2UuY29tcG9uZW50JztcbmltcG9ydCB7IEFpbGxtdHhUZXN0Q29tcG9uZW50IH0gZnJvbSAnLi9haWxsbXR4LXRlc3QvYWlsbG10eC10ZXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBaWxsbXR4Rm9sbG93dXBDb21wb25lbnQgfSBmcm9tICcuL2FpbGxtdHgtZm9sbG93dXAvYWlsbG10eC1mb2xsb3d1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWlsbG10eFJlZmVycmFsQ29tcG9uZW50IH0gZnJvbSAnLi9haWxsbXR4LXJlZmVycmFsL2FpbGxtdHgtcmVmZXJyYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5pbXBvcnQgeyBOZ2JUb29sdGlwTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWlsbG1kZHhDb21wb25lbnQsXG4gICAgQWlsbG10eE1lZGljYXRpb25Db21wb25lbnQsXG4gICAgQWlsbG10eEFkdmljZUNvbXBvbmVudCxcbiAgICBBaWxsbXR4VGVzdENvbXBvbmVudCxcbiAgICBBaWxsbXR4Rm9sbG93dXBDb21wb25lbnQsXG4gICAgQWlsbG10eFJlZmVycmFsQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIC8qIFJlcXVpcmVkIGJ5IFsobmdNb2RlbCldIGluIHRoZXNlIGNvbXBvbmVudHMnIHRlbXBsYXRlcy4gKi9cbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTmdiVG9vbHRpcE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWlsbG1kZHhDb21wb25lbnQsXG4gICAgQWlsbG10eE1lZGljYXRpb25Db21wb25lbnQsXG4gICAgQWlsbG10eEFkdmljZUNvbXBvbmVudCxcbiAgICBBaWxsbXR4VGVzdENvbXBvbmVudCxcbiAgICBBaWxsbXR4Rm9sbG93dXBDb21wb25lbnQsXG4gICAgQWlsbG10eFJlZmVycmFsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogRU5WSVJPTk1FTlQsIHVzZVZhbHVlOiB7fSB9LCAvLyBEZWZhdWx0IHZhbHVlIChvdmVycmlkZGVuIGJ5IHRoZSBtYWluIGFwcClcbiAgICBBaWRkeFNlcnZpY2UsXG4gICAgQWlUeFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBaWRkeExpYnJhcnlNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IHtcbiAgICBlbnZpcm9ubWVudDogYW55O1xuICB9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxBaWRkeExpYnJhcnlNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFpZGR4TGlicmFyeU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEVOVklST05NRU5ULCB1c2VWYWx1ZTogY29uZmlnLmVudmlyb25tZW50IH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19