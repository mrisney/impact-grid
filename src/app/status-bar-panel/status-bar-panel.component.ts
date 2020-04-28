import { Component } from '@angular/core';
import { IStatusPanelParams } from 'ag-grid-community';
import { GridComponent } from '../grid/grid.component';

@Component({
    selector: 'frequency-status-component',
    template: `
        <div style="margin-left: 10px; margin-top: 8px; float:left;" class="container" *ngIf="visible">
            <div style="float:left;">
                <span class="component">Pie Chart <input type="button" (click)="renderPieChart()" value="open"/></span>
            </div>
            <div style="float:left; margin-left: 10px">
                <span class="component">Bar Chart <input type="button" (click)="renderBarChart()" value="open"/></span>
            </div>
        </div>
    `
})
export class StatusBarPanelComponent {

    private params: IStatusPanelParams;
    
    public visible = true;

    constructor(public gridComponent: GridComponent) { }

    agInit(params: IStatusPanelParams): void {
        this.params = params;
    }

    renderPieChart(): void {
        this.gridComponent.pieChart();
    }

    renderBarChart(): void {
        this.gridComponent.stackedBarChart();
    }

    setVisible(visible: boolean) {
        this.visible = visible;
    }

    isVisible(): boolean {
        return this.visible;
    }
}
