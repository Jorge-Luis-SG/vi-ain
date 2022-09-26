import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LineGradientComponent } from './components/line-gradient/line-gradient.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderTeamComponent } from './components/slider-team/slider-team.component';
import { SwiperModule } from 'swiper/angular';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MintComponent } from './pages/mint/mint.component';
import { Page404Component } from './pages/page404/page404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MisteryBoxComponent } from './components/mistery-box/mistery-box.component';
import { PartnersComponent } from './components/partners/partners.component';
import { PortolioItemComponent } from './components/portolio-item/portolio-item.component';
import { TeamItemComponent } from './components/team-item/team-item.component';
import { WebComponentComponent } from './pages/portfolio/web-component/web-component.component';
import { DisruptiveComponent } from './pages/portfolio/web/disruptive/disruptive.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwitchLangComponent } from './components/switch-lang/switch-lang.component';
import { Mint2Component } from './pages/mint/mint2/mint2.component';
import { ServicesComponent } from './pages/services/services.component';
import { SliderComponent } from './pages/services/slider/slider.component';
import { SliderStacksComponent } from './pages/services/slider-stacks/slider-stacks.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SliderTeam1Component } from './pages/team/slider-team1/slider-team1.component';
import { SliderTeam2Component } from './pages/team/slider-team2/slider-team2.component';
import { PostlastedComponent } from './pages/blogs/postlasted/postlasted.component';
import { BlogItemComponent } from './pages/blogs/blog-item/blog-item.component';
import { TopMenuComponent } from './pages/blogs/top-menu/top-menu.component';
import { PageBlogComponent } from './pages/blogs/page-blog/page-blog.component';
import { MoreBlogsComponent } from './pages/blogs/more-blogs/more-blogs.component';
import { LangComponent } from './lang/lang.component';
import { MestComponent } from './pages/portfolio/web/mest/mest.component';
import { NftixComponent } from './pages/portfolio/web/nftix/nftix.component';
import { PandarianComponent } from './pages/portfolio/web/pandarian/pandarian.component';
import { ItemSliderTeamComponent } from './components/slider-team/item-slider-team/item-slider-team.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LineGradientComponent,
    CardComponent,
    FooterComponent,
    SliderTeamComponent,
    RedesSocialesComponent,
    PortfolioComponent,
    MintComponent,
    Page404Component,
    HomeComponent,
    MisteryBoxComponent,
    PartnersComponent,
    PortolioItemComponent,
    TeamItemComponent,
    WebComponentComponent,
    DisruptiveComponent,
    SwitchLangComponent,
    Mint2Component,
    ServicesComponent,
    SliderComponent,
    SliderStacksComponent,
    ContactComponent,
    TeamComponent,
    BlogsComponent,
    SliderTeam1Component,
    SliderTeam2Component,
    PostlastedComponent,
    BlogItemComponent,
    TopMenuComponent,
    PageBlogComponent,
    MoreBlogsComponent,
    LangComponent,
    MestComponent,
    NftixComponent,
    PandarianComponent,
    ItemSliderTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
