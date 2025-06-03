import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
            TranslateModule], exports: [AillmddxComponent,
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
            TranslateModule] });
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
                        AillmtxReferralComponent
                    ],
                    imports: [
                        CommonModule,
                        TranslateModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlkZHgtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9haWRkeC1saWJyYXJ5L3NyYy9saWIvYWlkZHgtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7QUErQnpGLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUVkO1FBQ0MsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTthQUN2RDtTQUNGLENBQUM7SUFDSixDQUFDO3VHQVZVLGtCQUFrQjt3R0FBbEIsa0JBQWtCLGlCQXpCM0IsaUJBQWlCO1lBQ2pCLDBCQUEwQjtZQUMxQixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4Qix3QkFBd0IsYUFHeEIsWUFBWTtZQUNaLGVBQWUsYUFHZixpQkFBaUI7WUFDakIsMEJBQTBCO1lBQzFCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLHdCQUF3Qjt3R0FRZixrQkFBa0IsYUFObEI7WUFDVCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUN0QyxZQUFZO1lBQ1osV0FBVztTQUNaLFlBZkMsWUFBWTtZQUNaLGVBQWU7OzJGQWdCTixrQkFBa0I7a0JBM0I5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dCQUN0QyxZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBaWRkeFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9haWRkeC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWlUeFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9haXR4LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDT05GSUdfU0VSVklDRSwgRElBR05PU0lTX1NFUlZJQ0UsIEVOVklST05NRU5UIH0gZnJvbSAnLi90b2tlbic7XHJcbmltcG9ydCB7IEFpbGxtZGR4Q29tcG9uZW50IH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBBaWxsbXR4TWVkaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWlsbG10eC1tZWRpY2F0aW9uL2FpbGxtdHgtbWVkaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBaWxsbXR4QWR2aWNlQ29tcG9uZW50IH0gZnJvbSAnLi9haWxsbXR4LWFkdmljZS9haWxsbXR4LWFkdmljZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBaWxsbXR4VGVzdENvbXBvbmVudCB9IGZyb20gJy4vYWlsbG10eC10ZXN0L2FpbGxtdHgtdGVzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBaWxsbXR4Rm9sbG93dXBDb21wb25lbnQgfSBmcm9tICcuL2FpbGxtdHgtZm9sbG93dXAvYWlsbG10eC1mb2xsb3d1cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBaWxsbXR4UmVmZXJyYWxDb21wb25lbnQgfSBmcm9tICcuL2FpbGxtdHgtcmVmZXJyYWwvYWlsbG10eC1yZWZlcnJhbC5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQWlsbG1kZHhDb21wb25lbnQsXHJcbiAgICBBaWxsbXR4TWVkaWNhdGlvbkNvbXBvbmVudCxcclxuICAgIEFpbGxtdHhBZHZpY2VDb21wb25lbnQsXHJcbiAgICBBaWxsbXR4VGVzdENvbXBvbmVudCxcclxuICAgIEFpbGxtdHhGb2xsb3d1cENvbXBvbmVudCxcclxuICAgIEFpbGxtdHhSZWZlcnJhbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBaWxsbWRkeENvbXBvbmVudCxcclxuICAgIEFpbGxtdHhNZWRpY2F0aW9uQ29tcG9uZW50LFxyXG4gICAgQWlsbG10eEFkdmljZUNvbXBvbmVudCxcclxuICAgIEFpbGxtdHhUZXN0Q29tcG9uZW50LFxyXG4gICAgQWlsbG10eEZvbGxvd3VwQ29tcG9uZW50LFxyXG4gICAgQWlsbG10eFJlZmVycmFsQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogRU5WSVJPTk1FTlQsIHVzZVZhbHVlOiB7fSB9LCAvLyBEZWZhdWx0IHZhbHVlIChvdmVycmlkZGVuIGJ5IHRoZSBtYWluIGFwcClcclxuICAgIEFpZGR4U2VydmljZSxcclxuICAgIEFpVHhTZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWlkZHhMaWJyYXJ5TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IHtcclxuICAgIGVudmlyb25tZW50OiBhbnk7XHJcbiAgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWlkZHhMaWJyYXJ5TW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQWlkZHhMaWJyYXJ5TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEVOVklST05NRU5ULCB1c2VWYWx1ZTogY29uZmlnLmVudmlyb25tZW50IH0sXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==