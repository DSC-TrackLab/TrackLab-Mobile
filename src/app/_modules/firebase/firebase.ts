import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, UserTrackingService } from '@angular/fire/analytics';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../../../environments/environment';

@NgModule({
    declarations: [],
    imports: [
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireAnalyticsModule,
        AngularFireModule.initializeApp(environment.firebase, 'perdigon-app'),
        AngularFirestoreModule.enablePersistence(),
        AngularFireFunctionsModule,
        AngularFireStorageModule,
    ],
    exports: [AngularFireAuthModule, AngularFirestoreModule, AngularFireFunctionsModule, AngularFireStorageModule],
    providers: [UserTrackingService],
})
export class FirebaseModule {}