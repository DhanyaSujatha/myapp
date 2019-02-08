import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatInputModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field'

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
     MatFormFieldModule
    

       
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
        MatFormFieldModule
    ]
})

export class MaterialModule{

}