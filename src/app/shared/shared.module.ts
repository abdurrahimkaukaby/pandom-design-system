import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BadgeComponent } from "./components/ui/badge/badge.component";
import { InputComponent } from "./components/ui/input/input.component";
import { MasterdataBasicCardComponent } from "./components/ui/card/masterdata-basic-card/masterdata-basic-card.component";
import { MasterdataSiteCardComponent } from "./components/ui/card/masterdata-site-card/masterdata-site-card.component";
import { SiteIndexCardComponent } from "./components/ui/card/site-index-card/site-index-card.component";
import { ButtonComponent } from "./components/ui/button/button.component";
import { MatIcon } from "@angular/material/icon";
import { SidebarComponent } from './components/features/layout/sidebar/sidebar.component';
import { DropdownComponent } from "./components/ui/dropdown/dropdown.component";
import { BreadcrumbComponent } from "./components/ui/breadcrumb/breadcrumb.component";
import { LayoutComponent } from "./components/features/layout/layout.component";
import { AvatarComponent } from './components/ui/avatar/avatar.component';
import { DropdownSiteComponent } from './components/features/dropdown-site/dropdown-site.component';
import { DropdownCardComponent } from './components/ui/dropdown-card/dropdown-card.component';
import { HeaderbarComponent } from './components/features/headerbar/headerbar.component';
import { PageTitleComponent } from './components/ui/page-title/page-title.component';
import { StepperComponent } from './components/ui/stepper/stepper.component';
import { FileInputComponent } from './components/ui/file-input/file-input.component';
import { GetBaseUrlPipe } from "./pipes/transform-base-url.pipe";
import { LoadingRingComponent } from './components/ui/loading-ring/loading-ring.component';
import { ModalComponent } from "./components/ui/modal/modal.component";
import { DropdownMenuComponent } from './components/ui/dropdown-menu/dropdown-menu.component';
import { ConfirmationModalComponent } from './components/features/confirmation-modal/confirmation-modal.component';
import { ConfirmationWrapperComponent } from "./components/features/confirmation-modal/confirmation-wrapper/confirmation-wrapper.component";
import { SidebarService } from "./components/features/layout/sidebar/sidebar.service";
import { NoDataIlluComponent } from './components/ui/no-data-illu/no-data-illu.component';
import { FooterPaginationComponent } from './components/ui/footer-pagination/footer-pagination.component';
import { ToasterComponent } from './components/features/toaster/toaster.component';
import { ToasterWrapperComponent } from './components/features/toaster/toaster-wrapper/toaster-wrapper.component';
import { DropdownSearchComponent } from './components/ui/dropdown-search/dropdown-search.component';
import { ViewSpecificationComponent } from './components/features/drawer/view-specification/view-specification.component';
import { DropdownDescriptionComponent } from './components/ui/dropdown-description/dropdown-description.component';
import { UploadFileService } from "../core/services/upload-file.service";
import { SearchAutoSuggestComponent } from './components/ui/search-auto-suggest/search-auto-suggest.component';
import { TransformSelectionValuePipe } from "./pipes/transform-selection-value.pipe";
import { DetailRunningHourComponent } from './components/features/drawer/detail-running-hour/detail-running-hour.component';
import { TransformNumberCommaPipe } from "./pipes/transform-number-comma.pipe";
import { TransformSummaryRunningHourPipe } from "./pipes/transform-summary-running-hour.pipe";
import { MonthPickerComponent } from './components/ui/month-picker/month-picker.component';
import { CheckArrayDuplicatePipe } from "./pipes/transform-check-array-duplilcate.pipe";
import { CompareDateStringPipe } from "./pipes/transform-compare-date-string.pipe";
import { TabComponent } from './components/ui/tab/tab.component';
import { CodeHighlighterComponent } from './components/code-highlighter/code-highlighter.component';
import { PropsWrapperComponent } from './components/ui/props-wrapper/props-wrapper.component';
import { CardBasicComponent } from './components/ui/card-basic/card-basic.component';
import { DatePickerRangeComponent } from "./components/ui/date-picker-range/date-picker-range.component";
import { DatePickerComponent } from "./components/ui/date-picker/date-picker.component";

@NgModule({
    declarations: [
      BadgeComponent,
      InputComponent,
      MasterdataBasicCardComponent,
      MasterdataSiteCardComponent,
      SiteIndexCardComponent,
      ButtonComponent,
      BreadcrumbComponent,
      SidebarComponent,
      DropdownComponent,
      LayoutComponent,
      AvatarComponent,
      DropdownSiteComponent,
      DropdownCardComponent,
      HeaderbarComponent,
      PageTitleComponent,
      StepperComponent,
      FileInputComponent,
      GetBaseUrlPipe,
      LoadingRingComponent,
      ModalComponent,
      DropdownMenuComponent,
      ConfirmationModalComponent,
      ConfirmationWrapperComponent,
      NoDataIlluComponent,
      FooterPaginationComponent,
      ToasterComponent,
      ToasterWrapperComponent,
      DatePickerRangeComponent,
      DropdownSearchComponent,
      ViewSpecificationComponent,
      DropdownDescriptionComponent,
      SearchAutoSuggestComponent,
      TransformSelectionValuePipe,
      DetailRunningHourComponent,
      TransformNumberCommaPipe,
      TransformSummaryRunningHourPipe,
      MonthPickerComponent,
      CheckArrayDuplicatePipe,
      CompareDateStringPipe,
      TabComponent,
      CodeHighlighterComponent,
      PropsWrapperComponent,
      CardBasicComponent,
      DatePickerComponent,
    ],
    imports: [
      RouterModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatIcon,
    ],
    exports: [
      BadgeComponent,
      InputComponent,
      MasterdataBasicCardComponent,
      MasterdataSiteCardComponent,
      SiteIndexCardComponent,
      ButtonComponent,
      BreadcrumbComponent,
      SidebarComponent,
      DropdownComponent,
      LayoutComponent,
      AvatarComponent,
      DropdownSiteComponent,
      DropdownCardComponent,
      HeaderbarComponent,
      PageTitleComponent,
      StepperComponent,
      FileInputComponent,
      GetBaseUrlPipe,
      LoadingRingComponent,
      ModalComponent,
      DropdownMenuComponent,
      ConfirmationModalComponent,
      ConfirmationWrapperComponent,
      NoDataIlluComponent,
      FooterPaginationComponent,
      ToasterComponent,
      ToasterWrapperComponent,
      DatePickerRangeComponent,
      DropdownSearchComponent,
      ViewSpecificationComponent,
      DropdownDescriptionComponent,
      SearchAutoSuggestComponent,
      TransformSelectionValuePipe,
      DetailRunningHourComponent,
      TransformNumberCommaPipe,
      TransformSummaryRunningHourPipe,
      MonthPickerComponent,
      CheckArrayDuplicatePipe,
      CompareDateStringPipe,
      TabComponent,
      CodeHighlighterComponent,
      PropsWrapperComponent,
      CardBasicComponent,
      DatePickerComponent,

    ],
    providers: [
      UploadFileService,
      // dummyManageSitesProvider,
      // dummyManageSubCategoryProvider,
      // dummyManageBrandsProvider
    ],
  })
  export class SharedModule {}