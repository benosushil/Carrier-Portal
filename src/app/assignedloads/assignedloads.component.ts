import { Component, OnInit } from '@angular/core';

declare interface AssignedLoadData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'assignedloads-cmp',
    moduleId: module.id,
    templateUrl: 'assignedloads.component.html'
})

export class AssignedLoadsComponent implements OnInit{
    public assignedloadTable: AssignedLoadData;
    ngOnInit(){
        this.assignedloadTable = {
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
