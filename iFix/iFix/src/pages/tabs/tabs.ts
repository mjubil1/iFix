import { Component } from '@angular/core';
import { StorePage } from '../Store/Store';
import { SettingsPage } from '../Settings/Settings';
import { JobsPage } from "../Jobs/Jobs";

@Component({
    selector: 'page-tab',
    template:`
        <ion-tabs>
            <ion-tab [root]="jobsPage" tabTitle="Jobs" tabIcon="cracked_icon"> </ion-tab>
            <ion-tab [root]="storePage" tabTitle="Store" tabIcon="cart"></ion-tab>
            <ion-tab [root]="settingsPage" tabTitle="Settings" tabIcon="settings"></ion-tab>
        </ion-tabs>
    `
})

export class TabsPage {
    jobsPage = JobsPage;
    storePage = StorePage;
    settingsPage = SettingsPage;
}