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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlkZHgtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9haWRkeC1saWJyYXJ5L3NyYy9saWIvYWlkZHgtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBcUMsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQW9DOUQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BRWQ7UUFDQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO2FBQ3ZEO1NBQ0YsQ0FBQztJQUNKLENBQUM7dUdBVlUsa0JBQWtCO3dHQUFsQixrQkFBa0IsaUJBOUIzQixpQkFBaUI7WUFDakIsMEJBQTBCO1lBQzFCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLHdCQUF3QixhQUd4QixZQUFZO1lBQ1osNkRBQTZEO1lBQzdELFdBQVc7WUFDWCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixnQkFBZ0IsYUFHaEIsaUJBQWlCO1lBQ2pCLDBCQUEwQjtZQUMxQixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4Qix3QkFBd0I7d0dBUWYsa0JBQWtCLGFBTmxCO1lBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7WUFDdEMsWUFBWTtZQUNaLFdBQVc7U0FDWixZQXBCQyxZQUFZO1lBQ1osNkRBQTZEO1lBQzdELFdBQVc7WUFDWCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixnQkFBZ0I7OzJGQWdCUCxrQkFBa0I7a0JBaEM5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWiw2REFBNkQ7d0JBQzdELFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dCQUN0QyxZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWlkZHhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWlkZHguc2VydmljZSc7XHJcbmltcG9ydCB7IEFpVHhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWl0eC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ09ORklHX1NFUlZJQ0UsIERJQUdOT1NJU19TRVJWSUNFLCBFTlZJUk9OTUVOVCB9IGZyb20gJy4vdG9rZW4nO1xyXG5pbXBvcnQgeyBBaWxsbWRkeENvbXBvbmVudCB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQWlsbG10eE1lZGljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2FpbGxtdHgtbWVkaWNhdGlvbi9haWxsbXR4LW1lZGljYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWlsbG10eEFkdmljZUNvbXBvbmVudCB9IGZyb20gJy4vYWlsbG10eC1hZHZpY2UvYWlsbG10eC1hZHZpY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWlsbG10eFRlc3RDb21wb25lbnQgfSBmcm9tICcuL2FpbGxtdHgtdGVzdC9haWxsbXR4LXRlc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWlsbG10eEZvbGxvd3VwQ29tcG9uZW50IH0gZnJvbSAnLi9haWxsbXR4LWZvbGxvd3VwL2FpbGxtdHgtZm9sbG93dXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWlsbG10eFJlZmVycmFsQ29tcG9uZW50IH0gZnJvbSAnLi9haWxsbXR4LXJlZmVycmFsL2FpbGxtdHgtcmVmZXJyYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xyXG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xyXG5pbXBvcnQgeyBOZ2JUb29sdGlwTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQWlsbG1kZHhDb21wb25lbnQsXHJcbiAgICBBaWxsbXR4TWVkaWNhdGlvbkNvbXBvbmVudCxcclxuICAgIEFpbGxtdHhBZHZpY2VDb21wb25lbnQsXHJcbiAgICBBaWxsbXR4VGVzdENvbXBvbmVudCxcclxuICAgIEFpbGxtdHhGb2xsb3d1cENvbXBvbmVudCxcclxuICAgIEFpbGxtdHhSZWZlcnJhbENvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIC8qIFJlcXVpcmVkIGJ5IFsobmdNb2RlbCldIGluIHRoZXNlIGNvbXBvbmVudHMnIHRlbXBsYXRlcy4gKi9cclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgTWF0TWVudU1vZHVsZSxcclxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgIE5nYlRvb2x0aXBNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFpbGxtZGR4Q29tcG9uZW50LFxyXG4gICAgQWlsbG10eE1lZGljYXRpb25Db21wb25lbnQsXHJcbiAgICBBaWxsbXR4QWR2aWNlQ29tcG9uZW50LFxyXG4gICAgQWlsbG10eFRlc3RDb21wb25lbnQsXHJcbiAgICBBaWxsbXR4Rm9sbG93dXBDb21wb25lbnQsXHJcbiAgICBBaWxsbXR4UmVmZXJyYWxDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBFTlZJUk9OTUVOVCwgdXNlVmFsdWU6IHt9IH0sIC8vIERlZmF1bHQgdmFsdWUgKG92ZXJyaWRkZW4gYnkgdGhlIG1haW4gYXBwKVxyXG4gICAgQWlkZHhTZXJ2aWNlLFxyXG4gICAgQWlUeFNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBaWRkeExpYnJhcnlNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzoge1xyXG4gICAgZW52aXJvbm1lbnQ6IGFueTtcclxuICB9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxBaWRkeExpYnJhcnlNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBaWRkeExpYnJhcnlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogRU5WSVJPTk1FTlQsIHVzZVZhbHVlOiBjb25maWcuZW52aXJvbm1lbnQgfSxcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19