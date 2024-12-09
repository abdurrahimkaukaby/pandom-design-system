import{a as Se}from"./chunk-6H3ASCAY.js";import{A as ne,B as _,C as he,D as xe,G as ve,H as D,J as L,K as P,L as k,M as ye,h as ie,i as se,j as pe,k as le,l as B,m as de,q as ce,r as me,s as ue,t as Q,u as ge,v as be,w as fe,z as I}from"./chunk-LQK2PMBP.js";import{$ as ee,$a as h,Ab as ae,Bb as Y,Hb as oe,Ib as S,Ja as y,Jb as C,La as a,Q as X,_ as v,bb as i,fb as t,g as x,gb as e,ha as F,hb as c,ia as A,jc as w,kb as q,lb as g,lc as T,mb as b,mc as E,pc as re,tb as n,vb as te,yb as u}from"./chunk-T2JPXMXZ.js";import{a as H,b as M,f as U}from"./chunk-DM275RSA.js";var Ce=U(L());var We=()=>["usage","guide"];function Ne(o,r){o&1&&(t(0,"div",32),c(1,"app-dropdown-card",33),t(2,"div",34)(3,"div",35),c(4,"mat-icon",36),e(),n(5," Log out "),e()()),o&2&&(i("@accordion",void 0),a(),i("border",!1)("iconButton",!1))}function qe(o,r){if(o&1){let p=q();t(0,"div",8)(1,"span",9),n(2," An avatar is a component that used as a visual identifier for a user or entity in digital spaces, often used in profiles, games, and forums to embody identity. "),e(),t(3,"span",10),n(4,"Default "),e(),t(5,"span",11),n(6,"Use square avatars to represent entities, such as projects, repositories, or spaces. If no image or icon is available, use initials as an identifier. Use a circle avatar to represent a person. "),e(),t(7,"app-code-highlighter",12)(8,"div",13)(9,"div",14)(10,"div",15),c(11,"app-avatar",16)(12,"app-avatar",17)(13,"app-avatar",18)(14,"app-avatar",19)(15,"app-avatar",20),e(),t(16,"span",21),n(17," Default initial avatar "),e()(),t(18,"div",14)(19,"button",22),g("blur",function(){F(p);let s=b();return A(s.onBlurButton())}),t(20,"app-dropdown-card",23),g("click",function(){F(p);let s=b();return A(s.onToggle())}),e(),h(21,Ne,6,3,"div",24),e(),t(22,"span",21),n(23," Example usage on detail account "),e()()()(),t(24,"span",10),n(25,"Icon Color "),e(),t(26,"span",11),n(27,"You can adjust the color of the avatars to provide additional information about the entity, such as its status or whether it is disabled."),e(),t(28,"app-code-highlighter",12)(29,"div",13)(30,"div",14)(31,"div",15),c(32,"app-avatar",25)(33,"app-avatar",26)(34,"app-avatar",27)(35,"app-avatar",28),e(),t(36,"span",21),n(37," Colored icon avatar "),e()()()(),t(38,"span",10),n(39,"Image Rounded "),e(),t(40,"span",11),n(41,"Use a circle avatar to represent a person."),e(),t(42,"app-code-highlighter",29)(43,"div",14)(44,"div",15),c(45,"app-avatar",30)(46,"app-avatar",31),e(),t(47,"span",21),n(48," Image avatar "),e()()()()}if(o&2){let p=b();i("@accordion",void 0),a(7),i("codeHtml",p.yourCode),a(13),i("isActive",p.isExpand)("border",!0)("iconButton",!1),a(),i("ngIf",p.isExpand),a(7),i("codeHtml",p.yourCodeIcon),a(14),i("codeHtml",p.yourCodeImage)}}function Ge(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",11),n(4,"generate the avatar component"),e(),t(5,"div",37)(6,"span",38),n(7,"Angular CLI"),e(),t(8,"span",39),n(9,'ng g c "your-desired-path"/avatar'),e()(),t(10,"span",11),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",40)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",41)(17,"app-props-wrapper",42)(18,"app-props-wrapper",43)(19,"app-props-wrapper",44)(20,"app-props-wrapper",45)(21,"app-props-wrapper",46)(22,"app-props-wrapper",47),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlAvatar)("codeTs",p.codeTsAvatar)}}var we=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.isExpand=!1,this.yourCode=`
    <app-avatar title="H" mode="normal"></app-avatar>
    <app-avatar title="H" mode="compact"></app-avatar>
    <app-avatar title="H" mode="compact" textSize="xxs"></app-avatar>
  `,this.yourCodeIcon=`
    <app-avatar color="error" title="H" mode="normal" icon="ph-regular:codepen-logo"></app-avatar>
    <app-avatar color="warning" title="H" mode="compact" textSize="xs" icon="ph-regular:codepen-logo"></app-avatar>
    <app-avatar color="success" title="H" mode="compact" textSize="xxs" icon="ph-regular:codepen-logo"></app-avatar>
  `,this.yourCodeImage=`
    <app-avatar title="H" mode="normal" rounded="full" image="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"></app-avatar>
    <app-avatar title="H" mode="compact" rounded="full" image="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"></app-avatar>
  `,this.codeHtmlAvatar=`
    <div 
      [ngClass]="{'h-[35px] w-[35px]' : mode === 'normal',
                  'h-[22px] w-[22px]' : mode === 'compact',
                  'text-[10px]' : textSize === 'xxs',
                  'text-xs' : textSize === 'xs',
                  'text-sm' : textSize === 'sm',
                  'bg-blue-500' : color === 'primary',
                  'bg-red-500' : color === 'error',
                  'bg-yellow-500' : color === 'warning',
                  'bg-green-500' : color === 'success',
                  'rounded-[4px]' : rounded === 'edge',
                  'rounded-full' : rounded === 'full',

                  }"
      class="flex items-center justify-center text-white uppercase">
      {{icon === '' && image === ''? title : ''}}
      <div 
        *ngIf="icon !== ''" 
        [ngClass]="{
            'h-6 w-6' : textSize === 'sm',
            'h-4 w-4 mb-2' : textSize === 'xs',
            'h-3 w-3 mb-3' : textSize === 'xxs',
        }" 
        class="flex text-white">
        <mat-icon class="" [svgIcon]="icon"></mat-icon>
      </div>
      <img 
        *ngIf="image !== '' && icon === ''"
        [ngClass]="{
            'rounded-[4px]' : rounded === 'edge',
            'rounded-full' : rounded === 'full',
        }"
        class="flex h-full" 
        [src]="image"
        alt=""
      >
    </div>
  `,this.codeTsAvatar=`
    @Component({
      standalone : true,
      selector: 'app-avatar',
      templateUrl: './avatar.component.html',
      styleUrl: './avatar.component.css'
    })
    export class AvatarComponent {
      @Input() title: string = 'S';
      @Input() icon: string = '';
      @Input() image: string = '';
      @Input() rounded: 'full' | 'edge' = 'edge';
      @Input() color: 'primary' | 'error' | 'success' | 'warning' = 'primary';
      @Input() mode: 'normal' | 'compact' | 'none' = 'normal';
      @Input() textSize: 'xxs' | 'xs' | 'sm' = 'sm';


    }
  `}onScroll(d){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){Ce.highlightAll()}onToggle(){this.isExpand=!this.isExpand}onBlurButton(){setTimeout(()=>{this.isExpand=!1},100)}onSelectedTab(d){this.selectedTab=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-avatar-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Avatar","imageUrl","../../../../assets/images/avatar-illu.png","subtitle","An avatar is a digital icon that represents a user\u2019s identity.",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-500",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"text-text-text-secondary","text-sm"],[3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","justify-between","rounded-t-[4px]"],[1,"flex","flex-col","gap-2"],[1,"flex","gap-2","items-center"],["title","HA","mode","normal"],["title","HA","mode","normal","rounded","full"],["title","H","mode","compact"],["title","H","mode","compact","textSize","xxs"],["title","H","mode","compact","textSize","xxs","rounded","full"],[1,"text-text-text-caption","text-sm"],[1,"relative",3,"blur"],["title","Hilmy","icon","ph-regular:caret-up-down","iconStyle","secondary","activeStyle","secondary","cardStyle","full-header","avatarStyle","compact","avatarTextSize","sm",1,"cursor-pointer",3,"click","isActive","border","iconButton"],["class","absolute rounded-md border shadow-sm z-50 top-10 left-[-28px] bg-white w-[232px] divide-y-2 overflow-hidden",4,"ngIf"],["color","error","title","H","mode","normal","icon","ph-regular:codepen-logo"],["color","primary","title","H","mode","normal","icon","ph-regular:codepen-logo","rounded","full"],["color","warning","title","H","mode","compact","textSize","xs","icon","ph-regular:codepen-logo"],["color","success","title","H","mode","compact","textSize","xxs","icon","ph-regular:codepen-logo"],[1,"pb-[400px]",3,"codeHtml"],["title","H","mode","normal","rounded","full","image","https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"],["title","H","mode","compact","rounded","full","image","https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"],[1,"absolute","rounded-md","border","shadow-sm","z-50","top-10","left-[-28px]","bg-white","w-[232px]","divide-y-2","overflow-hidden"],["title","Hilmy","subtitle","hilmyabdurrrahim@gmail.com","cardStyle","normal","avatarTextSize","sm",1,"",3,"border","iconButton"],[1,"flex","cursor-pointer","p-2","px-3","text-etma-danger-500","hover:text-etma-danger-600","hover:bg-[#E4E4E7]","gap-2","duration-150"],[1,"flex","h-4","w-4"],["svgIcon","ph-duotone:sign-out",1,""],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","title","description","Used to provide custom content to screen readers. insert initial if there is no image or icon.","type","string",1,"mt-8"],["title","icon","description","An icon variable that will be showed. This example is using phosphor icon as it's package, you could adjust it by making change to mat-icon item in html.","type","string",1,"mt-8"],["title","image","description","A url to load an image from.","type","string",1,"mt-8"],["title","rounded","description","Settings to control the roundness of your avatar","type","'full' | 'edge'",1,"mt-8"],["title","color","description","Settings to control the color of your avatar","type","'primary' | 'error' | 'success' | 'warning'",1,"mt-8"],["title","mode","description","Settings to control the size of your avatar","type","'normal' | 'compact'",1,"mt-8"],["title","textSize","description","Settings to control the size of your avatar text","type","'xxs' | 'xs' | 'sm'",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,qe,49,8,"div",7)(10,Ge,23,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,We))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,fe,ve,I,D,_,P,k,ce,E],styles:[".arrow[_ngcontent-%COMP%]{transform:translate(-50%,-50%);transform:rotate(0);cursor:pointer}.arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:1.5vw;height:1.5vw;border-bottom:10px solid #b9e1fe;border-right:10px solid #b9e1fe;transform:rotate(45deg);margin:-10px;animation:_ngcontent-%COMP%_animate 1.5s infinite}.arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.1s}.arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.2s}.arrow-reverse[_ngcontent-%COMP%]{transform:translate(-50%,-50%);transform:rotate(180deg);cursor:pointer}.arrow-reverse[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:1.5vw;height:1.5vw;border-bottom:10px solid #b9e1fe;border-right:10px solid #b9e1fe;transform:rotate(45deg);margin:-10px;animation:_ngcontent-%COMP%_animate 1.5s infinite}.arrow-reverse[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.1s}.arrow-reverse[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.2s}@keyframes _ngcontent-%COMP%_animate{0%{opacity:0;transform:rotate(45deg) translate(-10px,-10px)}50%{opacity:1}to{opacity:0;transform:rotate(45deg) translate(10px,10px)}}"],data:{animation:[B]}});let o=r;return o})();var Te=U(L());var Ze=()=>["usage","guide"];function Je(o,r){if(o&1&&(t(0,"div",8)(1,"span",9),n(2," Badges are indicators of static information. They can be updated when a status changes, but they should not be actionable. "),e(),t(3,"span",10),n(4,"Default "),e(),t(5,"span",11),n(6,"Use a default badge for basic information that not need attention."),e(),t(7,"app-code-highlighter",12)(8,"div",13)(9,"div",14)(10,"div",15),c(11,"app-badge",16),e(),t(12,"span",17),n(13," the default form of a badge "),e()()()(),t(14,"span",10),n(15,"Primary "),e(),t(16,"span",11),n(17,"Use a primary badge to help draw attention to new or updated information."),e(),t(18,"app-code-highlighter",12)(19,"div",13)(20,"div",14)(21,"div",15),c(22,"app-badge",18),e()()()(),t(23,"span",10),n(24,"Icon Badge "),e(),t(25,"span",11),n(26,"Use an icon to give more information about the badge."),e(),t(27,"app-code-highlighter",12)(28,"div",13)(29,"div",14)(30,"div",15),c(31,"app-badge",19)(32,"app-badge",20),e(),t(33,"span",17),n(34," the form of an icon badge "),e()()()(),t(35,"span",10),n(36,"Status Badge "),e(),t(37,"span",11),n(38,"Use different color for each different status."),e(),t(39,"app-code-highlighter",21)(40,"div",13)(41,"div",14)(42,"div",15),c(43,"app-badge",22)(44,"app-badge",23)(45,"app-badge",24)(46,"app-badge",25)(47,"app-badge",26),e()()()()()),o&2){let p=b();i("@accordion",void 0),a(7),i("codeHtml",p.yourCodeDefault),a(11),i("codeHtml",p.yourCodePrimary),a(9),i("codeHtml",p.yourCodeIconBadge),a(12),i("codeHtml",p.yourCodeStatusBadge)}}function Ke(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",11),n(4,"generate the badge component"),e(),t(5,"div",27)(6,"span",28),n(7,"Angular CLI"),e(),t(8,"span",29),n(9,'ng g c "your-desired-path"/badge'),e()(),t(10,"span",11),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",30)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",31)(17,"app-props-wrapper",32)(18,"app-props-wrapper",33),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlBadge)("codeTs",p.codeTsBadge)}}var Ee=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.yourCodeDefault=`
    <app-badge text="default"></app-badge>
  `,this.yourCodePrimary=`
    <app-badge text="primary" color="primary"></app-badge>
  `,this.yourCodeIconBadge=`
    <app-badge icon="ph-fill:check-fat" color="success" text="correct"></app-badge>
    <app-badge text="unverified" color="warning" icon="ph-duotone:key"></app-badge>
  `,this.yourCodeStatusBadge=`
    <app-badge text="verified" color="success"></app-badge>
    <app-badge text="unverified" color="warning"></app-badge>
    <app-badge text="denied" color="error"></app-badge>
    <app-badge text="need application" color="primary"></app-badge>
    <app-badge text="not applicable"></app-badge>
  `,this.codeHtmlBadge=`
    <div 
        [ngClass]="
            color === 'primary'? 'border-blue-100 bg-blue-50 text-blue-600' :
            color === 'success'? 'border-green-100 bg-green-50 text-green-600' :
            color === 'error'? 'border-red-100 bg-red-50 text-red-600' :
            color === 'warning'? 'border-orange-100 bg-orange-50 text-orange-600' : color
            'border-slate-100 bg-slate-50 text-slate-600'"
        class="flex items-center capitalize rounded-md border gap-1 px-1">
        <div *ngIf="icon !== ''" class="flex h-4 w-4 mb-2">
            <mat-icon class="" [svgIcon]="icon"></mat-icon>
        </div>
        {{text}}
    </div>
  `,this.codeTsBadge=`
    @Component({
        standalone : true,
        selector: 'app-badge',
        templateUrl: './badge.component.html',
        styleUrl: './badge.component.css'
    })
    export class BadgeComponent {
      @Input() text: string = 'Badge';
      @Input() icon: string = '' //ph-duotone:key
      @Input() color: 'neutral' | 'primary' | 'success' | 'error' | 'warning' = 'neutral'
    }
  `}onScroll(d){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){Te.highlightAll()}onSelectedTab(d){this.selectedTab=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-badge-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Badge","imageUrl","../../../../assets/images/badge-illu.png","subtitle","Indicator of values such as labeling or notification.",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-300",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"text-text-text-secondary","text-sm"],[3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","justify-between","rounded-t-[4px]"],[1,"flex","flex-col","gap-2"],[1,"flex","gap-2","items-center"],["text","default"],[1,"text-text-text-caption","text-sm"],["text","primary","color","primary"],["icon","ph-fill:check-fat","color","success","text","correct"],["text","unverified","color","warning","icon","ph-duotone:key"],[1,"pb-[400px]",3,"codeHtml"],["text","verified","color","success"],["text","unverified","color","warning"],["text","denied","color","error"],["text","need application","color","primary"],["text","not applicable"],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","text","description","Used to provide custom content to screen readers.","type","string",1,"mt-8"],["title","icon","description","An icon variable that will be showed. This example is using phosphor icon as it's package, you could adjust it by making change to mat-icon item in html.","type","string",1,"mt-8"],["title","color","description","Settings to control the color of your badge","type","'neutral' | 'primary' | 'success' | 'error' | 'warning'",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,Je,48,5,"div",7)(10,Ke,19,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,Ze))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,ue,I,D,_,P,k,E],data:{animation:[B]}});let o=r;return o})();var _e=U(L());var Qe=()=>["usage","guide"];function Xe(o,r){if(o&1&&(t(0,"div",8)(1,"span",9),n(2,' A button is an interactive element that initiates specific actions when clicked, tapped, or activated, guiding users toward intended outcomes within an application or website. Buttons are often labeled to indicate their function\u2014such as "Submit," "Cancel," or "Learn More"\u2014giving users clear feedback about the action that will occur. '),e(),t(3,"span",10),n(4,"Primary "),e(),t(5,"span",11),n(6,"Use a primary button to call attention to a form submission or to highlight the most important call to action on a page. Primary buttons should only appear once per area, but not every screen needs a primary button. "),e(),t(7,"app-code-highlighter",12)(8,"div",13)(9,"div",14)(10,"div",15)(11,"app-button"),n(12,"Primary button"),e(),t(13,"app-button",16),n(14,"Primary button"),e(),t(15,"app-button",17),n(16,"Primary button"),e(),t(17,"app-button",18),n(18,"Primary button"),e()(),t(19,"span",19),n(20," The form of a primary button with disable example "),e()()()(),t(21,"span",10),n(22,"Secondary"),e(),t(23,"span",11),n(24,"Use a secondary button with a primary button for secondary actions, such as \u201CCancel\u201D."),e(),t(25,"app-code-highlighter",12)(26,"div",13)(27,"div",14)(28,"div",15)(29,"app-button",20),n(30,"Secondary button"),e(),t(31,"app-button",21),n(32,"Secondary button"),e(),t(33,"app-button",22),n(34,"Secondary button"),e(),t(35,"app-button",23),n(36,"Secondary button"),e()(),t(37,"span",19),n(38," The form of a secondary button with disable example "),e()()()(),t(39,"span",10),n(40,"Danger"),e(),t(41,"span",11),n(42,"A danger button is used as a final confirmation for actions that are destructive and cannot be undone, like deleting."),e(),t(43,"app-code-highlighter",12)(44,"div",13)(45,"div",14)(46,"div",15)(47,"app-button",24),n(48,"Danger button"),e(),t(49,"app-button",25),n(50,"Danger button"),e(),t(51,"app-button",26),n(52,"Danger button"),e(),t(53,"app-button",27),n(54,"Danger button"),e()(),t(55,"span",19),n(56," The form of a danger button with disable example "),e()()()(),t(57,"span",10),n(58,"Warning"),e(),t(59,"span",11),n(60,"Warning buttons confirm actions that could lead to significant changes or potential data loss. They alert users of possible issues if they continue and are often used in confirmation dialogs."),e(),t(61,"app-code-highlighter",12)(62,"div",13)(63,"div",14)(64,"div",15)(65,"app-button",28),n(66,"Warning button"),e(),t(67,"app-button",29),n(68,"Warning button"),e(),t(69,"app-button",30),n(70,"Warning button"),e(),t(71,"app-button",31),n(72,"Warning button"),e()(),t(73,"span",19),n(74," The form of a warning button with disable example "),e()()()(),t(75,"span",10),n(76,"Ghost"),e(),t(77,"span",11),n(78,"Use ghost buttons for most actions that aren't the main call to action for a page or area. Default buttons are less prominent than primary buttons."),e(),t(79,"app-code-highlighter",12)(80,"div",13)(81,"div",14)(82,"div",15)(83,"app-button",32),n(84,"Ghost button"),e(),t(85,"app-button",33),n(86,"Ghost button"),e(),t(87,"app-button",34),n(88,"Ghost button"),e(),t(89,"app-button",35),n(90,"Ghost button"),e()(),t(91,"span",19),n(92," The form of a ghost button with disable example "),e()()()(),t(93,"span",10),n(94,"Icon button"),e(),t(95,"span",11),n(96,"Buttons may include an icon before or after the text label to give more information about the button."),e(),t(97,"app-code-highlighter",12)(98,"div",13)(99,"div",14)(100,"div",15)(101,"app-button",36),n(102,"Icon before"),e(),t(103,"app-button",37),n(104,"Icon before"),e(),t(105,"app-button",38),n(106,"Icon before"),e(),t(107,"app-button",39),n(108,"Icon before"),e()(),t(109,"span",19),n(110," The form of a button with icon before the text "),e()()()(),t(111,"app-code-highlighter",12)(112,"div",13)(113,"div",14)(114,"div",15)(115,"app-button",40),n(116,"Icon after"),e(),t(117,"app-button",41),n(118,"Icon after"),e(),t(119,"app-button",42),n(120,"Icon after"),e(),t(121,"app-button",43),n(122,"Icon after"),e()(),t(123,"span",19),n(124," The form of a button with icon after the text "),e()()()(),t(125,"app-code-highlighter",44)(126,"div",13)(127,"div",14)(128,"div",15),c(129,"app-button",45)(130,"app-button",46)(131,"app-button",40)(132,"app-button",41)(133,"app-button",47)(134,"app-button",48)(135,"app-button",49)(136,"app-button",50),e(),t(137,"span",19),n(138," The form of a button with only icon "),e()()()()()),o&2){let p=b();i("@accordion",void 0),a(7),i("codeHtml",p.yourCode),a(6),i("disableTerm",!0),a(4),i("disableTerm",!0),a(8),i("codeHtml",p.yourCodeSecondary),a(6),i("disableTerm",!0),a(4),i("disableTerm",!0),a(8),i("codeHtml",p.yourCodeDanger),a(6),i("disableTerm",!0),a(4),i("disableTerm",!0),a(8),i("codeHtml",p.yourCodeWarning),a(6),i("disableTerm",!0),a(4),i("disableTerm",!0),a(8),i("codeHtml",p.yourCodeGhost),a(6),i("disableTerm",!0),a(4),i("disableTerm",!0),a(8),i("codeHtml",p.yourCodeIconBefore),a(6),i("disableTerm",!0),a(4),i("disableTerm",!0),a(4),i("codeHtml",p.yourCodeIconAfter),a(6),i("disableTerm",!0),a(4),i("disableTerm",!0),a(4),i("codeHtml",p.yourCodeIcon),a(5),i("disableTerm",!0),a(2),i("disableTerm",!0),a(2),i("disableTerm",!0),a(2),i("disableTerm",!0)}}function et(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",11),n(4,"generate the button component"),e(),t(5,"div",51)(6,"span",52),n(7,"Angular CLI"),e(),t(8,"span",53),n(9,'ng g c "your-desired-path"/button'),e()(),t(10,"span",11),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",54)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",55)(17,"app-props-wrapper",56)(18,"app-props-wrapper",57)(19,"app-props-wrapper",58)(20,"app-props-wrapper",59)(21,"app-props-wrapper",60),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlButton)("codeTs",p.codeTsButton)}}var De=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.yourCode=`
    <app-button>Primary button</app-button>
    <app-button [disableTerm]="true">Primary button</app-button>
    <app-button mode="compact">Primary button</app-button>
    <app-button [disableTerm]="true" mode="compact">Primary button</app-button>
  `,this.yourCodeSecondary=`
    <app-button color="secondary" >Secondary button</app-button>
    <app-button color="secondary" [disableTerm]="true">Secondary button</app-button>
    <app-button color="secondary" mode="compact">Secondary button</app-button>
    <app-button color="secondary" [disableTerm]="true" mode="compact">Secondary button</app-button>
  `,this.yourCodeDanger=`
    <app-button color="danger" >Danger button</app-button>
    <app-button color="danger" [disableTerm]="true">Danger button</app-button>
    <app-button color="danger" mode="compact">Danger button</app-button>
    <app-button color="danger" [disableTerm]="true" mode="compact">Danger button</app-button>
  `,this.yourCodeWarning=`
    <app-button color="warning" >Warning button</app-button>
    <app-button color="warning" [disableTerm]="true">Warning button</app-button>
    <app-button color="warning" mode="compact">Warning button</app-button>
    <app-button color="warning" [disableTerm]="true" mode="compact">Warning button</app-button>
  `,this.yourCodeGhost=`
    <app-button color="ghost" >Ghost button</app-button>
    <app-button color="ghost" [disableTerm]="true">Ghost button</app-button>
    <app-button color="ghost" mode="compact">Ghost button</app-button>
    <app-button color="ghost" [disableTerm]="true" mode="compact">Ghost button</app-button>
  `,this.yourCodeIconBefore=`
    <app-button iconLeft="ph-regular:swap">Icon before</app-button>
    <app-button iconLeft="ph-regular:swap" [disableTerm]="true">Icon before</app-button>
    <app-button iconLeft="ph-regular:swap" mode="compact">Icon before</app-button>
    <app-button iconLeft="ph-regular:swap" [disableTerm]="true" mode="compact">Icon before</app-button>
  `,this.yourCodeIconAfter=`
    <app-button color="warning" iconRight="ph-fill:eraser">Icon after</app-button>
    <app-button color="warning" iconRight="ph-fill:eraser" [disableTerm]="true">Icon after</app-button>
    <app-button color="warning" iconRight="ph-fill:eraser" mode="compact">Icon after</app-button>
    <app-button color="warning" iconRight="ph-fill:eraser" [disableTerm]="true" mode="compact">Icon after</app-button>
  `,this.yourCodeIcon=`
    <app-button color="primary" iconRight="ph-fill:eraser"></app-button>
    <app-button color="primary" iconRight="ph-fill:eraser" [disableTerm]="true"></app-button>
    <app-button color="warning" iconRight="ph-fill:eraser"></app-button>
    <app-button color="warning" iconRight="ph-fill:eraser" [disableTerm]="true"></app-button>
    <app-button color="danger" iconRight="ph-fill:eraser" mode="compact"></app-button>
    <app-button color="danger" iconRight="ph-fill:eraser" [disableTerm]="true" mode="compact"></app-button>
    <app-button color="secondary" iconRight="ph-fill:eraser" mode="compact"></app-button>
    <app-button color="secondary" iconRight="ph-fill:eraser" [disableTerm]="true" mode="compact"></app-button>
  `,this.codeHtmlButton=`
  <button 
      (blur)="onBlur()"
      [disabled]="disableTerm"
      [ngClass]="{
          'bg-blue-600 active:bg-blue-900 text-white hover:bg-blue-800 focus:ring-2 focus:ring-[#B9E1FE] disabled:opacity-75' : color === 'primary',
          'bg-[#ffffff] active:bg-[#d3d3d6] text-[#303036] hover:bg-[#E4E4E7] focus:ring-2 focus:ring-[#B9E1FE] focus:bg-[#e5e5e5] disabled:text-[#D6D6DB] border-[1px] border-[#E4E4E7]' : color === 'secondary',
          'bg-white active:bg-[#e0e0e0] text-slate-600 hover:bg-[#F4F4F5] focus:ring-2 focus:ring-[#B9E1FE] focus:bg-[#e5e5e5] disabled:text-[#D6D6DB]' : color === 'ghost',
          'bg-red-500 active:bg-red-700 hover:bg-red-600 focus:ring-2 text-etma-neutral-50 disabled:bg-[#F4F4F5] disabled:text-[#D6D6DB]' : color === 'danger',
          'bg-yellow-400 active:bg-yellow-600 hover:bg-yellow-500 focus:ring-2 text-neutral-900 disabled:opacity-75' : color === 'warning',
          'px-6 py-2 rounded-[6px] text-sm h-8' : mode === 'wide' ,
          'px-3 py-2 rounded-md text-sm h-8' : mode === 'normal' ,
          'px-2 py-1 text-xs rounded-[4px]' : mode === 'compact',
      }"
      class="flex gap-[6px] justify-center disabled:pointer-events-none items-center shadow-sm focus:outline-none duration-150"
  >
      <div 
          *ngIf="iconLeft"
          [ngClass]="{
              'h-4 w-4' : mode === 'normal' || mode === 'wide',
              'h-[14px] w-[14px]' : mode === 'compact',
              'text-neutral-600' : color === 'secondary',
          }"
          class="flex items-center">
          <mat-icon [svgIcon]="iconLeft"></mat-icon>
      </div> 
          <ng-content></ng-content>

      <div 
          *ngIf="iconRight"
          [ngClass]="{
              'h-4 w-4' : mode === 'normal' || mode === 'wide',
              'h-[14px] w-[14px]' : mode === 'compact'
          }"
          class="flex items-center">
          <mat-icon [svgIcon]="iconRight"></mat-icon>
      </div> 
  </button>
  `,this.codeTsButton=`
    @Component({
      standalone : true,
      selector: 'app-button',
      templateUrl: './button.component.html',
      styleUrl: './button.component.css'
    })
    export class ButtonComponent implements OnInit {
      @Input() disableTerm: boolean = false;
      @Input() iconRight: string
      @Input() iconLeft: string
      @Input() mode: 'normal' | 'compact' | 'wide' = 'normal'
      @Input() color: 'primary' | 'secondary' | 'ghost' | 'danger' | 'warning' = 'primary';

      @Output() onBlurEmit = new EventEmitter<void>();

      constructor() { }

      ngOnInit(): void {
      }

      onBlur(){
        this.onBlurEmit.emit()
      }
  `}onScroll(d){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){_e.highlightAll()}onSelectedTab(d){this.selectedTab=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-button-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Button","imageUrl","../../../../assets/images/button-illu1.png","subtitle","A button initiates an event or action, signaling to users what will happen next.",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-300",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"text-text-text-secondary","text-sm"],[3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","justify-between","rounded-t-[4px]"],[1,"flex","flex-col","gap-2"],[1,"flex","gap-2","items-center"],[3,"disableTerm"],["mode","compact"],["mode","compact",3,"disableTerm"],[1,"text-text-text-caption","text-xs","mt-2"],["color","secondary"],["color","secondary",3,"disableTerm"],["color","secondary","mode","compact"],["color","secondary","mode","compact",3,"disableTerm"],["color","danger"],["color","danger",3,"disableTerm"],["color","danger","mode","compact"],["color","danger","mode","compact",3,"disableTerm"],["color","warning"],["color","warning",3,"disableTerm"],["color","warning","mode","compact"],["color","warning","mode","compact",3,"disableTerm"],["color","ghost"],["color","ghost",3,"disableTerm"],["color","ghost","mode","compact"],["color","ghost","mode","compact",3,"disableTerm"],["iconLeft","ph-regular:swap"],["iconLeft","ph-regular:swap",3,"disableTerm"],["iconLeft","ph-regular:swap","mode","compact"],["iconLeft","ph-regular:swap","mode","compact",3,"disableTerm"],["color","warning","iconRight","ph-fill:eraser"],["color","warning","iconRight","ph-fill:eraser",3,"disableTerm"],["color","warning","iconRight","ph-fill:eraser","mode","compact"],["color","warning","iconRight","ph-fill:eraser","mode","compact",3,"disableTerm"],[1,"pb-[400px]",3,"codeHtml"],["color","primary","iconRight","ph-fill:eraser"],["color","primary","iconRight","ph-fill:eraser",3,"disableTerm"],["color","danger","iconRight","ph-fill:eraser","mode","compact"],["color","danger","iconRight","ph-fill:eraser","mode","compact",3,"disableTerm"],["color","secondary","iconRight","ph-fill:eraser","mode","compact"],["color","secondary","iconRight","ph-fill:eraser","mode","compact",3,"disableTerm"],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","color","description","Used to provide custom color of the button.","type","'primary' | 'secondary' | 'ghost' | 'danger' | 'warning'",1,"mt-8"],["title","iconRight","description","A custom icon right after the text to represent parents page.","type","string | currently use phospor icon",1,"mt-8"],["title","iconLeft","description","A custom icon right before the text to represent parents page.","type","string | currently use phospor icon",1,"mt-8"],["title","mode","description","A custom sixe of your button.","type","'normal' | 'compact' | 'wide'",1,"mt-8"],["title","disableTerm","description","A variable to make the button disabled.","type","boolean",1,"mt-8"],["title","onBlurEmit","description","An emitted value indicating the button's blur state.","type","EventEmitter<void>",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,Xe,139,27,"div",7)(10,et,22,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,Qe))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,Q,I,D,_,P,k,E],data:{animation:[B]}});let o=r;return o})();var Pe=U(L());var tt=()=>["usage","guide"];function nt(o,r){if(o&1&&(t(0,"div",8)(1,"span",9),n(2," Cards organize information into versatile containers, allowing users to explore a set of related items and actions. They offer a glimpse of content and provide additional details through interaction. "),e(),t(3,"span",10),n(4,"Default "),e(),t(5,"span",11),n(6,"Display content or actions related to a single subject."),e(),t(7,"app-code-highlighter",12)(8,"div",13)(9,"div",14)(10,"div",15),c(11,"app-card-basic",16),e(),t(12,"span",17),n(13," Default card "),e()(),t(14,"div",14)(15,"div",15),c(16,"app-card-basic",18),e(),t(17,"span",17),n(18," Example of a delete confirmation card "),e()()()(),t(19,"span",10),n(20,"Image card"),e(),t(21,"span",11),n(22,"You can add image on your card to give more information."),e(),t(23,"app-code-highlighter",12)(24,"div",13)(25,"div",14)(26,"div",15),c(27,"app-card-basic",19),e(),t(28,"span",17),n(29," Example of a card confirmation with image "),e()(),t(30,"div",14)(31,"div",15),c(32,"app-card-basic",20),e(),t(33,"span",17),n(34," Example of a card informarion with image "),e()()()(),t(35,"span",10),n(36,"Card with content"),e(),t(37,"span",11),n(38,"You can add content on your card dynamicalyy."),e(),t(39,"app-code-highlighter",21)(40,"div",13)(41,"div",14)(42,"div",15)(43,"app-card-basic",22)(44,"div",23),c(45,"img",24),t(46,"span",11),n(47,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e()()()(),t(48,"span",17),n(49," Example of a card confirmation with content "),e()(),t(50,"div",14)(51,"div",15)(52,"app-card-basic",25)(53,"div",23),c(54,"img",24),t(55,"span",11),n(56,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e()()()(),t(57,"span",17),n(58," Example of a card information with content "),e()()()()()),o&2){let p=b();i("@accordion",void 0),a(7),i("codeHtml",p.yourCode),a(16),i("codeHtml",p.yourCodeImage),a(9),i("isCancelButton",!1),a(7),i("codeHtml",p.yourCodeContent),a(13),i("isCancelButton",!1)}}function it(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",11),n(4,"generate the card component"),e(),t(5,"div",26)(6,"span",27),n(7,"Angular CLI"),e(),t(8,"span",28),n(9,'ng g c "your-desired-path"/card'),e()(),t(10,"span",11),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",29)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",30)(17,"app-props-wrapper",31)(18,"app-props-wrapper",32)(19,"app-props-wrapper",33)(20,"app-props-wrapper",34)(21,"app-props-wrapper",35)(22,"app-props-wrapper",36)(23,"app-props-wrapper",37),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlCard)("codeTs",p.codeTsCard)}}var ke=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.yourCode=`
    // default card
    <app-card 
        title="Card title" 
        message="Card messages or subtitles to give users instructions or to request confirmation." 
        primaryButtonText="Primary button" 
        secondaryButtonText="Secondary button">
    </app-card>

    // Example of a delete confirmation card
    <app-card 
        title="Delete item?" 
        message="Please be carefull, this action cannot be undone." 
        primaryButtonText="Delete item" 
        secondaryButtonText="Cancel" 
        primaryButtonColor="red">
    </app-card>
  `,this.yourCodeImage=`
    // Example of a card confirmation with image
    <app-card-basic 
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
        imageUrl="your image url here" 
        title="Title of content" 
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." >
    </app-card-basic>

    // Example of a card informarion with image
    <app-card-basic 
        [isCancelButton]="false"
        imageUrl="your image url here" 
        title="Title of content" 
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." >
    </app-card-basic>
  `,this.yourCodeContent=`
    // Example of a card confirmation with content
    <app-card-basic 
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
        title="Title of content" message="subtitle" >
        <div class="flex flex-col gap-4 w-full items-center justify-center mt-4">
            <img class="flex w-auto max-h-[260px]" src="your image urle here" alt="alt">
            <span class="text-text-text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
    </app-card-basic>

    // Example of a card informarion with content
    <app-card-basic 
        [isCancelButton]="false"
        title="Title of content" message="subtitle" >
        <div class="flex flex-col gap-4 w-full items-center justify-center mt-4">
            <img class="flex w-auto max-h-[260px]" src="your image urle here" alt="alt">
            <span class="text-text-text-secondary text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
    </app-card-basic>
  `,this.codeHtmlCard=`
    <div 
        class="relative bg-background-background-base-default rounded-lg shadow w-[420px] border border-border-border-base">
        <div class="flex w-full items-center justify-center">
            <img *ngIf="imageUrl && imageUrl !== ''" class="flex w-auto max-h-[260px]" [src]="imageUrl" alt="alt">
        </div>
        <div class="relative flex items-start p-6 justify-between">
            <div class="flex flex-col gap-1">
                <span class="font-medium text-base">{{title}}</span>
                <span class="text-text-text-secondary text-sm">{{message}}</span>
                <ng-content></ng-content>
            </div>
            <div 
                *ngIf="isCancelButton"
                (click)="onCancel()"
                class="flex absolute right-4 top-3 h-4 w-4 hover:text-etma-danger-500 cursor-pointer">
                <mat-icon class="" svgIcon="ph-regular:x"></mat-icon>
            </div>
        </div>
        <div 
            *ngIf="(secondaryButtonText && secondaryButtonText !== '') || (primaryButtonText && primaryButtonText !== '')"
            class="flex justify-end gap-2 px-6 py-4 bg-background-background-subtle border-t border-border-border-base w-full items-end rounded-b-lg">
            <button 
                *ngIf="secondaryButtonText && secondaryButtonText !== ''"
                (click)="onSecondaryConfirm($event)"
                type="button" 
                class="text-text-text-primary bg-background-background-base-default hover:bg-background-background-base-hover border-border-border-base border px-3 py-2 rounded-md"
            >
                {{secondaryButtonText}}
            </button>
            <button
                *ngIf="primaryButtonText && primaryButtonText !== ''"
                (click)="onConfirm($event)"
                [ngClass]="{
                    'bg-background-background-brand-default hover:bg-background-background-brand-hover' : primaryButtonColor === 'blue',
                    'bg-background-background-danger-inverse hover:bg-background-background-danger-inverse-hover' : primaryButtonColor === 'red',
                    'opacity-50' : isLoading
                }"
                type="button" 
                class="flex text-text-text-inverse border-border-border-base border px-3 py-2 rounded-md"
            >
                <div *ngIf="isLoading" class="flex pr-2 pt-1">
                    <app-loading-ring></app-loading-ring>
                </div>
                {{primaryButtonText}}
            </button>
        </div>
    </div>
  `,this.codeTsCard=`
    @Component({
      standalone: true,
      selector: 'app-card',
      templateUrl: './card.component.html',
      styleUrl: './card.component.css',
      animations: [
        SlideAnimation,
        AccordionAnimation,
        FadeInOutAnimation
      ],
    })
    export class CardBasicComponent {
      @Input() title: string = 'Are you sure?';
      @Input() message: string = 'Do you want to proceed with this action?';
      @Input() primaryButtonColor: 'blue' | 'red' = 'blue';
      @Input() primaryButtonText: string = '';
      @Input() secondaryButtonText: string = '';
      @Input() isLoading: boolean = false;
      @Input() isCancelButton: boolean = true;
      @Input() imageUrl: string = ''

      @Output() confirmed = new EventEmitter<void>();
      @Output() secondaryConfirmed = new EventEmitter<void>();
      @Output() canceled = new EventEmitter<void>();

      onConfirm(event: MouseEvent){
        event.stopPropagation();
        this.confirmed.emit();
      }

      onSecondaryConfirm(event: MouseEvent){
        event.stopPropagation();
        this.secondaryConfirmed.emit();
      }

      onCancel() {
        this.canceled.emit();
      }
    }
  `}onScroll(d){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){Pe.highlightAll()}onSelectedTab(d){this.selectedTab=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-card-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Card","imageUrl","../../../../assets/images/breadcrumb-illu.png","subtitle","Display content related to a single subject.",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-300",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"text-text-text-secondary","text-sm"],[3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","justify-between","rounded-t-[4px]"],[1,"flex","flex-col","gap-4","h-full"],[1,"flex","gap-2","items-center"],["title","Card title","message","Card messages or subtitles to give users instructions or to request confirmation.","primaryButtonText","Primary button","secondaryButtonText","Secondary button"],[1,"text-text-text-caption","text-xs"],["title","Delete item?","message","Please be carefull, this action cannot be undone.","primaryButtonText","Delete item","secondaryButtonText","Cancel","primaryButtonColor","red"],["primaryButtonText","Primary Button","secondaryButtonText","Secondary Button","imageUrl","../../../../../../assets/images/image-dummy.png","title","Title of content","message","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],["imageUrl","../../../../../../assets/images/image-dummy.png","title","Title of content","message","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",3,"isCancelButton"],[1,"pb-[400px]",3,"codeHtml"],["primaryButtonText","Primary Button","secondaryButtonText","Secondary Button","title","Title of content","message","subtitle"],[1,"flex","flex-col","gap-4","w-full","items-center","justify-center","mt-4"],["src","../../../../../../assets/images/image-dummy.png","alt","alt",1,"flex","w-auto","max-h-[260px]"],["title","Title of content","message","subtitle",3,"isCancelButton"],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","title","description","Used to provide custom title of the card.","type","string",1,"mt-8"],["title","message","description","Used to provide custom message/subtitle of the card.","type","string",1,"mt-8"],["title","primaryButtonText","description","Provide costum text on primary button","type","string",1,"mt-8"],["title","secondaryButtonText","description","Provide costum text on secondary button","type","string",1,"mt-8"],["title","primaryButtonColor","description","Provide color on primary button with red or blue color","type","'red'| 'blue' : blue is the default color",1,"mt-8"],["title","isLoading","description","A loading icon to give loading state when primary button hit.","type","boolean",1,"mt-8"],["title","isCancelButton","description","Provide access to hide or show cancel button on the top.","type","boolean",1,"mt-8"],["title","imageUrl","description","An image url to set on the top of the card.","type","string",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,nt,59,6,"div",7)(10,it,24,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,tt))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,I,D,_,P,k,he,E],data:{animation:[le,B,de]}});let o=r;return o})();var Be=U(L());var at=()=>["usage","guide"];function ot(o,r){if(o&1&&(t(0,"div",8)(1,"span",9),n(2," The Date Picker and Month Picker components are UI elements that allow users to select a date or month from a calendar. These components are commonly used in applications that require date-based interactions, such as scheduling applications. "),e(),t(3,"span",10),n(4,"Default "),e(),t(5,"span",11),n(6," Use default date picker if you want to select specific date with month and year"),e(),t(7,"app-code-highlighter",12)(8,"div",13)(9,"div",14)(10,"div",15),c(11,"app-date-picker"),e(),t(12,"span",16),n(13," Default date picker "),e()()()(),t(14,"span",10),n(15,"Month picker "),e(),t(16,"span",11),n(17," Use month picker picker if you want to select specific month and year"),e(),t(18,"app-code-highlighter",17)(19,"div",13)(20,"div",14)(21,"div",15),c(22,"app-date-picker",18),e(),t(23,"span",16),n(24," Month picker "),e()()()()()),o&2){let p=b();i("@accordion",void 0),a(7),i("codeHtml",p.yourCode),a(11),i("codeHtml",p.yourCode),a(4),i("monthPicker",!0)}}function rt(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",11),n(4,"generate the date picker component"),e(),t(5,"div",19)(6,"span",20),n(7,"Angular CLI"),e(),t(8,"span",21),n(9,'ng g c "your-desired-path"/date-picker'),e()(),t(10,"span",11),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",22)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",23)(17,"app-props-wrapper",24)(18,"app-props-wrapper",25),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlDatePicker)("codeTs",p.codeTsDatePicker)}}var He=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.yourCode=`
    <app-date-picker></app-date-picker>
  `,this.codeHtmlDatePicker=`
    <button 
        (blur)="onCloseDatePicker()"
        (click)="!monthPicker ? onOpenDatePicker() : onOpenMonthPicker()"
        [ngClass]="control.value && control.value !== ''? 'text-text-text-primary' : 'text-text-text-caption'"
        class="flex relative w-full items-center px-2 py-[6px] gap-[6px] border text-sm rounded-md focus:ring-1 focus:ring-etma-blue-200 shadow-sm bg-background-background-base-default">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13Z" />
        </svg>
        {{
            control.value && control.value !== '' && !monthPicker ? (control.value | date : 'MMM d, y') :
            control.value && control.value !== '' && monthPicker ? (control.value | date : 'MMM y') :
            monthPicker? 'Select month': 'Select date' }}
        <!-- <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.61407 6.14739C5.61405 6.1474 5.61404 6.14742 5.61402 6.14744M5.61407 6.14739L5.61402 6.14744M5.61407 6.14739L5.61402 6.14744M5.61407 6.14739L5.61402 6.14744M10.3998 9.8666L10.3857 9.85249L10.0605 9.52722L10.3998 9.8666ZM10.3998 9.8666V9.8666ZM5.61408 9.85255L5.61402 9.85249C5.61404 9.85251 5.61406 9.85253 5.61408 9.85255Z" stroke="#4D4D57"/>
        </svg> -->
        <div class="flex h-3 w-3 items-center">
            <mat-icon class="text-[#888895]" svgIcon="ph-regular:caret-up-down"></mat-icon>
        </div>
        <div @accordion *ngIf="isOpen" class="flex-col absolute z-30 p-4 rounded-md border shadow top-full left-0 mt-1 bg-background-background-base-default text-text-text-primary">
            <div *ngIf="!isSelectYear" class="flex items-center justify-between w-[224px] h-6">
                <div (click)="previousYear()" class="hover:bg-background-background-base-hover rounded-[4px] border p-[2px] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.62219 8.28941L9.78859 12.38C9.84686 12.4373 9.92112 12.4763 10.002 12.4921C10.0829 12.5079 10.1667 12.4998 10.2428 12.4688C10.319 12.4379 10.3841 12.3854 10.4299 12.318C10.4757 12.2507 10.5001 12.1716 10.5 12.0906V3.90938C10.5001 3.82843 10.4757 3.74928 10.4299 3.68195C10.3841 3.61462 10.319 3.56214 10.2428 3.53116C10.1667 3.50017 10.0829 3.49207 10.002 3.50788C9.92112 3.52369 9.84686 3.5627 9.78859 3.61997L5.62219 7.71059C5.58346 7.74858 5.55273 7.79369 5.53176 7.84335C5.51079 7.89301 5.5 7.94624 5.5 8C5.5 8.05376 5.51079 8.10699 5.53176 8.15665C5.55273 8.20631 5.58346 8.25142 5.62219 8.28941Z" />
                    </svg>
                </div>
                <span (click)="onSelectingYears()" class="font-semibold cursor-pointer">
                    {{selectedYear}}
                </span>
                <div (click)="nextYear()" class="hover:bg-background-background-base-hover rounded-[4px] border p-[2px] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3778 8.28941L6.21141 12.38C6.15314 12.4373 6.07888 12.4763 5.99801 12.4921C5.91715 12.5079 5.83333 12.4998 5.75715 12.4688C5.68098 12.4379 5.61589 12.3854 5.57011 12.318C5.52434 12.2507 5.49994 12.1716 5.5 12.0906V3.90938C5.49994 3.82843 5.52434 3.74928 5.57011 3.68195C5.61589 3.61462 5.68098 3.56214 5.75715 3.53116C5.83333 3.50017 5.91715 3.49207 5.99801 3.50788C6.07888 3.52369 6.15314 3.5627 6.21141 3.61997L10.3778 7.71059C10.4165 7.74858 10.4473 7.79369 10.4682 7.84335C10.4892 7.89301 10.5 7.94624 10.5 8C10.5 8.05376 10.4892 8.10699 10.4682 8.15665C10.4473 8.20631 10.4165 8.25142 10.3778 8.28941Z"/>
                    </svg>
                </div>
            </div>
            <div *ngIf="isSelectYear" class="flex items-center justify-between w-[224px] h-6">
                <div (click)="previousYears()" class="hover:bg-background-background-base-hover rounded-[4px] border p-[2px] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.62219 8.28941L9.78859 12.38C9.84686 12.4373 9.92112 12.4763 10.002 12.4921C10.0829 12.5079 10.1667 12.4998 10.2428 12.4688C10.319 12.4379 10.3841 12.3854 10.4299 12.318C10.4757 12.2507 10.5001 12.1716 10.5 12.0906V3.90938C10.5001 3.82843 10.4757 3.74928 10.4299 3.68195C10.3841 3.61462 10.319 3.56214 10.2428 3.53116C10.1667 3.50017 10.0829 3.49207 10.002 3.50788C9.92112 3.52369 9.84686 3.5627 9.78859 3.61997L5.62219 7.71059C5.58346 7.74858 5.55273 7.79369 5.53176 7.84335C5.51079 7.89301 5.5 7.94624 5.5 8C5.5 8.05376 5.51079 8.10699 5.53176 8.15665C5.55273 8.20631 5.58346 8.25142 5.62219 8.28941Z" />
                    </svg>
                </div>
                <span class="font-semibold">
                    {{startYear + '-' + yearRange[9]}}
                </span>
                <div (click)="nextYears()" class="hover:bg-background-background-base-hover rounded-[4px] border p-[2px] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3778 8.28941L6.21141 12.38C6.15314 12.4373 6.07888 12.4763 5.99801 12.4921C5.91715 12.5079 5.83333 12.4998 5.75715 12.4688C5.68098 12.4379 5.61589 12.3854 5.57011 12.318C5.52434 12.2507 5.49994 12.1716 5.5 12.0906V3.90938C5.49994 3.82843 5.52434 3.74928 5.57011 3.68195C5.61589 3.61462 5.68098 3.56214 5.75715 3.53116C5.83333 3.50017 5.91715 3.49207 5.99801 3.50788C6.07888 3.52369 6.15314 3.5627 6.21141 3.61997L10.3778 7.71059C10.4165 7.74858 10.4473 7.79369 10.4682 7.84335C10.4892 7.89301 10.5 7.94624 10.5 8C10.5 8.05376 10.4892 8.10699 10.4682 8.15665C10.4473 8.20631 10.4165 8.25142 10.3778 8.28941Z"/>
                    </svg>
                </div>
            </div>
            <div *ngIf="!isSelectYear" class="grid grid-cols-3 gap-1 pt-4">
                <div 
                    [ngClass]="selectedMonth === (indexMonth)? 'bg-background-background-brand-default text-text-text-inverse' : (indexMonth) === currentMonth && selectedYear === currentYear? 'bg-etma-neutral-200 hover:bg-background-background-base-hover' : 'hover:bg-background-background-base-hover'"
                    class="flex items-center justify-center h-8 rounded-md px-2 duration-150"
                    (click)="onSelectMonth(indexMonth)"
                    *ngFor="let month of shortenMonths; index as indexMonth">
                    {{month}}
                </div>
            </div>
            <div *ngIf="isSelectYear" class="grid grid-cols-3 gap-1 pt-4">
                <div 
                    [ngClass]="selectedYear === year? 'bg-background-background-brand-default text-text-text-inverse' : year === currentYear ? 'bg-etma-neutral-200 hover:bg-background-background-base-hover' : 'hover:bg-background-background-base-hover'"
                    class="flex items-center justify-center h-8 rounded-md px-2 duration-150"
                    (click)="onSelectYear(year)"
                    *ngFor="let year of yearRange; index as indexYear">
                    {{year}}
                </div>
            </div>
        </div>
        <div *ngIf="showCalendar && !isOpen && !isSelectYear && !monthPicker" class="absolute bg-white border z-50 top-9 left-0 p-2 rounded-md shadow w-[224px]">
            <div class="flex w-full justify-between content-between mt-2">
              <div class="flex items-center px-1 py-1 border hover:bg-slate-200 rounded-[4px]" (click)="previousMonth()">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.62219 8.28941L9.78859 12.38C9.84686 12.4373 9.92112 12.4763 10.002 12.4921C10.0829 12.5079 10.1667 12.4998 10.2428 12.4688C10.319 12.4379 10.3841 12.3854 10.4299 12.318C10.4757 12.2507 10.5001 12.1716 10.5 12.0906V3.90938C10.5001 3.82843 10.4757 3.74928 10.4299 3.68195C10.3841 3.61462 10.319 3.56214 10.2428 3.53116C10.1667 3.50017 10.0829 3.49207 10.002 3.50788C9.92112 3.52369 9.84686 3.5627 9.78859 3.61997L5.62219 7.71059C5.58346 7.74858 5.55273 7.79369 5.53176 7.84335C5.51079 7.89301 5.5 7.94624 5.5 8C5.5 8.05376 5.51079 8.10699 5.53176 8.15665C5.55273 8.20631 5.58346 8.25142 5.62219 8.28941Z" />
                </svg>
              </div>
              <div>
                <span (click)="onOpenMonthPicker()" class="font-semibold text-text-text-primary">
                  {{ months[selectedMonth] }} 
                </span>
                <span (click)="onSelectingYears()" class="font-semibold text-text-text-primary">
                  {{ selectedYear }}
                </span>
              </div>
              <div class="flex items-center px-1 py-1 border hover:bg-slate-200 rounded-[4px]" (click)="nextMonth()">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#888895" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3778 8.28941L6.21141 12.38C6.15314 12.4373 6.07888 12.4763 5.99801 12.4921C5.91715 12.5079 5.83333 12.4998 5.75715 12.4688C5.68098 12.4379 5.61589 12.3854 5.57011 12.318C5.52434 12.2507 5.49994 12.1716 5.5 12.0906V3.90938C5.49994 3.82843 5.52434 3.74928 5.57011 3.68195C5.61589 3.61462 5.68098 3.56214 5.75715 3.53116C5.83333 3.50017 5.91715 3.49207 5.99801 3.50788C6.07888 3.52369 6.15314 3.5627 6.21141 3.61997L10.3778 7.71059C10.4165 7.74858 10.4473 7.79369 10.4682 7.84335C10.4892 7.89301 10.5 7.94624 10.5 8C10.5 8.05376 10.4892 8.10699 10.4682 8.15665C10.4473 8.20631 10.4165 8.25142 10.3778 8.28941Z"/>
                </svg>
              </div>
            </div>
        
            <div class="grid grid-cols-7 p-1 text-center align-middle">
              <span *ngFor="let day of days">{{ day }}</span>
            </div>
            <div class="grid grid-cols-7 cursor-pointer p-1 text-center align-middle rounded-md">
              <span *ngFor="let date of calendarDays"
                  class="hover:bg-slate-200 rounded-md p-1"
                  [ngClass]="{ 
                    'text-black': date.isCurrentMonth, 
                    'bg-background-background-brand-default hover:bg-background-background-brand-hover text-white' : (date?.month + 1).toString() === (control?.value | date : 'M') && (date.day.toString() === (control?.value | date : 'd')) && date.year.toString() === (control?.value | date : 'y'),
                    'text-[#aaa]': !date.isCurrentMonth,
                    }"
                  (click)="selectDate(date)">
                {{ date.day }}
              </span>
            </div>
          </div>
    </button>
  `,this.codeTsDatePicker=`
    @Component({
      selector: 'app-date-picker',
      standalone: true,
      templateUrl: './date-picker.component.html',
      styleUrl: './date-picker.component.css',
      animations: [
        SlideAnimation,
        AccordionAnimation,
        FadeInOutAnimation
      ],
    })
    export class DatePickerComponent implements OnDestroy {
      @Input() control = new FormControl<string>(null)
      @Input() monthPicker : boolean = false
      private readonly unsubscribe$: Subject<void> = new Subject();

      @Output() onFocusEmit = new EventEmitter<void>();
      @Output() onBlurEmit = new EventEmitter<void>();

      days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

      shortenMonths = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      isOpen : boolean = false;

      showCalendar = false;
      calendarDays = [];
      isSelectYear : boolean = false;

      yearRange: number[] = [];
      currentMonth: number;
      currentYear: number;
      startYear: number;
      selectedDate: number;
      selectedMonth: number;
      selectedYear: number;

      constructor() {
        const today = new Date();
        this.currentMonth = today.getMonth();
        this.currentYear = today.getFullYear();

        this.selectedYear = this.currentYear;
        this.selectedMonth = this.currentMonth;
        
        this.startYear = this.getStartOfDecade(this.currentYear);
        this.yearRange = this.generateYearRange(this.startYear);

      getStartOfDecade(year) {
        return Math.floor(year / 10) * 10;
      }

      // Generate an array of 10 years from the start year
      generateYearRange(startYear: number) {
        return Array.from({ length: 10 }, (_, i) => startYear + i);
      }

      nextYear() {
        this.selectedYear = this.selectedYear + 1;
        // change year range
        this.startYear = this.getStartOfDecade(this.selectedYear);
        this.yearRange = this.generateYearRange(this.startYear);
        if (this.selectedMonth){
          this.control.patchValue(this.selectedYear+'-'+this.selectedMonth)
        }
      }

      nextYears() {
        this.startYear += 10;
        this.yearRange = this.generateYearRange(this.startYear);
      }

      previousYear() {
        this.selectedYear = this.selectedYear - 1;
        this.startYear = this.getStartOfDecade(this.selectedYear);
        this.yearRange = this.generateYearRange(this.startYear);
        if (this.selectedMonth){
          this.control.patchValue(this.selectedYear+'-'+this.selectedMonth)
        }
      }

      previousYears() {
        this.startYear -= 10;
        this.yearRange = this.generateYearRange(this.startYear);
      }

      onSelectMonth(indexMonth: number){
        console.log(indexMonth);
        
        this.selectedMonth = indexMonth;
        this.generateCalendar(this.selectedMonth, this.selectedYear);
        
        if (this.monthPicker){
          this.control.patchValue(this.selectedYear+'-'+this.selectedMonth);
        }

        this.isOpen = false;
      }

      onSelectYear(indexYear: number){
        this.selectedYear = indexYear;
        // this.generateCalendar(this.currentMonth, this.currentYear);
        this.generateCalendar(this.selectedMonth, this.selectedYear);

        if (this.monthPicker){
          this.control.patchValue(this.selectedYear+'-'+this.selectedMonth);
        }

        this.isSelectYear = false
      }

      onOpenMonthPicker(){
        this.isOpen = true;
      }

      onCloseMonthPicker(){
        setTimeout(()=> {
          this.isSelectYear = false;
          this.isOpen = false;
        },100)
      }

      onOpenDatePicker(){
        this.showCalendar = true;
        this.onFocusEmit.emit();
      }

      onCloseDatePicker(){
        setTimeout(()=> {
          this.isSelectYear = false;
          this.showCalendar = false;
          this.isOpen = false;
          this.onBlurEmit.emit();
        },100)
      }

      onSelectingYears(){
        this.isSelectYear = true;
        this.isOpen = true;
      }

      ngOnInit(): void {
        this.generateCalendar(this.currentMonth, this.currentYear);
      }

      toggleCalendar(): void {
        this.showCalendar = !this.showCalendar;
      }

      generateCalendar(month: number, year: number): void {
        this.calendarDays = [];
      
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of the week (0: Sunday, 1: Monday, etc.)
        const daysInCurrentMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the current month
      
        const previousMonth = month === 0 ? 11 : month - 1;
        const previousMonthYear = month === 0 ? year - 1 : year;
        const daysInPreviousMonth = new Date(previousMonthYear, previousMonth + 1, 0).getDate();
      
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
          const day = daysInPreviousMonth - i;
          this.calendarDays.push({
            day,
            month: previousMonth,
            year: previousMonthYear,
            isCurrentMonth: false
          });
        }
      
        for (let i = 1; i <= daysInCurrentMonth; i++) {
          this.calendarDays.push({
            day: i,
            month: month,
            year: year,
            isCurrentMonth: true
          });
        }
      
        const remainingDays = 42 - this.calendarDays.length; // 6 rows * 7 columns = 42 days in total on the calendar grid
        for (let i = 1; i <= remainingDays; i++) {
          const nextMonth = month === 11 ? 0 : month + 1;
          const nextMonthYear = month === 11 ? year + 1 : year;
          this.calendarDays.push({
            day: i,
            month: nextMonth,
            year: nextMonthYear,
            isCurrentMonth: false
          });
        }
      }

      previousMonth(): void {
        if (this.selectedMonth === 0) {
          this.selectedMonth = 11;
          this.selectedYear--;
        } else {
          this.selectedMonth--;
        }
        this.generateCalendar(this.selectedMonth, this.selectedYear);
      }

      nextMonth(): void {
        if (this.selectedMonth === 11) {
          this.selectedMonth = 0;
          this.selectedYear++;
        } else {
          this.selectedMonth++;
        }
        this.generateCalendar(this.selectedMonth, this.selectedYear);
      }

      selectDate(date: any): void {
        console.log('before',date)
        this.selectedDate = date.day
        this.selectedMonth = date.month
        this.selectedYear = date.year
        console.log(date)
        console.log(this.selectedDate, this.selectedMonth, this.selectedYear)

        this.control.patchValue((this.selectedMonth + 1)+'-'+this.selectedDate+'-'+this.selectedYear);
        this.showCalendar = false;
      }


      ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
      }

  `}onScroll(d){(window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){Be.highlightAll()}onSelectedTab(d){this.selectedTab=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-date-picker-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Date Picker","imageUrl","../../../../assets/images/breadcrumb-illu.png","subtitle","Allow users to select date.",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-300",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"text-text-text-secondary","text-sm"],[3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","justify-between","rounded-t-[4px]"],[1,"flex","flex-col","gap-2"],[1,"flex","gap-2","items-center"],[1,"text-text-text-caption","text-xs"],[1,"pb-[400px]",3,"codeHtml"],[3,"monthPicker"],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","control","description","Used to bind form control property to get the data.","type","FormControl : string",1,"mt-8"],["title","onFocusEmit","description","Used to catch the focus event trigger on the date picker input.","type","EventEmitter : void",1,"mt-8"],["title","onBlurEmit","description","Used to catch the blur event trigger on the date picker input.","type","EventEmitter : void",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,ot,25,4,"div",7)(10,rt,19,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,at))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,I,D,_,P,k,xe,E],data:{animation:[B]}});let o=r;return o})();var Me=U(L());var st=()=>["usage","guide"],O=()=>({route:"Parent page",label:"Parent page"}),pt=(o,r)=>[o,r],lt=()=>({route:"Other parent page",label:"Other parent page"}),dt=(o,r,p)=>[o,r,p],ct=(o,r,p,d,s,l,f,m,$e)=>[o,r,p,d,s,l,f,m,$e];function mt(o,r){if(o&1&&(t(0,"div",8)(1,"span",9),n(2," Breadcrumbs are a navigational tool that displays the user's current position within a website or application, helping them understand their path and easily navigate back through previous sections. "),e(),t(3,"span",10),n(4,"Default "),e(),t(5,"span",11),n(6,"the default breadcrumb is example if the page has no parent. "),e(),t(7,"app-code-highlighter",12)(8,"div",13)(9,"div",14)(10,"div",15),c(11,"app-breadcrumb",16),e(),t(12,"span",17),n(13," Default breadcrumb "),e()()()(),t(14,"span",10),n(15,"Parent page"),e(),t(16,"span",11),n(17,"You can adjust if there are parents pages."),e(),t(18,"app-code-highlighter",12)(19,"div",13)(20,"div",14)(21,"div",14),c(22,"app-breadcrumb",18)(23,"app-breadcrumb",19),e(),t(24,"span",17),n(25," Breadcrumb with parents "),e()()()(),t(26,"span",10),n(27,"Long breadcrumb"),e(),t(28,"span",11),n(29,"If a breadcrumb has more than eight items, it auto-collapses, showing ellipses. The first and last items remain visible, and users can expand it by selecting the ellipsis."),e(),t(30,"app-code-highlighter",20)(31,"div",13)(32,"div",14)(33,"div",15),c(34,"app-breadcrumb",18),e(),t(35,"span",17),n(36," Breadcrumb with long parents "),e()()()()()),o&2){let p=b();i("@accordion",void 0),a(7),i("codeHtml",p.yourCode),a(4),i("isSidebarToggle",!1),a(7),i("codeHtml",p.yourCodeParent),a(4),i("isSidebarToggle",!1)("parents",ae(13,pt,u(11,O),u(12,O))),a(),i("isSidebarToggle",!1)("parents",Y(19,dt,u(16,O),u(17,O),u(18,lt))),a(7),i("codeHtml",p.yourCodeLongBreadcrumb),a(4),i("isSidebarToggle",!1)("parents",oe(32,ct,[u(23,O),u(24,O),u(25,O),u(26,O),u(27,O),u(28,O),u(29,O),u(30,O),u(31,O)]))}}function ut(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",11),n(4,"generate the breadcrumb component"),e(),t(5,"div",21)(6,"span",22),n(7,"Angular CLI"),e(),t(8,"span",23),n(9,'ng g c "your-desired-path"/breadcrumb'),e()(),t(10,"span",11),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",24)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",25)(17,"app-props-wrapper",26)(18,"app-props-wrapper",27)(19,"app-props-wrapper",28),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlBreadcrumb)("codeTs",p.codeTsBreadcrumb)}}var Fe=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.yourCode=`
    <app-breadcrumb label="Home" icon="ph-duotone:house-line"></app-breadcrumb>
  `,this.yourCodeParent=`
    <app-breadcrumb [parents]="[{route:'Parent page', label:'Parent page'}]" label="Children page" icon="ph-duotone:users"></app-breadcrumb>
    <app-breadcrumb [parents]="[{route:'Parent page', label:'Parent page'},{route:'Other parent page', label:'Other parent page'}]" label="Children page" icon="ph-duotone:puzzle-piece"></app-breadcrumb>
  `,this.yourCodeLongBreadcrumb=`
    <app-breadcrumb 
      [parents]="[
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
          {route:'Parent page', label:'Parent page'},
      ]" 
      label="Children page" 
      icon="ph-duotone:users">
    </app-breadcrumb>
  `,this.codeHtmlBreadcrumb=`
    <div class="grid">
        <div class="flex gap-2 ">
            <a [routerLink]="routeIcon">
                <div 
                    class="flex h-4 w-4 -top-1 ">
                    <mat-icon
                        class="text-neutral-600" 
                        [svgIcon]="
                            icon !== ''? icon :
                            label === 'Home'? 'ph-duotone:house-line' : 
                            label === 'Avatar Component' ? 'ph-duotone:puzzle-piece' :
                            label === 'About Pandom' ? 'ph-duotone:users' : 'ph-duotone:puzzle-piece'
                        ">
                    </mat-icon>
                </div>
            </a>
            <div *ngFor="let parent of parents?.length < 9? parents : []; index as indexParent" class="flex flex-row items-center place-content-center">
                <a *ngIf="(parents?.length <= 8 && indexParent > 0) || parents?.length > 8 && indexParent === 0" [routerLink]="parent.route">
                    <h1 class="text-sm mt-[3px] text-neutral-400 font-normal mr-1 hover:text-blue-600 hover:underline duration-150">{{parent?.label}}</h1>
                </a>
                <span *ngIf="(parents?.length <= 8 && indexParent > 0) || parents?.length > 8 && indexParent === 0" class="px-1 text-neutral-400">/</span>
                <span *ngIf="parents?.length > 8 && indexParent === parents?.length" class="px-1 text-neutral-400">...</span>
                <a *ngIf="parents?.length > 8 && indexParent === parents?.length" [routerLink]="parent.route">
                    <h1 class="text-sm mt-[3px] text-neutral-400 font-normal mr-1 hover:text-blue-600 hover:underline duration-150">{{parent?.label}}</h1>
                </a>
                <span *ngIf="parents?.length > 8 && indexParent === parents?.length" class="px-1 text-neutral-400">/</span>

            </div>
            <div *ngIf="parents?.length > 8" class="flex flex-row items-center place-content-center">
                <a [routerLink]="parents[0].route">
                    <h1 class="text-sm mt-[3px] text-neutral-400 font-normal mr-1 hover:text-blue-600 hover:underline duration-150">{{parents[0].label}}</h1>
                </a>
                <span class="px-1 text-neutral-400">/</span>
                <span class="px-1 text-neutral-400">...</span>
                <span class="px-1 text-neutral-400">/</span>
            </div>
            <div>
                <h1 
                    [ngClass]="{
                        'text-[#333333]' : parents.length > 0,
                        'text-neutral-400' : parents.length === 0,
                    }"
                    class="text-sm font-normal mt-[3px]">{{label}}
                </h1>
            </div>
        </div>
    </div>
  `,this.codeTsBreadcrumb=`
    @Component({
      standalone : true,
      selector: 'app-breadcrumb',
      templateUrl: './breadcrumb.component.html',
      styleUrl: './breadcrumb.component.css'
    })
    export class BreadcrumbComponent {
      @Input() label: string = this.activatedRoute.snapshot.data['breadcrumb']['label'];
      @Input() icon: string = ''
      @Input() routeIcon: string = '/home'
      @Input() parents: {route: string, label:string}[] = this.activatedRoute.snapshot.data['breadcrumb']['parents'] || []
    }
  `}onScroll(d){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){Me.highlightAll()}onSelectedTab(d){this.selectedTab=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-breadcrumb-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Breadcrumb","imageUrl","../../../../assets/images/breadcrumb-illu.png","subtitle","Breadcrumbs are a navigation tool that shows users their location within a website or app, allowing easy backtracking.",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-300",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"text-text-text-secondary","text-sm"],[3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","justify-between","rounded-t-[4px]"],[1,"flex","flex-col","gap-2"],[1,"flex","gap-2","items-center"],["routeIcon","/component/breadcrumb","label","Home","icon","ph-duotone:house-line",3,"isSidebarToggle"],[1,"text-text-text-caption","text-xs"],["routeIcon","/component/breadcrumb","label","Children page","icon","ph-duotone:users",3,"isSidebarToggle","parents"],["routeIcon","/component/breadcrumb","label","Children page","icon","ph-duotone:puzzle-piece",3,"isSidebarToggle","parents"],[1,"pb-[400px]",3,"codeHtml"],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","label","description","Used to provide custom content of the page route.","type","string",1,"mt-8"],["title","parents","description","Parents infomation of the current page","type","{route: string, label: string}[]",1,"mt-8"],["title","icon","description","A custom icon to represent parents page.","type","string | currently use phospor icon",1,"mt-8"],["title","routeIcon","description","A routerLink directs users to a specified URL within the application when clicked.","type","string",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,mt,37,42,"div",7)(10,ut,20,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,st))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,ge,I,D,_,P,k,E],data:{animation:[B]}});let o=r;return o})();var Ae=U(L());var bt=()=>["usage","guide"];function ft(o,r){if(o&1){let p=q();t(0,"div",8)(1,"span",9),n(2," The Stepper component is a UI element that helps users navigate through a process or workflow by breaking it down into smaller, sequential steps. "),e(),t(3,"span",10),n(4,"Default "),e(),t(5,"app-code-highlighter",11)(6,"div",12)(7,"div",13)(8,"div",14)(9,"app-stepper",15),g("onEmitStep",function(s){F(p);let l=b();return A(l.onClickStepIndex(s))}),t(10,"div",16)(11,"app-button",17),g("click",function(){F(p);let s=b();return A(s.activeStepIndex===0?null:s.onChangeStep(s.activeStepIndex-1))}),n(12," Back "),e(),t(13,"app-button",18),g("click",function(){F(p);let s=b();return A(s.activeStepIndex===2?null:s.onChangeStep(s.activeStepIndex+1))}),n(14),e()()()(),t(15,"span",19),n(16," Default stepper "),e()()()()()}if(o&2){let p=b();i("@accordion",void 0),a(5),i("codeHtml",p.yourCode),a(4),i("activeStepIndex",p.activeStepIndex)("stepperData",p.stepperData),a(2),i("disableTerm",p.activeStepIndex===0),a(2),i("disableTerm",p.activeStepIndex===2),a(),te(" ",p.activeStepIndex===2?"Finish":"Next"," ")}}function ht(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",20),n(4,"generate the stepper component"),e(),t(5,"div",21)(6,"span",22),n(7,"Angular CLI"),e(),t(8,"span",23),n(9,'ng g c "your-desired-path"/stepper'),e()(),t(10,"span",20),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",24)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",25)(17,"app-props-wrapper",26)(18,"app-props-wrapper",27),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlStepper)("codeTs",p.codeTsStepper)}}var Oe=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.activeStepIndex=0,this.stepperData=[{title:"First step",isCompleted:!0,isDisable:!0},{title:"Second step",isCompleted:!1,isDisable:!0},{title:"Third step",isCompleted:!1,isDisable:!0}],this.yourCode=`
    <app-stepper 
        [activeStepIndex]="activeStepIndex"
        [stepperData]="stepperData"
        (onEmitStep)="onClickStepIndex($event)"
        class="w-full">
        <div class="flex gap-2">
            <app-button
                [disableTerm]="activeStepIndex === 0"
                (click)="activeStepIndex === 0? null : onChangeStep(activeStepIndex - 1)"
                color="secondary">
                Back
            </app-button>
            <app-button
                [disableTerm]="activeStepIndex === 2"
                iconRight="ph-fill:caret-right"
                (click)="activeStepIndex === 2? null : onChangeStep(activeStepIndex + 1)"
            >
                {{activeStepIndex === 2? 'Finish' : 'Next'}}
            </app-button>
        </div>
    </app-stepper>
  `,this.codeHtmlStepper=`
    <div class="flex justify-between px-6 py-4 w-full">
        <div class="flex">
            <div *ngFor="let step of stepperData; index as stepperIndex" class="flex">
                <div 
                    [ngClass]="{'pointer-events-none':activeStepIndex === stepperIndex}"
                    class="flex items-center gap-2">
                    <button 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'bg-[#F4F4F5] ': activeStepIndex === stepperIndex && !step?.isCompleted,
                            'bg-[#006CB7] border-etma-blue-400 text-white': step?.isCompleted,
                            'cursor-pointer': !step.isDisable,
                            'cursor-default pointer-events-none': step.isDisable,
                        }"
                        class="flex items-center justify-center h-6 w-6 rounded-md border pt-[1px] text-sm focus:border-[#006CB7] focus:shadow-sm focus:shadow-[#B9E1FE]">
                        <mat-icon *ngIf="step?.isCompleted" class="p-1 mb-[2px]" svgIcon="ph-bold:check"></mat-icon>
                        
                        {{!step?.isCompleted ? stepperIndex + 1 : ''}}
                    </button>
                    <span 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'font-medium': activeStepIndex === stepperIndex,
                            'cursor-pointer': !step.isDisable,
                            }"
                        class="flex items-center rounded-md text-sm">
                        {{step.title}}
                    </span>
                </div>
                <div *ngIf="stepperIndex + 1 !== stepperData?.length" class="flex justify-center flex-col divide-y-2 w-8 p-2">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <ng-content></ng-content>
    </div>
  `,this.codeTsStepper=`
    export interface stepperDataDTO {
      title:string;
      isCompleted : boolean;
      isDisable : boolean;
    }

    @Component({
      selector: 'app-stepper',
      standalone: true,
      templateUrl: './stepper.component.html',
      styleUrl: './stepper.component.css'
    })
    export class StepperComponent implements OnChanges {
      @Input() stepperData: stepperDataDTO[] = [
        {
          title: 'First step',
          isCompleted: false,
          isDisable: false
        },
        {
          title: 'Second step',
          isCompleted: true,
          isDisable: false
        },
        {
          title: 'Third step',
          isCompleted: false,
          isDisable: false
        },
      ]

      @Output() onEmitStep: EventEmitter<number> = new EventEmitter<number>();


      @Input() activeStepIndex : number = 0


      ngOnChanges(changes: SimpleChanges): void {
        if (changes['activeStepIndex'] && changes['activeStepIndex']?.previousValue !== changes['activeStepIndex']?.currentValue!) {}
        if (changes['stepperData'] && changes['stepperData']?.previousValue !== changes['stepperData']?.currentValue!) {}
      }

      onClickStep(index: number){
        this.onEmitStep.emit(index);
      }

    }
  `}onScroll(d){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){Ae.highlightAll()}onClickStepIndex(d){}onChangeStep(d){d===0&&(this.stepperData[1]=M(H({},this.stepperData[1]),{isCompleted:!1,isDisable:!0}),this.stepperData[2]=M(H({},this.stepperData[2]),{isCompleted:!1,isDisable:!0})),d===1&&(this.stepperData[1]=M(H({},this.stepperData[1]),{isCompleted:!0,isDisable:!0}),this.stepperData[2]=M(H({},this.stepperData[2]),{isCompleted:!1,isDisable:!0})),d===2&&(this.stepperData[1]=M(H({},this.stepperData[1]),{isCompleted:!0,isDisable:!0}),this.stepperData[2]=M(H({},this.stepperData[2]),{isCompleted:!0,isDisable:!0})),this.activeStepIndex=d}onSelectedTab(d){this.selectedTab=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-stepper-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Stepper","imageUrl","../../../../assets/images/breadcrumb-illu.png","subtitle","Option for your step by step user action",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-300",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"pb-[400px]",3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","justify-between","rounded-t-[4px]"],[1,"flex","flex-col","gap-2","w-full"],[1,"flex","gap-2","items-center","w-full"],[1,"w-full",3,"onEmitStep","activeStepIndex","stepperData"],[1,"flex","gap-2"],["color","secondary",3,"click","disableTerm"],["iconRight","ph-fill:caret-right",3,"click","disableTerm"],[1,"text-text-text-caption","text-xs"],[1,"text-text-text-secondary","text-sm"],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","stepperData","description","Used to control the data of steps aand its function.","type","stepperDataDTO[ ] : {title:string, isCompleted : boolean, isDisable : boolean}[ ]",1,"mt-8"],["title","activeStepIndex","description","Used to control the state of current step.","type","number",1,"mt-8","bg-transparent","p-0","border-0"],["title","onEmitStep","description","Used to emit if the step clicked(if only the isDisable on stepperData is false).","type","EventEmitter : number",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,ft,17,7,"div",7)(10,ht,19,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,bt))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,Q,I,D,ne,_,P,k,E],data:{animation:[B]}});let o=r;return o})();var Ye=U(L());var xt=()=>["usage","guide"],vt=()=>["First tab","Second tab","Third tab"];function yt(o,r){if(o&1){let p=q();t(0,"div",8)(1,"span",9),n(2," The Tab Bar component is a graphical user interface element used for displaying multiple views or screens in a single window or page. It allows users to switch between different tabs, each representing a different view, with only one tab visible at a time. "),e(),t(3,"span",10),n(4,"Default "),e(),t(5,"app-code-highlighter",11)(6,"div",12)(7,"div",13)(8,"div",14)(9,"app-tab",15),g("onSelectTabEmit",function(s){F(p);let l=b();return A(l.onSelectedTabChildren(s))}),e()(),t(10,"span",16),n(11," Default tab "),e()()()()()}if(o&2){let p=b();i("@accordion",void 0),a(5),i("codeHtml",p.yourCode),a(4),i("selectedTab",p.selectedTabChildren)("tabs",u(4,vt))}}function St(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",17),n(4,"generate the tab component"),e(),t(5,"div",18)(6,"span",19),n(7,"Angular CLI"),e(),t(8,"span",20),n(9,'ng g c "your-desired-path"/tab'),e()(),t(10,"span",17),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",21)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",22)(17,"app-props-wrapper",23)(18,"app-props-wrapper",24),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlTab)("codeTs",p.codeTsTab)}}var je=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.selectedTabChildren="First tab",this.yourCode=`
    <app-stepper 
        [activeStepIndex]="activeStepIndex"
        [stepperData]="stepperData"
        (onEmitStep)="onClickStepIndex($event)"
        <div class="flex gap-2">
            <app-button
                [disableTerm]="activeStepIndex === 0"
                (click)="activeStepIndex === 0? null : onChangeStep(activeStepIndex - 1)"
                color="secondary">
                Back
            </app-button>
            <app-button
                [disableTerm]="activeStepIndex === 2"
                iconRight="ph-fill:caret-right"
                (click)="activeStepIndex === 2? null : onChangeStep(activeStepIndex + 1)"
            >
                {{activeStepIndex === 2? 'Finish' : 'Next'}}
            </app-button>
        </div>
    </app-stepper>
  `,this.codeHtmlTab=`
    <div class="flex justify-between px-6 py-4 w-full">
        <div class="flex">
            <div *ngFor="let step of stepperData; index as stepperIndex" class="flex">
                <div 
                    [ngClass]="{'pointer-events-none':activeStepIndex === stepperIndex}"
                    class="flex items-center gap-2">
                    <button 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'bg-[#F4F4F5] ': activeStepIndex === stepperIndex && !step?.isCompleted,
                            'bg-[#006CB7] border-etma-blue-400 text-white': step?.isCompleted,
                            'cursor-pointer': !step.isDisable,
                            'cursor-default pointer-events-none': step.isDisable,
                        }"
                        class="flex items-center justify-center h-6 w-6 rounded-md border pt-[1px] text-sm focus:border-[#006CB7] focus:shadow-sm focus:shadow-[#B9E1FE]">
                        <mat-icon *ngIf="step?.isCompleted" class="p-1 mb-[2px]" svgIcon="ph-bold:check"></mat-icon>
                        
                        {{!step?.isCompleted ? stepperIndex + 1 : ''}}
                    </button>
                    <span 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'font-medium': activeStepIndex === stepperIndex,
                            'cursor-pointer': !step.isDisable,
                            }"
                        class="flex items-center rounded-md text-sm">
                        {{step.title}}
                    </span>
                </div>
                <div *ngIf="stepperIndex + 1 !== stepperData?.length" class="flex justify-center flex-col divide-y-2 w-8 p-2">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <ng-content></ng-content>
    </div>
  `,this.codeTsTab=`
    export interface stepperDataDTO {
      title:string;
      isCompleted : boolean;
      isDisable : boolean;
    }

    @Component({
      selector: 'app-stepper',
      standalone: true,
      templateUrl: './stepper.component.html',
      styleUrl: './stepper.component.css'
    })
    export class StepperComponent implements OnChanges {
      @Input() stepperData: stepperDataDTO[] = [
        {
          title: 'First step',
          isCompleted: false,
          isDisable: false
        },
        {
          title: 'Second step',
          isCompleted: true,
          isDisable: false
        },
        {
          title: 'Third step',
          isCompleted: false,
          isDisable: false
        },
      ]

      @Output() onEmitStep: EventEmitter<number> = new EventEmitter<number>();


      @Input() activeStepIndex : number = 0


      ngOnChanges(changes: SimpleChanges): void {
        if (changes['activeStepIndex'] && changes['activeStepIndex']?.previousValue !== changes['activeStepIndex']?.currentValue!) {}
        if (changes['stepperData'] && changes['stepperData']?.previousValue !== changes['stepperData']?.currentValue!) {}
      }

      onClickStep(index: number){
        this.onEmitStep.emit(index);
      }

    }
  `}onScroll(d){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){Ye.highlightAll()}onSelectedTab(d){this.selectedTab=d}onSelectedTabChildren(d){this.selectedTabChildren=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-tab-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Tab","imageUrl","../../../../assets/images/breadcrumb-illu.png","subtitle","Tabs are used to organize content by grouping similar information on the same page.",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-300",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"pb-[400px]",3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","justify-between","rounded-t-[4px]"],[1,"flex","flex-col","gap-2","w-full"],[1,"flex","gap-2","items-center","w-full"],[3,"onSelectTabEmit","selectedTab","tabs"],[1,"text-text-text-caption","text-xs","mt-4"],[1,"text-text-text-secondary","text-sm"],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","tabs","description","Used to set tabs data.","type","string[ ]",1,"mt-8"],["title","selectedTab","description","Used to control the selected/current tab.","type","string",1,"mt-8","bg-transparent","p-0","border-0"],["title","onSelectTabEmit","description","Used to emit if the tab selected.","type","EventEmitter : string",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,yt,12,5,"div",7)(10,St,19,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,xt))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,I,D,_,P,k,E],data:{animation:[B]}});let o=r;return o})();var Ue=U(L());var Ct=()=>["usage","guide"],G=()=>({title:"first option",value:"first value"}),Z=()=>({title:"second option",value:"second value"}),J=()=>({title:"third option",value:"third value"}),K=(o,r,p)=>[o,r,p];function wt(o,r){if(o&1&&(t(0,"div",8)(1,"span",9),n(2," The Tab Bar component is a graphical user interface element used for displaying multiple views or screens in a single window or page. It allows users to switch between different tabs, each representing a different view, with only one tab visible at a time. "),e(),t(3,"span",10),n(4,"Default "),e(),t(5,"span",11),n(6,"Use default for the default dropdown menu appearance. The default menu will scroll after its height exceeds the pre-defined amount."),e(),t(7,"app-code-highlighter",12)(8,"div",13)(9,"div",14)(10,"div",15),c(11,"app-dropdown",16),e(),t(12,"span",17),n(13," Default dropdown "),e()(),t(14,"div",14)(15,"div",15),c(16,"app-dropdown",18),e(),t(17,"span",17),n(18," With custom style "),e()(),t(19,"div",14)(20,"div",15),c(21,"app-dropdown",19),e(),t(22,"span",17),n(23," With custom style and selection icon "),e()()()(),t(24,"span",10),n(25,"Labelled "),e(),t(26,"span",11),n(27,"Use default for the default dropdown menu appearance. The default menu will scroll after its height exceeds the pre-defined amount."),e(),t(28,"app-code-highlighter",12)(29,"div",13)(30,"div",14)(31,"div",15),c(32,"app-dropdown",20),e(),t(33,"span",17),n(34," Labelled dropdown "),e()(),t(35,"div",14)(36,"div",15),c(37,"app-dropdown",21),e(),t(38,"span",17),n(39," Labelled dropdown with custom style "),e()()()(),t(40,"span",10),n(41,"Searchbar dropdown "),e(),t(42,"span",11),n(43,"Use default for the default dropdown menu appearance. The default menu will scroll after its height exceeds the pre-defined amount."),e(),t(44,"app-code-highlighter",22)(45,"div",13)(46,"div",23)(47,"div",15),c(48,"app-dropdown",24),e(),t(49,"span",17),n(50," Searchbar dropdown "),e()(),t(51,"div",23)(52,"div",15),c(53,"app-dropdown",25),e(),t(54,"span",17),n(55," Searchbar dropdown "),e()(),t(56,"div",14)(57,"div",15),c(58,"app-dropdown",26),e(),t(59,"span",17),n(60," Searchbar dropdown with label "),e()()()()()),o&2){let p=b();i("@accordion",void 0),a(7),i("codeHtml",p.yourCode),a(4),i("options",Y(26,K,u(23,G),u(24,Z),u(25,J))),a(5),i("isCustomStyle",!0)("options",Y(33,K,u(30,G),u(31,Z),u(32,J))),a(5),i("isSelectedIcon",!0)("isCustomStyle",!0)("options",Y(40,K,u(37,G),u(38,Z),u(39,J))),a(7),i("codeHtml",p.yourCode),a(4),i("options",Y(47,K,u(44,G),u(45,Z),u(46,J))),a(5),i("isCustomStyle",!0)("options",Y(54,K,u(51,G),u(52,Z),u(53,J))),a(7),i("codeHtml",p.yourCode),a(4),i("isSearch",!0)("isCustomStyle",!0)("options",Y(61,K,u(58,G),u(59,Z),u(60,J))),a(5),i("isSearch",!0)("isSelectedIcon",!0)("isCustomStyle",!0)("options",Y(68,K,u(65,G),u(66,Z),u(67,J))),a(5),i("isSearch",!0)("isCustomStyle",!0)("options",Y(75,K,u(72,G),u(73,Z),u(74,J)))}}function Tt(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",11),n(4,"generate the tab component"),e(),t(5,"div",27)(6,"span",28),n(7,"Angular CLI"),e(),t(8,"span",29),n(9,'ng g c "your-desired-path"/tab'),e()(),t(10,"span",11),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",30)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",31)(17,"app-props-wrapper",32)(18,"app-props-wrapper",33),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlTab)("codeTs",p.codeTsTab)}}var Le=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.selectedTabChildren="First tab",this.yourCode=`
    <app-stepper 
        [activeStepIndex]="activeStepIndex"
        [stepperData]="stepperData"
        (onEmitStep)="onClickStepIndex($event)"
        class="w-full">
        <div class="flex gap-2">
            <app-button
                [disableTerm]="activeStepIndex === 0"
                (click)="activeStepIndex === 0? null : onChangeStep(activeStepIndex - 1)"
                color="secondary">
                Back
            </app-button>
            <app-button
                [disableTerm]="activeStepIndex === 2"
                iconRight="ph-fill:caret-right"
                (click)="activeStepIndex === 2? null : onChangeStep(activeStepIndex + 1)"
            >
                {{activeStepIndex === 2? 'Finish' : 'Next'}}
            </app-button>
        </div>
    </app-stepper>
  `,this.codeHtmlTab=`
    <div class="flex justify-between px-6 py-4 w-full">
        <div class="flex">
            <div *ngFor="let step of stepperData; index as stepperIndex" class="flex">
                <div 
                    [ngClass]="{'pointer-events-none':activeStepIndex === stepperIndex}"
                    class="flex items-center gap-2">
                    <button 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'bg-[#F4F4F5] ': activeStepIndex === stepperIndex && !step?.isCompleted,
                            'bg-[#006CB7] border-etma-blue-400 text-white': step?.isCompleted,
                            'cursor-pointer': !step.isDisable,
                            'cursor-default pointer-events-none': step.isDisable,
                        }"
                        class="flex items-center justify-center h-6 w-6 rounded-md border pt-[1px] text-sm focus:border-[#006CB7] focus:shadow-sm focus:shadow-[#B9E1FE]">
                        <mat-icon *ngIf="step?.isCompleted" class="p-1 mb-[2px]" svgIcon="ph-bold:check"></mat-icon>
                        
                        {{!step?.isCompleted ? stepperIndex + 1 : ''}}
                    </button>
                    <span 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'font-medium': activeStepIndex === stepperIndex,
                            'cursor-pointer': !step.isDisable,
                            }"
                        class="flex items-center rounded-md text-sm">
                        {{step.title}}
                    </span>
                </div>
                <div *ngIf="stepperIndex + 1 !== stepperData?.length" class="flex justify-center flex-col divide-y-2 w-8 p-2">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <ng-content></ng-content>
    </div>
  `,this.codeTsTab=`
    export interface stepperDataDTO {
      title:string;
      isCompleted : boolean;
      isDisable : boolean;
    }

    @Component({
      selector: 'app-stepper',
      standalone: true,
      templateUrl: './stepper.component.html',
      styleUrl: './stepper.component.css'
    })
    export class StepperComponent implements OnChanges {
      @Input() stepperData: stepperDataDTO[] = [
        {
          title: 'First step',
          isCompleted: false,
          isDisable: false
        },
        {
          title: 'Second step',
          isCompleted: true,
          isDisable: false
        },
        {
          title: 'Third step',
          isCompleted: false,
          isDisable: false
        },
      ]

      @Output() onEmitStep: EventEmitter<number> = new EventEmitter<number>();


      @Input() activeStepIndex : number = 0


      ngOnChanges(changes: SimpleChanges): void {
        if (changes['activeStepIndex'] && changes['activeStepIndex']?.previousValue !== changes['activeStepIndex']?.currentValue!) {}
        if (changes['stepperData'] && changes['stepperData']?.previousValue !== changes['stepperData']?.currentValue!) {}
      }

      onClickStep(index: number){
        this.onEmitStep.emit(index);
      }

    }
  `}onScroll(d){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){Ue.highlightAll()}onSelectedTab(d){this.selectedTab=d}onSelectedTabChildren(d){this.selectedTabChildren=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-dropdown-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Dropdown","imageUrl","../../../../assets/images/breadcrumb-illu.png","subtitle","A dropdown item is an action a user can perform displayed in a group.",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-300",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"text-text-text-secondary","text-sm"],[3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","gap-8","rounded-t-[4px]"],[1,"flex","flex-col","gap-2"],[1,"flex","gap-2","items-center","w-full"],[3,"options"],[1,"text-text-text-caption","text-xs","mt-4","ml-[2px]"],[3,"isCustomStyle","options"],[3,"isSelectedIcon","isCustomStyle","options"],["label","Dropdown label",3,"options"],["label","Dropdown label",3,"isCustomStyle","options"],[1,"pb-[400px]",3,"codeHtml"],[1,"flex","flex-col","gap-2","mt-6"],["id","2",3,"isSearch","isCustomStyle","options"],["id","3",3,"isSearch","isSelectedIcon","isCustomStyle","options"],["id","1","label","Dropdown label",3,"isSearch","isCustomStyle","options"],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","tabs","description","Used to set tabs data.","type","string[ ]",1,"mt-8"],["title","selectedTab","description","Used to control the selected/current tab.","type","string",1,"mt-8","bg-transparent","p-0","border-0"],["title","onSelectTabEmit","description","Used to emit if the tab selected.","type","EventEmitter : string",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,wt,61,79,"div",7)(10,Tt,19,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,Ct))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,be,I,D,_,P,k,E],data:{animation:[B]}});let o=r;return o})();var Ve=U(L());var Et=()=>["usage","guide"];function It(o,r){if(o&1){let p=q();t(0,"div",8)(1,"span",9),n(2," The Stepper component is a UI element that helps users navigate through a process or workflow by breaking it down into smaller, sequential steps. "),e(),t(3,"span",10),n(4,"Default "),e(),t(5,"app-code-highlighter",11)(6,"div",12)(7,"div",13)(8,"div",14)(9,"app-stepper",15),g("onEmitStep",function(s){F(p);let l=b();return A(l.onClickStepIndex(s))}),t(10,"div",16)(11,"app-button",17),g("click",function(){F(p);let s=b();return A(s.activeStepIndex===0?null:s.onChangeStep(s.activeStepIndex-1))}),n(12," Back "),e(),t(13,"app-button",18),g("click",function(){F(p);let s=b();return A(s.activeStepIndex===2?null:s.onChangeStep(s.activeStepIndex+1))}),n(14),e()()()(),t(15,"span",19),n(16," Default stepper "),e()()()()()}if(o&2){let p=b();i("@accordion",void 0),a(5),i("codeHtml",p.yourCode),a(4),i("activeStepIndex",p.activeStepIndex)("stepperData",p.stepperData),a(2),i("disableTerm",p.activeStepIndex===0),a(2),i("disableTerm",p.activeStepIndex===2),a(),te(" ",p.activeStepIndex===2?"Finish":"Next"," ")}}function _t(o,r){if(o&1&&(t(0,"div",8)(1,"span",10),n(2,"Installation "),e(),t(3,"span",20),n(4,"generate the stepper component"),e(),t(5,"div",21)(6,"span",22),n(7,"Angular CLI"),e(),t(8,"span",23),n(9,'ng g c "your-desired-path"/stepper'),e()(),t(10,"span",20),n(11,"insert code to the component file and you may need to change the color to your desired color"),e(),c(12,"app-code-highlighter",24)(13,"hr",9),t(14,"span",10),n(15,"Props "),e(),c(16,"app-props-wrapper",25)(17,"app-props-wrapper",26)(18,"app-props-wrapper",27),e()),o&2){let p=b();i("@accordion",void 0),a(12),i("buttonExpand",!1)("codeHtml",p.codeHtmlStepper)("codeTs",p.codeTsStepper)}}var ze=(()=>{let r=class r{constructor(){this.isScrolled$=new x(!0),this.selectedTab="usage",this.activeStepIndex=0,this.stepperData=[{title:"First step",isCompleted:!0,isDisable:!0},{title:"Second step",isCompleted:!1,isDisable:!0},{title:"Third step",isCompleted:!1,isDisable:!0}],this.yourCode=`
    <app-stepper 
        [activeStepIndex]="activeStepIndex"
        [stepperData]="stepperData"
        (onEmitStep)="onClickStepIndex($event)"
        class="w-full">
        <div class="flex gap-2">
            <app-button
                [disableTerm]="activeStepIndex === 0"
                (click)="activeStepIndex === 0? null : onChangeStep(activeStepIndex - 1)"
                color="secondary">
                Back
            </app-button>
            <app-button
                [disableTerm]="activeStepIndex === 2"
                iconRight="ph-fill:caret-right"
                (click)="activeStepIndex === 2? null : onChangeStep(activeStepIndex + 1)"
            >
                {{activeStepIndex === 2? 'Finish' : 'Next'}}
            </app-button>
        </div>
    </app-stepper>
  `,this.codeHtmlStepper=`
    <div class="flex justify-between px-6 py-4 w-full">
        <div class="flex">
            <div *ngFor="let step of stepperData; index as stepperIndex" class="flex">
                <div 
                    [ngClass]="{'pointer-events-none':activeStepIndex === stepperIndex}"
                    class="flex items-center gap-2">
                    <button 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'bg-[#F4F4F5] ': activeStepIndex === stepperIndex && !step?.isCompleted,
                            'bg-[#006CB7] border-etma-blue-400 text-white': step?.isCompleted,
                            'cursor-pointer': !step.isDisable,
                            'cursor-default pointer-events-none': step.isDisable,
                        }"
                        class="flex items-center justify-center h-6 w-6 rounded-md border pt-[1px] text-sm focus:border-[#006CB7] focus:shadow-sm focus:shadow-[#B9E1FE]">
                        <mat-icon *ngIf="step?.isCompleted" class="p-1 mb-[2px]" svgIcon="ph-bold:check"></mat-icon>
                        
                        {{!step?.isCompleted ? stepperIndex + 1 : ''}}
                    </button>
                    <span 
                        (click)="!step.isDisable? onClickStep(stepperIndex) : null"
                        [ngClass]="{
                            'font-medium': activeStepIndex === stepperIndex,
                            'cursor-pointer': !step.isDisable,
                            }"
                        class="flex items-center rounded-md text-sm">
                        {{step.title}}
                    </span>
                </div>
                <div *ngIf="stepperIndex + 1 !== stepperData?.length" class="flex justify-center flex-col divide-y-2 w-8 p-2">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <ng-content></ng-content>
    </div>
  `,this.codeTsStepper=`
    export interface stepperDataDTO {
      title:string;
      isCompleted : boolean;
      isDisable : boolean;
    }

    @Component({
      selector: 'app-stepper',
      standalone: true,
      templateUrl: './stepper.component.html',
      styleUrl: './stepper.component.css'
    })
    export class StepperComponent implements OnChanges {
      @Input() stepperData: stepperDataDTO[] = [
        {
          title: 'First step',
          isCompleted: false,
          isDisable: false
        },
        {
          title: 'Second step',
          isCompleted: true,
          isDisable: false
        },
        {
          title: 'Third step',
          isCompleted: false,
          isDisable: false
        },
      ]

      @Output() onEmitStep: EventEmitter<number> = new EventEmitter<number>();


      @Input() activeStepIndex : number = 0


      ngOnChanges(changes: SimpleChanges): void {
        if (changes['activeStepIndex'] && changes['activeStepIndex']?.previousValue !== changes['activeStepIndex']?.currentValue!) {}
        if (changes['stepperData'] && changes['stepperData']?.previousValue !== changes['stepperData']?.currentValue!) {}
      }

      onClickStep(index: number){
        this.onEmitStep.emit(index);
      }

    }
  `}onScroll(d){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>240?this.isScrolled$.next(!1):this.isScrolled$.next(!0)}ngAfterViewInit(){Ve.highlightAll()}onClickStepIndex(d){}onChangeStep(d){d===0&&(this.stepperData[1]=M(H({},this.stepperData[1]),{isCompleted:!1,isDisable:!0}),this.stepperData[2]=M(H({},this.stepperData[2]),{isCompleted:!1,isDisable:!0})),d===1&&(this.stepperData[1]=M(H({},this.stepperData[1]),{isCompleted:!0,isDisable:!0}),this.stepperData[2]=M(H({},this.stepperData[2]),{isCompleted:!1,isDisable:!0})),d===2&&(this.stepperData[1]=M(H({},this.stepperData[1]),{isCompleted:!0,isDisable:!0}),this.stepperData[2]=M(H({},this.stepperData[2]),{isCompleted:!0,isDisable:!0})),this.activeStepIndex=d}onSelectedTab(d){this.selectedTab=d}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=v({type:r,selectors:[["app-input-page"]],hostBindings:function(s,l){s&1&&g("scroll",function(m){return l.onScroll(m)},!1,y)},decls:11,vars:9,consts:[[1,"fixed","z-50"],[1,"flex","flex-col","w-full","items-center","justify-center","relative"],[1,"static","z-30","flex","w-full","items-center","justify-center","border-b","bg-surface-surface-subtle"],[1,"flex","w-[1000px]","items-center"],["title","Input","imageUrl","../../../../assets/images/breadcrumb-illu.png","subtitle","Option for your step by step user action",1,"flex","w-full",3,"border"],[1,"flex","w-full","items-center","justify-center","border-b","sticky","top-14","z-20","shadow-sm-light","duration-300",3,"scroll","ngClass"],[3,"onSelectTabEmit","tabs","selectedTab"],["class","flex flex-col w-[1000px] p-6 text-text-text-primary gap-2",4,"ngIf"],[1,"flex","flex-col","w-[1000px]","p-6","text-text-text-primary","gap-2"],[1,"mt-6"],[1,"text-2xl","font-medium","mt-6"],[1,"pb-[400px]",3,"codeHtml"],[1,"flex","w-full","p-4","bg-background-background-subtle","justify-between","rounded-t-[4px]"],[1,"flex","flex-col","gap-2","w-full"],[1,"flex","gap-2","items-center","w-full"],[1,"w-full",3,"onEmitStep","activeStepIndex","stepperData"],[1,"flex","gap-2"],["color","secondary",3,"click","disableTerm"],["iconRight","ph-fill:caret-right",3,"click","disableTerm"],[1,"text-text-text-caption","text-xs"],[1,"text-text-text-secondary","text-sm"],[1,"flex","items-center","gap-4","text-sm"],[1,""],[1,"text-etma-neutral-800","font-normal","rounded-[4px]","bg-etma-neutral-100","px-2","py-1"],[3,"buttonExpand","codeHtml","codeTs"],["title","stepperData","description","Used to control the data of steps aand its function.","type","stepperDataDTO[ ] : {title:string, isCompleted : boolean, isDisable : boolean}[ ]",1,"mt-8"],["title","activeStepIndex","description","Used to control the state of current step.","type","number",1,"mt-8","bg-transparent","p-0","border-0"],["title","onEmitStep","description","Used to emit if the step clicked(if only the isDisable on stepperData is false).","type","EventEmitter : number",1,"mt-8","pb-[400px]"]],template:function(s,l){s&1&&(c(0,"app-headerbar",0),t(1,"div",1)(2,"div",2)(3,"div",3),c(4,"app-page-title",4),e()(),t(5,"div",5),S(6,"async"),g("scroll",function(m){return l.onScroll(m)}),t(7,"div",3)(8,"app-tab",6),g("onSelectTabEmit",function(m){return l.onSelectedTab(m)}),e()()(),h(9,It,17,7,"div",7)(10,_t,19,4,"div",7),e()),s&2&&(a(4),i("border",!1),a(),i("ngClass",C(6,6,l.isScrolled$)?"bg-surface-surface-subtle":"bg-gradient-to-br from-surface-surface-hover to-surface-surface-subtle"),a(3),i("tabs",u(8,Et))("selectedTab",l.selectedTab),a(),i("ngIf",l.selectedTab==="usage"),a(),i("ngIf",l.selectedTab==="guide"))},dependencies:[w,T,Q,I,D,ne,_,P,k,E]});let o=r;return o})();var Dt=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"",children:[{path:"avatar",component:we}],data:{breadcrumb:{label:"Avatar Component",parents:[{route:"/home",label:"Components"}]}}},{path:"",children:[{path:"badge",component:Ee}],data:{breadcrumb:{label:"Badge Component",parents:[{route:"/badge",label:"Badge"}]}}},{path:"",children:[{path:"breadcrumb",component:Fe}],data:{breadcrumb:{label:"Breadcrumb Component",parents:[{route:"/breadcrumb",label:"Breadcrumb"}]}}},{path:"",children:[{path:"button",component:De}],data:{breadcrumb:{label:"Button Component",parents:[{route:"/button",label:"Button"}]}}},{path:"",children:[{path:"card",component:ke}],data:{breadcrumb:{label:"Card Component",parents:[{route:"/card",label:"Card"}]}}},{path:"",children:[{path:"date-picker",component:He}],data:{breadcrumb:{label:"Date Picker Component",parents:[{route:"/date-picker",label:"Date Picker"}]}}},{path:"",children:[{path:"dropdown",component:Le}],data:{breadcrumb:{label:"Dropdown Component",parents:[{route:"/dropdown",label:"Dropdown"}]}}},{path:"",children:[{path:"stepper",component:Oe}],data:{breadcrumb:{label:"Stepper Component",parents:[{route:"/stepper",label:"Stepper"}]}}},{path:"",children:[{path:"input",component:ze}],data:{breadcrumb:{label:"Input Component",parents:[{route:"/input",label:"Input"}]}}},{path:"",children:[{path:"tab",component:je}],data:{breadcrumb:{label:"Tab Component",parents:[{route:"/tab",label:"Tab"}]}}}],Re=(()=>{let r=class r{};r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=ee({type:r}),r.\u0275inj=X({imports:[ie.forChild(Dt),ie]});let o=r;return o})();var ni=(()=>{let r=class r{};r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=ee({type:r}),r.\u0275inj=X({imports:[re,Re,ye,pe,se,me,Se]});let o=r;return o})();export{ni as ComponentModule};
