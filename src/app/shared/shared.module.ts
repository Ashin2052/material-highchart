import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MatDividerModule } from '@angular/material';



@NgModule({
  declarations: [FooterComponent,SidebarComponent,HeaderComponent],
  imports: [
    CommonModule,MatDividerModule
  ],
  exports:[
    FooterComponent,SidebarComponent,HeaderComponent
  ]
})
export class SharedModule { }
