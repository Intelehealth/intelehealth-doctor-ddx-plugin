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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlkZHgtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9haWRkeC1saWJyYXJ5L3NyYy9saWIvYWlkZHgtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFxQyxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBa0M5RCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFFZDtRQUNDLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7YUFDdkQ7U0FDRixDQUFDO0lBQ0osQ0FBQzt1R0FWVSxrQkFBa0I7d0dBQWxCLGtCQUFrQixpQkE1QjNCLGlCQUFpQjtZQUNqQiwwQkFBMEI7WUFDMUIsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQix3QkFBd0I7WUFDeEIsd0JBQXdCLGFBR3hCLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixnQkFBZ0IsYUFHaEIsaUJBQWlCO1lBQ2pCLDBCQUEwQjtZQUMxQixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtZQUN4Qix3QkFBd0I7d0dBUWYsa0JBQWtCLGFBTmxCO1lBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7WUFDdEMsWUFBWTtZQUNaLFdBQVc7U0FDWixZQWxCQyxZQUFZO1lBQ1osZUFBZTtZQUNmLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsZ0JBQWdCOzsyRkFnQlAsa0JBQWtCO2tCQTlCOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dCQUN0QyxZQUFZO3dCQUNaLFdBQVc7cUJBQ1o7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFpZGR4U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FpZGR4LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWlUeFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9haXR4LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ09ORklHX1NFUlZJQ0UsIERJQUdOT1NJU19TRVJWSUNFLCBFTlZJUk9OTUVOVCB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IHsgQWlsbG1kZHhDb21wb25lbnQgfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQWlsbG10eE1lZGljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2FpbGxtdHgtbWVkaWNhdGlvbi9haWxsbXR4LW1lZGljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEFpbGxtdHhBZHZpY2VDb21wb25lbnQgfSBmcm9tICcuL2FpbGxtdHgtYWR2aWNlL2FpbGxtdHgtYWR2aWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBaWxsbXR4VGVzdENvbXBvbmVudCB9IGZyb20gJy4vYWlsbG10eC10ZXN0L2FpbGxtdHgtdGVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWlsbG10eEZvbGxvd3VwQ29tcG9uZW50IH0gZnJvbSAnLi9haWxsbXR4LWZvbGxvd3VwL2FpbGxtdHgtZm9sbG93dXAuY29tcG9uZW50JztcbmltcG9ydCB7IEFpbGxtdHhSZWZlcnJhbENvbXBvbmVudCB9IGZyb20gJy4vYWlsbG10eC1yZWZlcnJhbC9haWxsbXR4LXJlZmVycmFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBNYXRFeHBhbnNpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xuaW1wb3J0IHsgTmdiVG9vbHRpcE1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFpbGxtZGR4Q29tcG9uZW50LFxuICAgIEFpbGxtdHhNZWRpY2F0aW9uQ29tcG9uZW50LFxuICAgIEFpbGxtdHhBZHZpY2VDb21wb25lbnQsXG4gICAgQWlsbG10eFRlc3RDb21wb25lbnQsXG4gICAgQWlsbG10eEZvbGxvd3VwQ29tcG9uZW50LFxuICAgIEFpbGxtdHhSZWZlcnJhbENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTmdiVG9vbHRpcE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWlsbG1kZHhDb21wb25lbnQsXG4gICAgQWlsbG10eE1lZGljYXRpb25Db21wb25lbnQsXG4gICAgQWlsbG10eEFkdmljZUNvbXBvbmVudCxcbiAgICBBaWxsbXR4VGVzdENvbXBvbmVudCxcbiAgICBBaWxsbXR4Rm9sbG93dXBDb21wb25lbnQsXG4gICAgQWlsbG10eFJlZmVycmFsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogRU5WSVJPTk1FTlQsIHVzZVZhbHVlOiB7fSB9LCAvLyBEZWZhdWx0IHZhbHVlIChvdmVycmlkZGVuIGJ5IHRoZSBtYWluIGFwcClcbiAgICBBaWRkeFNlcnZpY2UsXG4gICAgQWlUeFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBaWRkeExpYnJhcnlNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IHtcbiAgICBlbnZpcm9ubWVudDogYW55O1xuICB9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxBaWRkeExpYnJhcnlNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFpZGR4TGlicmFyeU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEVOVklST05NRU5ULCB1c2VWYWx1ZTogY29uZmlnLmVudmlyb25tZW50IH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19