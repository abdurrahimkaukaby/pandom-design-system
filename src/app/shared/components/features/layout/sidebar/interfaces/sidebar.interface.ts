export type ShowHideType = 'show' | 'hide';

export interface SidebarMenu {
  link: string;
  icon: string;
  name: string;
  children: SidebarChildrenGroupMenu[];
}

export interface SidebarChildrenMenu {
  name: string;
  link?: string;
  icon?: string;
}

export interface SidebarChildrenGroupMenu {
  groupName: string;
  groupIcon: string;
  details: SidebarChildrenMenu[];
}
