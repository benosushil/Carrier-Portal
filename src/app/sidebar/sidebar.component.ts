import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'availableloads', title: 'Available Loads',  icon: 'ti-search', class: '' },
    { path: 'assignedloads', title: 'Assigned Loads',  icon: 'ti-truck', class: '' },
    { path: 'pendingloads', title: 'Pending Loads',  icon: 'ti-view-list', class: '' },
    //{ path: 'user', title: 'Available Drivers',  icon:'ti-user', class: '' },
    { path: 'table', title: 'Available Drivers',  icon:'ti-view-list-alt', class: '' }
    /*{ path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' }*/
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
