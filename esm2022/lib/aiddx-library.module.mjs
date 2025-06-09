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
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
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
            TranslateModule,
            MatMenuModule,
            MatExpansionModule], exports: [AillmddxComponent,
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
            TranslateModule,
            MatMenuModule,
            MatExpansionModule] });
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
                        TranslateModule,
                        MatMenuModule,
                        MatExpansionModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlkZHgtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9haWRkeC1saWJyYXJ5L3NyYy9saWIvYWlkZHgtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBaUNqRSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFFZDtRQUNDLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7YUFDdkQ7U0FDRixDQUFDO0lBQ0osQ0FBQzt1R0FWVSxrQkFBa0I7d0dBQWxCLGtCQUFrQixpQkEzQjNCLGlCQUFpQjtZQUNqQiwwQkFBMEI7WUFDMUIsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQix3QkFBd0I7WUFDeEIsd0JBQXdCLGFBR3hCLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQixhQUdsQixpQkFBaUI7WUFDakIsMEJBQTBCO1lBQzFCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsd0JBQXdCO1lBQ3hCLHdCQUF3Qjt3R0FRZixrQkFBa0IsYUFObEI7WUFDVCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUN0QyxZQUFZO1lBQ1osV0FBVztTQUNaLFlBakJDLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQjs7MkZBZ0JULGtCQUFrQjtrQkE3QjlCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3FCQUN6QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7d0JBQ3RDLFlBQVk7d0JBQ1osV0FBVztxQkFDWjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFpZGR4U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FpZGR4LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBaVR4U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FpdHguc2VydmljZSc7XHJcbmltcG9ydCB7IENPTkZJR19TRVJWSUNFLCBESUFHTk9TSVNfU0VSVklDRSwgRU5WSVJPTk1FTlQgfSBmcm9tICcuL3Rva2VuJztcclxuaW1wb3J0IHsgQWlsbG1kZHhDb21wb25lbnQgfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEFpbGxtdHhNZWRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9haWxsbXR4LW1lZGljYXRpb24vYWlsbG10eC1tZWRpY2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFpbGxtdHhBZHZpY2VDb21wb25lbnQgfSBmcm9tICcuL2FpbGxtdHgtYWR2aWNlL2FpbGxtdHgtYWR2aWNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFpbGxtdHhUZXN0Q29tcG9uZW50IH0gZnJvbSAnLi9haWxsbXR4LXRlc3QvYWlsbG10eC10ZXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFpbGxtdHhGb2xsb3d1cENvbXBvbmVudCB9IGZyb20gJy4vYWlsbG10eC1mb2xsb3d1cC9haWxsbXR4LWZvbGxvd3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFpbGxtdHhSZWZlcnJhbENvbXBvbmVudCB9IGZyb20gJy4vYWlsbG10eC1yZWZlcnJhbC9haWxsbXR4LXJlZmVycmFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcclxuaW1wb3J0IHsgTWF0RXhwYW5zaW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFpbGxtZGR4Q29tcG9uZW50LFxyXG4gICAgQWlsbG10eE1lZGljYXRpb25Db21wb25lbnQsXHJcbiAgICBBaWxsbXR4QWR2aWNlQ29tcG9uZW50LFxyXG4gICAgQWlsbG10eFRlc3RDb21wb25lbnQsXHJcbiAgICBBaWxsbXR4Rm9sbG93dXBDb21wb25lbnQsXHJcbiAgICBBaWxsbXR4UmVmZXJyYWxDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBUcmFuc2xhdGVNb2R1bGUsXHJcbiAgICBNYXRNZW51TW9kdWxlLFxyXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBaWxsbWRkeENvbXBvbmVudCxcclxuICAgIEFpbGxtdHhNZWRpY2F0aW9uQ29tcG9uZW50LFxyXG4gICAgQWlsbG10eEFkdmljZUNvbXBvbmVudCxcclxuICAgIEFpbGxtdHhUZXN0Q29tcG9uZW50LFxyXG4gICAgQWlsbG10eEZvbGxvd3VwQ29tcG9uZW50LFxyXG4gICAgQWlsbG10eFJlZmVycmFsQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogRU5WSVJPTk1FTlQsIHVzZVZhbHVlOiB7fSB9LCAvLyBEZWZhdWx0IHZhbHVlIChvdmVycmlkZGVuIGJ5IHRoZSBtYWluIGFwcClcclxuICAgIEFpZGR4U2VydmljZSxcclxuICAgIEFpVHhTZXJ2aWNlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWlkZHhMaWJyYXJ5TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IHtcclxuICAgIGVudmlyb25tZW50OiBhbnk7XHJcbiAgfSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWlkZHhMaWJyYXJ5TW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQWlkZHhMaWJyYXJ5TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IEVOVklST05NRU5ULCB1c2VWYWx1ZTogY29uZmlnLmVudmlyb25tZW50IH0sXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==