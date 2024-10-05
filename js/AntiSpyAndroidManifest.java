<?xml version="1.0" encoding="utf-8" standalone="no"?><manifest xmlns:android="http://schemas.android.com/apk/res/android" android:compileSdkVersion="35" android:compileSdkVersionCodename="15" package="erfanrouhani.antispy" platformBuildVersionCode="35" platformBuildVersionName="15">
    <uses-feature android:name="android.hardware.camera" android:required="false"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.VIBRATE"/>
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.ACCESS_MOCK_LOCATION"/>
    <uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"/>
    <uses-permission android:name="android.permission.GET_TASKS"/>
    <uses-permission android:name="android.permission.PACKAGE_USAGE_STATS"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_CAMERA"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_MICROPHONE"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_SPECIAL_USE"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-feature android:glEsVersion="0x00020000" android:required="true"/>
    <queries>
        <package android:name="com.google.android.apps.maps"/>
        <intent>
            <action android:name="android.intent.action.VIEW"/>
            <category android:name="android.intent.category.BROWSABLE"/>
            <data android:scheme="https"/>
        </intent>
        <intent>
            <action android:name="android.support.customtabs.action.CustomTabsService"/>
        </intent>
    </queries>
    <uses-permission android:name="android.permission.WAKE_LOCK"/>
    <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE"/>
    <permission android:name="erfanrouhani.antispy.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION" android:protectionLevel="signature"/>
    <uses-permission android:name="erfanrouhani.antispy.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION"/>
    <application android:allowBackup="true" android:appComponentFactory="androidx.core.app.CoreComponentFactory" android:backupAgent="erfanrouhani.antispy.security.PrefsBackup" android:dataExtractionRules="@xml/data_extraction_rules" android:fullBackupContent="@xml/backup_descriptor" android:icon="@mipmap/ic_launcher" android:label="@string/app_name" android:name="erfanrouhani.antispy.managers.ContextManager" android:restoreAnyVersion="true" android:roundIcon="@mipmap/ic_launcher_round" android:supportsRtl="true" android:theme="@style/Theme.AntiSpy">
        <uses-library android:name="com.sec.android.app.multiwindow" android:required="false"/>
        <meta-data android:name="com.sec.android.support.multiwindow" android:value="true"/>
        <meta-data android:name="com.google.android.backup.api_key" android:value="AEdPqrEAAAAINaIWhZfc-TUKFdFtcOQE8kJBnwVqTlfO28qm4Q"/>
        <activity android:exported="true" android:name="erfanrouhani.antispy.ui.activities.MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.MULTIWINDOW_LAUNCHER"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.SelectEventActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.EventsActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.AppEventsActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.CamActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.MicActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.LocationActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.ScreenshotBlockActivity"/>
        <activity android:exported="false" android:label=" " android:name="erfanrouhani.antispy.ui.activities.ClipboardActivity"/>
        <activity android:label="@string/about" android:name="erfanrouhani.antispy.ui.activities.AboutActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.SettingActivity"/>
        <activity android:name="erfanrouhani.antispy.ui.activities.IntroActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.MapActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.PurchaseActivity" android:theme="@style/Theme.AntiSpy.GreenTitleBar"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.ShowDialogActivity" android:theme="@style/Theme.Transparent"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.CameraBlockActivity" android:theme="@style/Theme.Transparent"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.ServiceRunnerActivity" android:theme="@style/Theme.Transparent"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.WhitelistActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.FirewallActivity"/>
        <activity android:label="@string/logs" android:name="erfanrouhani.antispy.ui.activities.FirewallLogsActivity"/>
        <activity android:label="@string/apps" android:name="erfanrouhani.antispy.ui.activities.FirewallAppsActivity"/>
        <activity android:label="@string/blocked_domains" android:name="erfanrouhani.antispy.ui.activities.FirewallBlockedDomainsActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.FirewallAppLogsActivity"/>
        <activity android:label=" " android:name="erfanrouhani.antispy.ui.activities.DomainInfoActivity"/>
        <service android:enabled="true" android:exported="false" android:foregroundServiceType="camera" android:name="erfanrouhani.antispy.services.CheckCameraService"/>
        <service android:enabled="true" android:exported="false" android:foregroundServiceType="camera" android:name="erfanrouhani.antispy.services.DisableCameraService"/>
        <service android:enabled="true" android:exported="false" android:foregroundServiceType="microphone" android:name="erfanrouhani.antispy.services.CheckMicService"/>
        <service android:enabled="true" android:exported="false" android:foregroundServiceType="microphone" android:name="erfanrouhani.antispy.services.DisableMicService"/>
        <service android:enabled="true" android:exported="false" android:foregroundServiceType="location" android:name="erfanrouhani.antispy.services.FakeLocationService"/>
        <service android:enabled="true" android:exported="false" android:foregroundServiceType="" android:name="erfanrouhani.antispy.services.ScreenshotBlockerService"/>
        <property android:name="android.app.PROPERTY_SPECIAL_USE_FGS_SUBTYPE" android:value="This service is needed for running in background when user enables this feature in order to protect the content that is being shown in the users device screen and block it from being seen by spy apps. if this services stops the protection feature will be disabled that's why is needed"/>
        <service android:enabled="true" android:exported="true" android:foregroundServiceType="" android:name="erfanrouhani.antispy.services.LocalVpnService" android:permission="android.permission.BIND_VPN_SERVICE">
            <intent-filter>
                <action android:name="android.net.VpnService"/>
            </intent-filter>
        </service>
        <service android:enabled="true" android:exported="false" android:foregroundServiceType="" android:name="erfanrouhani.antispy.services.ClipboardBlockerService">
            <property android:name="android.app.PROPERTY_SPECIAL_USE_FGS_SUBTYPE" android:value="This service is needed for running in background when user enables this feature in order to clear the clipboard for user as one of the safety features in the app., the smallest interval is 5 second for every action so using AlarmManager is impossible."/>
        </service>
        <receiver android:exported="true" android:name="erfanrouhani.antispy.receivers.BootCompletedReceiver">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
            </intent-filter>
        </receiver>
        <receiver android:exported="true" android:label="@string/firewall" android:name="erfanrouhani.antispy.appwidgets.FirewallAppWidget">
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE"/>
            </intent-filter>
            <meta-data android:name="android.appwidget.provider" android:resource="@xml/firewall_app_widget_info"/>
        </receiver>
        <receiver android:exported="true" android:label="@string/camguard" android:name="erfanrouhani.antispy.appwidgets.CamAppWidget">
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE"/>
            </intent-filter>
            <meta-data android:name="android.appwidget.provider" android:resource="@xml/cam_app_widget_info"/>
        </receiver>
        <receiver android:exported="true" android:label="@string/micguard" android:name="erfanrouhani.antispy.appwidgets.MicAppWidget">
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE"/>
            </intent-filter>
            <meta-data android:name="android.appwidget.provider" android:resource="@xml/mic_app_widget_info"/>
        </receiver>
        <receiver android:exported="true" android:label="@string/location_guard" android:name="erfanrouhani.antispy.appwidgets.LocationAppWidget">
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE"/>
            </intent-filter>
            <meta-data android:name="android.appwidget.provider" android:resource="@xml/location_app_widget_info"/>
        </receiver>
        <receiver android:exported="true" android:label="@string/screen_guard" android:name="erfanrouhani.antispy.appwidgets.ScreenshotAppWidget">
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE"/>
            </intent-filter>
            <meta-data android:name="android.appwidget.provider" android:resource="@xml/screeshot_app_widget_info"/>
        </receiver>
        <receiver android:exported="true" android:label="@string/clipboard_guard" android:name="erfanrouhani.antispy.appwidgets.ClipboardAppWidget">
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE"/>
            </intent-filter>
            <meta-data android:name="android.appwidget.provider" android:resource="@xml/clipboard_app_widget_info"/>
        </receiver>
        <receiver android:label="@string/app_name" android:name="erfanrouhani.antispy.receivers.NotificationCreatorReceiver"/>
        <receiver android:label="@string/app_name" android:name="erfanrouhani.antispy.receivers.ServiceRunnerReceiver"/>
        <receiver android:label="@string/app_name" android:name="erfanrouhani.antispy.receivers.ServiceStopperReceiver"/>
        <meta-data android:name="com.google.android.geo.API_KEY" android:value="AIzaSyDU4fIr2GnhelGsvqYf0QVwEhKe_bulo20"/>
        <service android:exported="false" android:name="erfanrouhani.antispy.fcm.MyFirebaseMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
        <activity android:name="erfanrouhani.antispy.fcm.NotificationMessagesActivity"/>
        <provider android:authorities="erfanrouhani.antispy.androidx-startup" android:exported="false" android:name="androidx.startup.InitializationProvider">
            <meta-data android:name="androidx.emoji2.text.EmojiCompatInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.work.WorkManagerInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.lifecycle.ProcessLifecycleInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.profileinstaller.ProfileInstallerInitializer" android:value="androidx.startup"/>
        </provider>
        <uses-library android:name="org.apache.http.legacy" android:required="false"/>
        <receiver android:exported="true" android:name="com.google.firebase.iid.FirebaseInstanceIdReceiver" android:permission="com.google.android.c2dm.permission.SEND">
            <intent-filter>
                <action android:name="com.google.android.c2dm.intent.RECEIVE"/>
            </intent-filter>
            <meta-data android:name="com.google.android.gms.cloudmessaging.FINISHED_AFTER_HANDLED" android:value="true"/>
        </receiver>
        <service android:directBootAware="true" android:exported="false" android:name="com.google.firebase.messaging.FirebaseMessagingService">
            <intent-filter android:priority="-500">
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
        <service android:directBootAware="true" android:exported="false" android:name="com.google.firebase.components.ComponentDiscoveryService">
            <meta-data android:name="com.google.firebase.components:com.google.firebase.messaging.FirebaseMessagingKtxRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.messaging.FirebaseMessagingRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.crashlytics.FirebaseCrashlyticsKtxRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.crashlytics.CrashlyticsRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.sessions.FirebaseSessionsRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsKtxRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.ktx.FirebaseCommonLegacyRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.FirebaseCommonKtxRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.datatransport.TransportRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
        </service>
        <activity android:exported="false" android:name="com.google.android.gms.common.api.GoogleApiActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <service android:enabled="true" android:exported="false" android:name="com.google.firebase.sessions.SessionLifecycleService"/>
        <provider android:authorities="erfanrouhani.antispy.firebaseinitprovider" android:directBootAware="true" android:exported="false" android:initOrder="100" android:name="com.google.firebase.provider.FirebaseInitProvider"/>
        <service android:directBootAware="false" android:enabled="@bool/enable_system_alarm_service_default" android:exported="false" android:name="androidx.work.impl.background.systemalarm.SystemAlarmService"/>
        <service android:directBootAware="false" android:enabled="@bool/enable_system_job_service_default" android:exported="true" android:name="androidx.work.impl.background.systemjob.SystemJobService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <service android:directBootAware="false" android:enabled="@bool/enable_system_foreground_service_default" android:exported="false" android:name="androidx.work.impl.foreground.SystemForegroundService"/>
        <receiver android:directBootAware="false" android:enabled="true" android:exported="false" android:name="androidx.work.impl.utils.ForceStopRunnable$BroadcastReceiver"/>
        <receiver android:directBootAware="false" android:enabled="false" android:exported="false" android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$BatteryChargingProxy">
            <intent-filter>
                <action android:name="android.intent.action.ACTION_POWER_CONNECTED"/>
                <action android:name="android.intent.action.ACTION_POWER_DISCONNECTED"/>
            </intent-filter>
        </receiver>
        <receiver android:directBootAware="false" android:enabled="false" android:exported="false" android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$BatteryNotLowProxy">
            <intent-filter>
                <action android:name="android.intent.action.BATTERY_OKAY"/>
                <action android:name="android.intent.action.BATTERY_LOW"/>
            </intent-filter>
        </receiver>
        <receiver android:directBootAware="false" android:enabled="false" android:exported="false" android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$StorageNotLowProxy">
            <intent-filter>
                <action android:name="android.intent.action.DEVICE_STORAGE_LOW"/>
                <action android:name="android.intent.action.DEVICE_STORAGE_OK"/>
            </intent-filter>
        </receiver>
        <receiver android:directBootAware="false" android:enabled="false" android:exported="false" android:name="androidx.work.impl.background.systemalarm.ConstraintProxy$NetworkStateProxy">
            <intent-filter>
                <action android:name="android.net.conn.CONNECTIVITY_CHANGE"/>
            </intent-filter>
        </receiver>
        <receiver android:directBootAware="false" android:enabled="false" android:exported="false" android:name="androidx.work.impl.background.systemalarm.RescheduleReceiver">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
                <action android:name="android.intent.action.TIME_SET"/>
                <action android:name="android.intent.action.TIMEZONE_CHANGED"/>
            </intent-filter>
        </receiver>
        <receiver android:directBootAware="false" android:enabled="@bool/enable_system_alarm_service_default" android:exported="false" android:name="androidx.work.impl.background.systemalarm.ConstraintProxyUpdateReceiver">
            <intent-filter>
                <action android:name="androidx.work.impl.background.systemalarm.UpdateProxies"/>
            </intent-filter>
        </receiver>
        <receiver android:directBootAware="false" android:enabled="true" android:exported="true" android:name="androidx.work.impl.diagnostics.DiagnosticsReceiver" android:permission="android.permission.DUMP">
            <intent-filter>
                <action android:name="androidx.work.diagnostics.REQUEST_DIAGNOSTICS"/>
            </intent-filter>
        </receiver>
        <service android:directBootAware="true" android:exported="false" android:name="androidx.room.MultiInstanceInvalidationService"/>
        <receiver android:directBootAware="false" android:enabled="true" android:exported="true" android:name="androidx.profileinstaller.ProfileInstallReceiver" android:permission="android.permission.DUMP">
            <intent-filter>
                <action android:name="androidx.profileinstaller.action.INSTALL_PROFILE"/>
            </intent-filter>
            <intent-filter>
                <action android:name="androidx.profileinstaller.action.SKIP_FILE"/>
            </intent-filter>
            <intent-filter>
                <action android:name="androidx.profileinstaller.action.SAVE_PROFILE"/>
            </intent-filter>
            <intent-filter>
                <action android:name="androidx.profileinstaller.action.BENCHMARK_OPERATION"/>
            </intent-filter>
        </receiver>
        <activity android:exported="false" android:name="com.google.android.play.core.common.PlayCoreDialogWrapperActivity" android:stateNotNeeded="true" android:theme="@style/Theme.PlayCore.Transparent"/>
    </application>
</manifest>