// 3th party
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';

import { RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material';

const globalRippleConfig: RippleGlobalOptions = {
    disabled: false,
    baseSpeedFactor: 1.5
}

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatProgressBarModule,
        MatExpansionModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTabsModule,
        MatExpansionModule,
        MatProgressBarModule
    ],
    providers: [
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
    ]
})
export class MaterialModule { }
