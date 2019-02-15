import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';


@NgModule({
    imports:[
     MatButtonModule, 
     MatIconModule,
     MatCardModule,
     MatSidenavModule,
     MatToolbarModule,
     MatListModule,
     MatTabsModule,
     MatInputModule,
     MatFormFieldModule,
     MatNativeDateModule,
     MatDatepickerModule,
     MatCheckboxModule
    

       
    ],
    exports:[
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule
    ]
})

export class MaterialModule{

}