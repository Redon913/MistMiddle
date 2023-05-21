import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';
import { ListboxModule } from 'primeng/listbox';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  exports: [
    SidebarModule,
    ButtonModule,
    InputTextModule,
    SlideMenuModule,
    MenubarModule,
    CarouselModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    GalleriaModule,
    CardModule,
    RadioButtonModule,
    FieldsetModule,
    DividerModule,
    CheckboxModule,
    BadgeModule,
    ListboxModule,
    TimelineModule,
  ],
})
export class MaterialModule {}
