import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { RouterModule } from '@angular/router';
import { LeadingZeroPipe } from './pipes/leading-zero.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    LeadingZeroPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [],
    exports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        NgOptimizedImage,
        HeaderComponent,
        FooterComponent,
        HeroComponent,
        LeadingZeroPipe
    ]
})
export class SharedModule {}
