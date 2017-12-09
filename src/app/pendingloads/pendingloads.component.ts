import { Component, OnInit } from '@angular/core';

declare interface PendingLoadData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'pendingloads-cmp',
    moduleId: module.id,
    templateUrl: 'pendingloads.component.html'
})

export class PendingLoadsComponent implements OnInit{
    public pendingloadsTable: PendingLoadData;
    ngOnInit(){
        this.pendingloadsTable = {
            headerRow: [ 'LoadId', 'Orgin', 'Destination', 'EquiqmentCategory', 'Status'],
            dataRows: [
                ['11111', 'New York, NY', 'Austin, TX', 'Van', 'On Road'],
                ['22222', 'Austin, TX', 'Houston, TX', 'Flat Bed', 'Delivered'],
                ['33333', 'Houston, TX', 'New York, NY', 'Refer', 'Pick up on next week'],
                ['44444', 'Austin, TX', 'New York, NY', 'Van', 'Canceled'],
                ['55555', 'Austin, TX', 'Houston, TX', 'Van' , 'Delivered']
            ]
        };
    }
}
