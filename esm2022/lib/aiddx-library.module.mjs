import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiddxService } from '../services/aiddx.service';
import { ENVIRONMENT } from './token';
import { AillmddxComponent } from '../public-api';
import { TranslateModule } from '@ngx-translate/core';
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
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, declarations: [AillmddxComponent], imports: [CommonModule,
            TranslateModule], exports: [AillmddxComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, providers: [
            { provide: ENVIRONMENT, useValue: {} },
            AiddxService
        ], imports: [CommonModule,
            TranslateModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: AiddxLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AillmddxComponent
                    ],
                    imports: [
                        CommonModule,
                        TranslateModule
                    ],
                    exports: [
                        AillmddxComponent
                    ],
                    providers: [
                        { provide: ENVIRONMENT, useValue: {} },
                        AiddxService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlkZHgtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9haWRkeC1saWJyYXJ5L3NyYy9saWIvYWlkZHgtbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQXFDLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQW9CdEQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BRWQ7UUFDQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO2FBQ3ZEO1NBQ0YsQ0FBQztJQUNKLENBQUM7dUdBVlUsa0JBQWtCO3dHQUFsQixrQkFBa0IsaUJBZDNCLGlCQUFpQixhQUdqQixZQUFZO1lBQ1osZUFBZSxhQUdmLGlCQUFpQjt3R0FPUixrQkFBa0IsYUFMbEI7WUFDVCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUN0QyxZQUFZO1NBQ2IsWUFUQyxZQUFZO1lBQ1osZUFBZTs7MkZBVU4sa0JBQWtCO2tCQWhCOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3FCQUNsQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7d0JBQ3RDLFlBQVk7cUJBQ2I7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFpZGR4U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FpZGR4LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ09ORklHX1NFUlZJQ0UsIERJQUdOT1NJU19TRVJWSUNFLCBFTlZJUk9OTUVOVCB9IGZyb20gJy4vdG9rZW4nO1xuaW1wb3J0IHsgQWlsbG1kZHhDb21wb25lbnQgfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQWlsbG1kZHhDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFpbGxtZGR4Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogRU5WSVJPTk1FTlQsIHVzZVZhbHVlOiB7fSB9LCAvLyBEZWZhdWx0IHZhbHVlIChvdmVycmlkZGVuIGJ5IHRoZSBtYWluIGFwcClcbiAgICBBaWRkeFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBaWRkeExpYnJhcnlNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IHtcbiAgICBlbnZpcm9ubWVudDogYW55O1xuICB9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxBaWRkeExpYnJhcnlNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFpZGR4TGlicmFyeU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEVOVklST05NRU5ULCB1c2VWYWx1ZTogY29uZmlnLmVudmlyb25tZW50IH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19