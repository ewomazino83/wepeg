!function(){return function <?xml version="1.0" encoding="utf-8" standalone="no"?><manifest xmlns:android="http://schemas.android.com/apk/res/android" android:compileSdkVersion="33" android:compileSdkVersionCodename="13" android:installLocation="internalOnly" package="com.opera.browser" platformBuildVersionCode="33" platformBuildVersionName="13">
    <permission android:name="com.opera.browser.permission.C2D_MESSAGE" android:protectionLevel="signature"/>
    <permission android:name="com.opera.browser.permission.PRIVATE_PROVIDERS" android:protectionLevel="signature"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
    <uses-permission android:name="android.permission.BLUETOOTH"/>
    <uses-permission android:name="android.permission.CHANGE_WIFI_MULTICAST_STATE"/>
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
    <uses-permission android:name="android.permission.NFC"/>
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.VIBRATE"/>
    <uses-permission android:name="android.permission.WAKE_LOCK"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="com.android.launcher.permission.INSTALL_SHORTCUT"/>
    <uses-permission android:name="com.google.android.c2dm.permission.RECEIVE"/>
    <uses-permission android:name="com.google.android.gms.permission.AD_ID"/>
    <uses-permission android:name="com.opera.browser.permission.C2D_MESSAGE"/>
    <uses-permission android:name="com.opera.browser.permission.PRIVATE_PROVIDERS"/>
    <uses-permission android:name="com.opera.browser.permission.GET_PREINSTALL_DATA"/>
    <uses-permission-sdk-23 android:maxSdkVersion="30" android:name="android.permission.BLUETOOTH_ADMIN"/>
    <uses-permission-sdk-23 android:name="android.permission.BLUETOOTH_CONNECT"/>
    <uses-permission-sdk-23 android:name="android.permission.BLUETOOTH_ADVERTISE"/>
    <uses-permission-sdk-23 android:name="android.permission.BLUETOOTH_SCAN" android:usesPermissionFlags="neverForLocation"/>
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
    <uses-permission android:name="android.permission.AUTHENTICATE_ACCOUNTS"/>
    <uses-permission android:name="android.permission.READ_SYNC_SETTINGS"/>
    <uses-permission android:name="android.permission.WRITE_SYNC_SETTINGS"/>
    <uses-permission-sdk-23 android:name="android.permission.USE_FINGERPRINT"/>
    <uses-permission-sdk-23 android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>
    <uses-permission-sdk-23 android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission-sdk-23 android:name="android.permission.QUERY_ALL_PACKAGES"/>
    <uses-permission-sdk-23 android:name="android.permission.READ_MEDIA_IMAGES"/>
    <uses-permission-sdk-23 android:name="android.permission.READ_MEDIA_AUDIO"/>
    <uses-permission-sdk-23 android:name="android.permission.READ_MEDIA_VIDEO"/>
    <uses-feature android:glEsVersion="0x00020000" android:required="true"/>
    <uses-feature android:name="android.hardware.bluetooth" android:required="false"/>
    <uses-feature android:name="android.hardware.camera" android:required="false"/>
    <uses-feature android:name="android.hardware.camera.autofocus" android:required="false"/>
    <uses-feature android:name="android.hardware.camera.flash" android:required="false"/>
    <uses-feature android:name="android.hardware.wifi" android:required="false"/>
    <uses-feature android:name="android.hardware.location.network" android:required="false"/>
    <uses-feature android:name="android.hardware.location" android:required="false"/>
    <uses-feature android:name="android.hardware.location.gps" android:required="false"/>
    <uses-feature android:name="android.hardware.microphone" android:required="false"/>
    <uses-feature android:name="android.hardware.bluetooth_le" android:required="false"/>
    <uses-permission android:name="com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE"/>
    <permission android:name="com.opera.browser.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION" android:protectionLevel="signature"/>
    <uses-permission android:name="com.opera.browser.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION"/>
    <uses-permission android:name="com.android.vending.BILLING"/>
    <application android:allowBackup="true" android:appComponentFactory="androidx.core.app.CoreComponentFactory" android:backupAgent="com.opera.android.backup.OperaBackupAgent" android:dataExtractionRules="@xml/data_extraction_rules" android:fullBackupContent="@xml/full_backup_content" android:fullBackupOnly="true" android:hardwareAccelerated="true" android:icon="@drawable/ic_launcher" android:label="@string/app_icon_label" android:manageSpaceActivity="com.opera.android.settings.cleardata.StorageActivity" android:multiArch="false" android:name="com.opera.android.OperaApplication" android:networkSecurityConfig="@xml/network_security_config_official_build" android:process="com.opera.browser" android:requestLegacyExternalStorage="true" android:roundIcon="@drawable/ic_launcher" android:supportsRtl="true" android:theme="@style/AppTheme.Light.Blue" android:use32bitAbi="false">
        <provider android:authorities="com.opera.browser.DownloadProvider" android:exported="false" android:grantUriPermissions="true" android:name="com.opera.android.downloads.DownloadProvider" android:permission="com.opera.browser.permission.PRIVATE_PROVIDERS"/>
        <provider android:authorities="com.opera.browser.FileProvider" android:exported="false" android:grantUriPermissions="true" android:name="androidx.core.content.FileProvider" android:permission="com.opera.browser.permission.PRIVATE_PROVIDERS">
            <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/file_paths"/>
        </provider>
        <provider android:authorities="com.opera.browser.UserSettingsContentProvider" android:exported="false" android:name="com.opera.android.settings.UserSettingsContentProvider" android:permission="com.opera.browser.permission.PRIVATE_PROVIDERS"/>
        <provider android:authorities="com.opera.browser.newsfeed" android:exported="false" android:name="com.opera.android.news.newsfeed.internal.cache.NewsfeedContentProvider" android:permission="com.opera.browser.permission.PRIVATE_PROVIDERS"/>
        <provider android:authorities="com.opera.browser.BrowserActivityStateContentProvider" android:exported="false" android:name="com.opera.android.BrowserActivityStateContentProvider" android:permission="com.opera.browser.permission.PRIVATE_PROVIDERS"/>
        <provider android:authorities="com.opera.browser.BreakpadInitProvider" android:exported="false" android:initOrder="2147483647" android:name="com.opera.android.BreakpadInitProvider" android:permission="com.opera.browser.permission.PRIVATE_PROVIDERS"/>
        <provider android:authorities="com.opera.browser.UnparcelIntentExtras" android:enabled="true" android:exported="false" android:initOrder="2147483646" android:name="com.opera.android.UnparcelIntentExtras" android:permission="com.opera.browser.permission.PRIVATE_PROVIDERS"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:excludeFromRecents="false" android:exported="true" android:launchMode="singleTask" android:name="com.opera.android.BrowserActivity" android:resizeableActivity="true" android:supportsPictureInPicture="true" android:theme="@style/BrowserActivityDefault" android:windowSoftInputMode="adjustResize">
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity>
        <activity-alias android:enabled="false" android:exported="true" android:icon="@drawable/ic_internet_launcher_c" android:label="@string/internet_launcher_c" android:name="com.opera.InternetLauncherC" android:targetActivity="com.opera.android.BrowserActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
                <category android:name="android.intent.category.APP_BROWSER"/>
                <category android:name="android.intent.category.DEFAULT"/>
            </intent-filter>
            <meta-data android:name="android.app.shortcuts" android:resource="@xml/shortcuts"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity-alias>
        <activity-alias android:enabled="false" android:exported="true" android:icon="@drawable/ic_internet_launcher_b" android:label="@string/internet_launcher_b" android:name="com.opera.InternetLauncherB" android:targetActivity="com.opera.android.BrowserActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
                <category android:name="android.intent.category.APP_BROWSER"/>
                <category android:name="android.intent.category.DEFAULT"/>
            </intent-filter>
            <meta-data android:name="android.app.shortcuts" android:resource="@xml/shortcuts"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity-alias>
        <activity-alias android:enabled="false" android:exported="true" android:icon="@drawable/ic_internet_launcher_a" android:label="@string/internet_launcher_a" android:name="com.opera.InternetLauncherA" android:targetActivity="com.opera.android.BrowserActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
                <category android:name="android.intent.category.APP_BROWSER"/>
                <category android:name="android.intent.category.DEFAULT"/>
            </intent-filter>
            <meta-data android:name="android.app.shortcuts" android:resource="@xml/shortcuts"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity-alias>
        <activity-alias android:enabled="true" android:exported="true" android:name="com.opera.Opera" android:targetActivity="com.opera.android.BrowserActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
                <category android:name="android.intent.category.APP_BROWSER"/>
                <category android:name="android.intent.category.DEFAULT"/>
            </intent-filter>
            <meta-data android:name="android.app.shortcuts" android:resource="@xml/shortcuts"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity-alias>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:excludeFromRecents="false" android:exported="false" android:launchMode="singleTask" android:name="com.opera.android.startup.WelcomeActivity" android:windowSoftInputMode="adjustResize">
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:excludeFromRecents="false" android:exported="false" android:launchMode="singleTask" android:name="com.opera.android.startup.PreviousCrashActivity" android:windowSoftInputMode="adjustResize">
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:excludeFromRecents="false" android:exported="false" android:launchMode="singleTask" android:name="com.opera.android.startup.InstallSplitLocaleActivity" android:windowSoftInputMode="adjustResize">
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:excludeFromRecents="false" android:exported="false" android:name="com.opera.android.settings.cleardata.StorageActivity" android:process=":manage_space_process" android:windowSoftInputMode="adjustResize"/>
        <activity android:configChanges="keyboard|keyboardHidden|mcc|mnc|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:excludeFromRecents="true" android:exported="false" android:name="com.opera.android.IntentDispatcherActivity" android:relinquishTaskIdentity="true" android:taskAffinity="" android:theme="@android:style/Theme.NoDisplay">
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity>
        <activity-alias android:enabled="false" android:exported="true" android:label="@string/send_to_flow" android:name="com.opera.android.MyFlowSendActivity" android:targetActivity="com.opera.android.IntentDispatcherActivity">
            <intent-filter>
                <action android:name="android.intent.action.SEND"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <data android:mimeType="text/plain"/>
            </intent-filter>
        </activity-alias>
        <activity-alias android:exported="true" android:name="com.opera.android.webapps.WebappLauncherActivity" android:targetActivity="com.opera.android.IntentDispatcherActivity">
            <intent-filter>
                <action android:name="com.opera.android.ACTION_START_WEBAPP"/>
                <category android:name="android.intent.category.DEFAULT"/>
            </intent-filter>
        </activity-alias>
        <activity-alias android:enabled="@bool/enable_private_search" android:exported="true" android:label="@string/search_private_activity" android:name="com.opera.android.PrivateSearch" android:targetActivity="com.opera.android.IntentDispatcherActivity">
            <intent-filter>
                <action android:name="android.intent.action.PROCESS_TEXT"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <data android:mimeType="text/plain"/>
            </intent-filter>
        </activity-alias>
        <activity-alias android:enabled="false" android:exported="true" android:name="com.opera.android.WebSearchActivity" android:targetActivity="com.opera.android.IntentDispatcherActivity">
            <intent-filter>
                <action android:name="android.intent.action.WEB_SEARCH"/>
                <category android:name="android.intent.category.DEFAULT"/>
            </intent-filter>
        </activity-alias>
        <activity-alias android:exported="true" android:name="com.opera.android.MainLauncherActivity" android:targetActivity="com.opera.android.IntentDispatcherActivity">
            <intent-filter android:autoVerify="true">
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="http"/>
                <data android:scheme="https"/>
                <data android:host="www.opera.com"/>
                <data android:path="/ofa/ofa"/>
                <data android:path="/ofa/ofa/config-bundle"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="http"/>
                <data android:scheme="https"/>
                <data android:scheme="about"/>
                <data android:scheme="ethereum"/>
                <data android:scheme="bitcoin"/>
                <data android:scheme="ofa"/>
                <data android:scheme="dweb"/>
                <data android:scheme="ipfs"/>
                <data android:scheme="ipns"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="http"/>
                <data android:scheme="https"/>
                <data android:scheme="file"/>
                <data android:scheme="content"/>
                <data android:mimeType="text/html"/>
                <data android:mimeType="text/plain"/>
                <data android:mimeType="application/xhtml+xml"/>
                <data android:mimeType="application/vnd.wap.xhtml+xml"/>
                <data android:mimeType="multipart/related"/>
                <data android:mimeType="message/rfc822"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="http"/>
                <data android:scheme="https"/>
                <data android:mimeType="audio/*"/>
                <data android:mimeType="video/*"/>
                <data android:mimeType="application/ogg"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="file"/>
                <data android:scheme="content"/>
                <data android:host="*"/>
                <data android:mimeType="*/*"/>
                <data android:pathPattern=".*\\.htm"/>
                <data android:pathPattern=".*\\.html"/>
                <data android:pathPattern=".*\\.mht"/>
                <data android:pathPattern=".*\\.mhtml"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.nfc.action.NDEF_DISCOVERED"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <data android:scheme="about"/>
                <data android:scheme="http"/>
                <data android:scheme="https"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.speech.action.VOICE_SEARCH_RESULTS"/>
                <category android:name="android.intent.category.DEFAULT"/>
            </intent-filter>
            <intent-filter>
                <action android:name="android.service.quicksettings.action.QS_TILE_PREFERENCES"/>
                <category android:name="android.intent.category.DEFAULT"/>
            </intent-filter>
            <meta-data android:name="WindowManagerPreference:FreeformWindowSize" android:value="maximize"/>
            <meta-data android:name="WindowManagerPreference:FreeformWindowOrientation" android:value="landscape"/>
        </activity-alias>
        <activity android:excludeFromRecents="true" android:exported="false" android:launchMode="singleInstance" android:name="com.opera.android.BrowserRestartActivity" android:process=":restart_browser" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <activity android:exported="false" android:name="com.opera.android.snapshot.OfaImageEditorActivity" android:theme="@style/Hype.ImageEditor.AppTheme.Dark"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:documentLaunchMode="intoExisting" android:label="Webapp" android:name="com.opera.android.webapps.WebappActivity" android:persistableMode="persistNever"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:name="com.opera.android.FullscreenWebActivity" android:noHistory="true"/>
        <activity android:autoRemoveFromRecents="true" android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:excludeFromRecents="true" android:exported="false" android:launchMode="singleTask" android:name="com.opera.android.media.MediaPlayerActivity" android:noHistory="true" android:supportsPictureInPicture="true" android:taskAffinity="com.opera.browser.media.MediaPlayerActivity" android:theme="@style/AppTheme.Dark.Blue.Translucent"/>
        <activity android:autoRemoveFromRecents="true" android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:excludeFromRecents="true" android:exported="false" android:name="com.opera.android.media.WebPictureInPictureActivity" android:noHistory="true" android:supportsPictureInPicture="true" android:theme="@style/AppTheme.Dark.Blue.Translucent"/>
        <activity android:configChanges="keyboard|keyboardHidden|mcc|mnc|orientation|screenLayout|screenSize|smallestScreenSize" android:excludeFromRecents="true" android:exported="false" android:launchMode="singleTask" android:name="org.chromium.components.media_router.caf.remoting.CafExpandedControllerActivity" android:noHistory="true" android:theme="@style/AppTheme.Dark.Blue.Translucent"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:name="com.opera.android.account.auth.OperaAuthPortalActivity" android:windowSoftInputMode="adjustResize"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:name="com.opera.android.account.auth.EditProfileAuthActivity" android:windowSoftInputMode="adjustResize"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:exported="false" android:name="com.opera.android.account.auth.DeleteProfileAuthActivity" android:windowSoftInputMode="adjustResize"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:name="com.opera.android.account.auth.FinishAccountSetupAuthActivity" android:windowSoftInputMode="adjustResize"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:exported="false" android:name="com.opera.android.account.auth.TwoFactorAuthenticationActivity" android:windowSoftInputMode="adjustResize"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:exported="false" android:name="com.opera.android.qr.ScanQrCodeActivity" android:theme="@style/AppTheme.Dark.Blue"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:exported="false" android:name="com.opera.android.messengers.MessengersActivity" android:windowSoftInputMode="adjustResize"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:exported="false" android:name="com.opera.android.ads.admob.AdMobIntentInterceptor" android:theme="@android:style/Theme.Translucent"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:exported="false" android:launchMode="singleTask" android:name="com.opera.android.wallet2.WalletActivity" android:taskAffinity="com.opera.browser.wallet" android:windowSoftInputMode="adjustResize"/>
        <activity android:autoRemoveFromRecents="true" android:documentLaunchMode="always" android:excludeFromRecents="true" android:exported="false" android:name="com.opera.android.notifications.NotificationBridge$TrampolineActivity" android:noHistory="true" android:theme="@android:style/Theme.NoDisplay"/>
        <receiver android:exported="true" android:name="com.opera.android.news.newsfeed.internal.NewsFeedSystemReceiver">
            <intent-filter>
                <action android:name="android.intent.action.ACTION_POWER_CONNECTED"/>
            </intent-filter>
        </receiver>
        <receiver android:exported="false" android:name="com.opera.android.gcm.PushNotificationInternalReceiver">
            <intent-filter>
                <action android:name="com.opera.android.gcm.REFRESH_PUSH_NOTIFICATION"/>
            </intent-filter>
        </receiver>
        <service android:exported="false" android:name="com.opera.android.startup.InitialStartupService"/>
        <service android:exported="false" android:name="com.opera.android.pushmessaging.GCMBackgroundService"/>
        <service android:exported="false" android:name="org.chromium.components.background_task_scheduler.internal.BackgroundTaskJobService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <service android:exported="false" android:name="com.opera.android.media.MediaCaptureNotificationService"/>
        <service android:exported="false" android:foregroundServiceType="mediaPlayback" android:name="com.opera.android.media.OperaMediaNotificationControllerDelegate$PlaybackListenerService">
            <intent-filter>
                <action android:name="android.intent.action.MEDIA_BUTTON"/>
            </intent-filter>
        </service>
        <service android:exported="false" android:foregroundServiceType="mediaPlayback" android:name="com.opera.android.media.OperaMediaNotificationControllerDelegate$PresentationListenerService">
            <intent-filter>
                <action android:name="android.intent.action.MEDIA_BUTTON"/>
            </intent-filter>
        </service>
        <service android:exported="false" android:foregroundServiceType="mediaPlayback" android:name="com.opera.android.media.OperaMediaNotificationControllerDelegate$CastListenerService">
            <intent-filter>
                <action android:name="android.intent.action.MEDIA_BUTTON"/>
            </intent-filter>
        </service>
        <service android:exported="false" android:name="com.opera.android.media.PlayerService"/>
        <receiver android:exported="true" android:name="com.opera.android.downloads.DownloadNotifierReceiver"/>
        <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="fb538873886313500"/>
        <meta-data android:name="com.facebook.sdk.ClientToken" android:value="593c28bf755d08084004ed0a6d9919f8"/>
        <meta-data android:name="com.facebook.sdk.AutoLogAppEventsEnabled" android:value="false"/>
        <meta-data android:name="com.facebook.sdk.CodelessDebugLogEnabled" android:value="false"/>
        <meta-data android:name="com.facebook.sdk.MonitorEnabled" android:value="false"/>
        <meta-data android:name="com.facebook.sdk.AdvertiserIDCollectionEnabled" android:value="false"/>
        <meta-data android:name="com.google.android.gms.ads.DELAY_APP_MEASUREMENT_INIT" android:value="true"/>
        <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-4721105574136909~9568282470"/>
        <meta-data android:name="com.google.android.gms.ads.flag.OPTIMIZE_INITIALIZATION" android:value="true"/>
        <meta-data android:name="com.google.android.gms.ads.flag.OPTIMIZE_AD_LOADING" android:value="true"/>
        <uses-library android:name="org.apache.http.legacy" android:required="false"/>
        <meta-data android:name="org.chromium.content.browser.SANDBOXED_SERVICES_NAME" android:value="com.opera.android.browser.chromium.services.SandboxedProcessService"/>
        <meta-data android:name="org.chromium.content.browser.PRIVILEGED_SERVICES_NAME" android:value="com.opera.android.browser.chromium.services.PrivilegedProcessService"/>
        <meta-data android:name="org.chromium.content.browser.NUM_SANDBOXED_SERVICES" android:value="40"/>
        <meta-data android:name="org.chromium.content.browser.NUM_PRIVILEGED_SERVICES" android:value="5"/>
        <meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@drawable/notification_small"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService0" android:process=":sandboxed_process0"/>
        <meta-data android:name="com.opera.browser:sandboxed_process0.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService1" android:process=":sandboxed_process1"/>
        <meta-data android:name="com.opera.browser:sandboxed_process1.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService2" android:process=":sandboxed_process2"/>
        <meta-data android:name="com.opera.browser:sandboxed_process2.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService3" android:process=":sandboxed_process3"/>
        <meta-data android:name="com.opera.browser:sandboxed_process3.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService4" android:process=":sandboxed_process4"/>
        <meta-data android:name="com.opera.browser:sandboxed_process4.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService5" android:process=":sandboxed_process5"/>
        <meta-data android:name="com.opera.browser:sandboxed_process5.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService6" android:process=":sandboxed_process6"/>
        <meta-data android:name="com.opera.browser:sandboxed_process6.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService7" android:process=":sandboxed_process7"/>
        <meta-data android:name="com.opera.browser:sandboxed_process7.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService8" android:process=":sandboxed_process8"/>
        <meta-data android:name="com.opera.browser:sandboxed_process8.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService9" android:process=":sandboxed_process9"/>
        <meta-data android:name="com.opera.browser:sandboxed_process9.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService10" android:process=":sandboxed_process10"/>
        <meta-data android:name="com.opera.browser:sandboxed_process10.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService11" android:process=":sandboxed_process11"/>
        <meta-data android:name="com.opera.browser:sandboxed_process11.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService12" android:process=":sandboxed_process12"/>
        <meta-data android:name="com.opera.browser:sandboxed_process12.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService13" android:process=":sandboxed_process13"/>
        <meta-data android:name="com.opera.browser:sandboxed_process13.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService14" android:process=":sandboxed_process14"/>
        <meta-data android:name="com.opera.browser:sandboxed_process14.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService15" android:process=":sandboxed_process15"/>
        <meta-data android:name="com.opera.browser:sandboxed_process15.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService16" android:process=":sandboxed_process16"/>
        <meta-data android:name="com.opera.browser:sandboxed_process16.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService17" android:process=":sandboxed_process17"/>
        <meta-data android:name="com.opera.browser:sandboxed_process17.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService18" android:process=":sandboxed_process18"/>
        <meta-data android:name="com.opera.browser:sandboxed_process18.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService19" android:process=":sandboxed_process19"/>
        <meta-data android:name="com.opera.browser:sandboxed_process19.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService20" android:process=":sandboxed_process20"/>
        <meta-data android:name="com.opera.browser:sandboxed_process20.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService21" android:process=":sandboxed_process21"/>
        <meta-data android:name="com.opera.browser:sandboxed_process21.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService22" android:process=":sandboxed_process22"/>
        <meta-data android:name="com.opera.browser:sandboxed_process22.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService23" android:process=":sandboxed_process23"/>
        <meta-data android:name="com.opera.browser:sandboxed_process23.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService24" android:process=":sandboxed_process24"/>
        <meta-data android:name="com.opera.browser:sandboxed_process24.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService25" android:process=":sandboxed_process25"/>
        <meta-data android:name="com.opera.browser:sandboxed_process25.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService26" android:process=":sandboxed_process26"/>
        <meta-data android:name="com.opera.browser:sandboxed_process26.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService27" android:process=":sandboxed_process27"/>
        <meta-data android:name="com.opera.browser:sandboxed_process27.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService28" android:process=":sandboxed_process28"/>
        <meta-data android:name="com.opera.browser:sandboxed_process28.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService29" android:process=":sandboxed_process29"/>
        <meta-data android:name="com.opera.browser:sandboxed_process29.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService30" android:process=":sandboxed_process30"/>
        <meta-data android:name="com.opera.browser:sandboxed_process30.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService31" android:process=":sandboxed_process31"/>
        <meta-data android:name="com.opera.browser:sandboxed_process31.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService32" android:process=":sandboxed_process32"/>
        <meta-data android:name="com.opera.browser:sandboxed_process32.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService33" android:process=":sandboxed_process33"/>
        <meta-data android:name="com.opera.browser:sandboxed_process33.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService34" android:process=":sandboxed_process34"/>
        <meta-data android:name="com.opera.browser:sandboxed_process34.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService35" android:process=":sandboxed_process35"/>
        <meta-data android:name="com.opera.browser:sandboxed_process35.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService36" android:process=":sandboxed_process36"/>
        <meta-data android:name="com.opera.browser:sandboxed_process36.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService37" android:process=":sandboxed_process37"/>
        <meta-data android:name="com.opera.browser:sandboxed_process37.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService38" android:process=":sandboxed_process38"/>
        <meta-data android:name="com.opera.browser:sandboxed_process38.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:isolatedProcess="false" android:name="com.opera.android.browser.chromium.services.SandboxedProcessService39" android:process=":sandboxed_process39"/>
        <meta-data android:name="com.opera.browser:sandboxed_process39.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:name="com.opera.android.browser.chromium.services.PrivilegedProcessService0" android:process=":privileged_process0"/>
        <meta-data android:name="com.opera.browser:privileged_process0.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:name="com.opera.android.browser.chromium.services.PrivilegedProcessService1" android:process=":privileged_process1"/>
        <meta-data android:name="com.opera.browser:privileged_process1.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:name="com.opera.android.browser.chromium.services.PrivilegedProcessService2" android:process=":privileged_process2"/>
        <meta-data android:name="com.opera.browser:privileged_process2.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:name="com.opera.android.browser.chromium.services.PrivilegedProcessService3" android:process=":privileged_process3"/>
        <meta-data android:name="com.opera.browser:privileged_process3.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:name="com.opera.android.browser.chromium.services.PrivilegedProcessService4" android:process=":privileged_process4"/>
        <meta-data android:name="com.opera.browser:privileged_process4.ignore_multidex" android:value="true"/>
        <service android:exported="false" android:name="com.opera.android.osp.OspCollectorService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <service android:enabled="@bool/enable_sync_service" android:exported="true" android:name="com.opera.android.ping.SyncService">
            <intent-filter>
                <action android:name="android.content.SyncAdapter"/>
            </intent-filter>
            <meta-data android:name="android.content.SyncAdapter" android:resource="@xml/syncadapter"/>
        </service>
        <provider android:authorities="com.opera.browser.ping.provider" android:exported="false" android:name="com.opera.android.ping.SyncProvider" android:permission="com.opera.browser.permission.PRIVATE_PROVIDERS"/>
        <service android:exported="true" android:name="com.opera.android.ping.SyncAuthenticatorService">
            <intent-filter>
                <action android:name="android.accounts.AccountAuthenticator"/>
            </intent-filter>
            <meta-data android:name="android.accounts.AccountAuthenticator" android:resource="@xml/authenticator"/>
        </service>
        <receiver android:exported="true" android:name="com.opera.android.analytics.OSPPingReceiver">
            <intent-filter>
                <action android:name="com.opera.android.action.APP_START"/>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
                <action android:name="android.intent.action.MY_PACKAGE_REPLACED"/>
            </intent-filter>
        </receiver>
        <service android:enabled="false" android:exported="false" android:name="com.opera.android.analytics.OspAccountService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <service android:enabled="false" android:exported="false" android:name="com.opera.android.analytics.OspPeriodicUploadService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <service android:enabled="false" android:exported="false" android:name="com.opera.android.analytics.OspSingleUploadService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <meta-data android:name="com.samsung.android.sdk.multiwindow.enable" android:value="true"/>
        <meta-data android:name="com.sec.android.support.multiwindow" android:value="true"/>
        <meta-data android:name="com.lge.support.SPLIT_WINDOW" android:value="true"/>
        <meta-data android:name="android.allow_multiple_resumed_activities" android:value="true"/>
        <meta-data android:name="com.google.android.gms.cast.framework.OPTIONS_PROVIDER_CLASS_NAME" android:value="org.chromium.components.media_router.caf.CastOptionsProvider"/>
        <meta-data android:name="org.chromium.content.browser.REMOTE_PLAYBACK_APP_ID" android:value="D38CB0C5"/>
        <receiver android:exported="true" android:name="com.opera.android.warmup.PackageUpdateReceiver">
            <intent-filter>
                <action android:name="android.intent.action.MY_PACKAGE_REPLACED"/>
            </intent-filter>
        </receiver>
        <receiver android:exported="false" android:name="com.opera.android.vpn.VpnReceiver"/>
        <receiver android:exported="false" android:name="com.opera.android.vpn.VpnProReceiver">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
            </intent-filter>
        </receiver>
        <service android:exported="false" android:name="com.opera.android.vpn.VpnFailedToConnectService"/>
        <service android:exported="false" android:name="com.opera.android.warmup.UpdateLibraryService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <service android:exported="false" android:name="com.opera.android.notifications.channels.ChannelsUpdateService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <service android:exported="false" android:name="com.opera.android.news.newsfeed.internal.NewsPushUploaderService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <service android:exported="false" android:name="com.opera.android.firebase.OperaFirebaseMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
        <service android:exported="false" android:name="com.opera.android.gcm.PushNotificationService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <service android:exported="true" android:icon="@drawable/ic_material_vpn_on" android:label="@string/vpn_pro_title" android:name="com.opera.android.vpn.quick_settings_tile.VpnProQuickSettingsTileService" android:permission="android.permission.BIND_QUICK_SETTINGS_TILE">
            <intent-filter>
                <action android:name="android.service.quicksettings.action.QS_TILE"/>
            </intent-filter>
            <meta-data android:name="android.service.quicksettings.ACTIVE_TILE" android:value="true"/>
            <meta-data android:name="android.service.quicksettings.TOGGLEABLE_TILE" android:value="true"/>
        </service>
        <receiver android:exported="true" android:name="com.opera.android.gcm.PushNotificationSystemReceiver">
            <intent-filter>
                <action android:name="android.intent.action.USER_PRESENT"/>
            </intent-filter>
        </receiver>
        <receiver android:exported="false" android:name="com.opera.android.utilities.ShortcutUtils$Receiver">
            <intent-filter>
                <action android:name="com.opera.android.Actions.SHORTCUT_ADDED"/>
            </intent-filter>
        </receiver>
        <service android:exported="false" android:foregroundServiceType="dataSync" android:name="com.opera.android.downloads.DownloadService"/>
        <service android:exported="false" android:name="com.opera.android.downloads.DownloadJobService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <receiver android:enabled="false" android:exported="true" android:name="com.opera.android.downloads.DownloadBroadcastReceiver">
            <intent-filter>
                <action android:name="com.opera.android.action.APP_START"/>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
            </intent-filter>
        </receiver>
        <service android:exported="false" android:name="com.opera.android.browser.PrivateTabsNotificationService"/>
        <service android:exported="false" android:name="com.opera.android.crashhandler.CrashReportProcessingService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <receiver android:exported="true" android:name="com.opera.android.browser.PrivateTabsBroadcastReceiver">
            <intent-filter>
                <action android:name="com.opera.android.ACTION_CLOSE_ALL_PRIVATE_TABS"/>
            </intent-filter>
        </receiver>
        <service android:exported="false" android:name="com.opera.android.readlater.MigrationService"/>
        <receiver android:enabled="false" android:exported="true" android:name="com.opera.android.readlater.MigrationBroadcastReceiver">
            <intent-filter>
                <action android:name="com.opera.android.action.APP_START"/>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
            </intent-filter>
        </receiver>
        <receiver android:exported="true" android:name="com.opera.android.preinstall.PreinstallInitializer">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
                <action android:name="android.intent.action.USER_INITIALIZE"/>
            </intent-filter>
        </receiver>
        <receiver android:exported="false" android:label="@string/widget_search_hint" android:name="com.opera.android.BrowserAppWidget">
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE"/>
            </intent-filter>
            <meta-data android:name="android.appwidget.provider" android:resource="@xml/browser_widget_info"/>
        </receiver>
        <receiver android:exported="false" android:label="@string/vpn_pro_title" android:name="com.opera.android.vpn.app_widget.VpnProAppWidget">
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE"/>
            </intent-filter>
            <meta-data android:name="android.appwidget.provider" android:resource="@xml/vpn_pro_widget_info"/>
        </receiver>
        <receiver android:exported="false" android:name="com.opera.android.notifications.NotificationBridge$Receiver"/>
        <activity android:exported="false" android:name="com.opera.hype.image.editor.ImageEditorActivity" android:theme="@style/Hype.ImageEditor.AppTheme.Dark"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize" android:name="com.facebook.FacebookActivity" android:theme="@style/com_facebook_activity_theme"/>
        <activity android:name="com.facebook.CustomTabMainActivity"/>
        <activity android:exported="true" android:name="com.facebook.CustomTabActivity">
            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:host="cct.com.opera.browser" android:scheme="fbconnect"/>
            </intent-filter>
        </activity>
        <receiver android:exported="false" android:name="com.google.android.gms.cast.framework.media.MediaIntentReceiver"/>
        <service android:exported="false" android:name="com.google.android.gms.cast.framework.media.MediaNotificationService"/>
        <service android:exported="false" android:name="com.google.android.gms.cast.framework.ReconnectionService"/>
        <receiver android:enabled="true" android:exported="false" android:name="com.leanplum.LeanplumPushReceiver">
            <intent-filter>
                <action android:name="com.leanplum.LeanplumPushFirebaseMessagingService"/>
            </intent-filter>
        </receiver>
        <receiver android:name="com.leanplum.LeanplumJobStartReceiver"/>
        <service android:name="com.leanplum.LeanplumLocalPushListenerService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <activity android:excludeFromRecents="true" android:exported="false" android:name="com.google.android.gms.auth.api.signin.internal.SignInHubActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <service android:exported="true" android:name="com.google.android.gms.auth.api.signin.RevocationBoundService" android:permission="com.google.android.gms.auth.api.signin.permission.REVOCATION_NOTIFICATION"/>
        <activity android:exported="false" android:name="com.google.android.gms.common.api.GoogleApiActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:exported="false" android:name="com.facebook.ads.AudienceNetworkActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:exported="false" android:name="com.google.android.gms.ads.AdActivity" android:theme="@android:style/Theme.Translucent"/>
        <service android:enabled="true" android:exported="false" android:name="com.google.android.gms.ads.AdService"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:exported="false" android:name="com.google.android.gms.ads.OutOfContextTestingActivity"/>
        <receiver android:exported="true" android:name="com.google.firebase.iid.FirebaseInstanceIdReceiver" android:permission="com.google.android.c2dm.permission.SEND">
            <intent-filter>
                <action android:name="com.google.android.c2dm.intent.RECEIVE"/>
            </intent-filter>
        </receiver>
        <service android:directBootAware="true" android:exported="false" android:name="com.google.firebase.messaging.FirebaseMessagingService">
            <intent-filter android:priority="-500">
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
        <service android:directBootAware="true" android:exported="false" android:name="com.google.firebase.components.ComponentDiscoveryService">
            <meta-data android:name="com.google.firebase.components:com.google.firebase.messaging.FirebaseMessagingRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.analytics.connector.internal.AnalyticsConnectorRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.datatransport.TransportRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
            <meta-data android:name="com.google.firebase.components:com.google.firebase.installations.FirebaseInstallationsRegistrar" android:value="com.google.firebase.components.ComponentRegistrar"/>
        </service>
        <provider android:authorities="com.opera.browser.firebaseinitprovider" android:directBootAware="true" android:exported="false" android:initOrder="100" android:name="com.google.firebase.provider.FirebaseInitProvider"/>
        <receiver android:enabled="true" android:exported="false" android:name="com.google.android.gms.measurement.AppMeasurementReceiver"/>
        <service android:enabled="true" android:exported="false" android:name="com.google.android.gms.measurement.AppMeasurementService"/>
        <service android:enabled="true" android:exported="false" android:name="com.google.android.gms.measurement.AppMeasurementJobService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version"/>
        <receiver android:exported="false" android:name="com.facebook.CurrentAccessTokenExpirationBroadcastReceiver">
            <intent-filter>
                <action android:name="com.facebook.sdk.ACTION_CURRENT_ACCESS_TOKEN_CHANGED"/>
            </intent-filter>
        </receiver>
        <receiver android:exported="false" android:name="com.facebook.AuthenticationTokenManager$CurrentAuthenticationTokenChangedBroadcastReceiver">
            <intent-filter>
                <action android:name="com.facebook.sdk.ACTION_CURRENT_AUTHENTICATION_TOKEN_CHANGED"/>
            </intent-filter>
        </receiver>
        <provider android:authorities="com.opera.browser.androidx-startup" android:exported="false" android:name="androidx.startup.InitializationProvider">
            <meta-data android:name="androidx.work.WorkManagerInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.emoji2.text.EmojiCompatInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.lifecycle.ProcessLifecycleInitializer" android:value="androidx.startup"/>
        </provider>
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
        <provider android:authorities="com.opera.browser.com.squareup.picasso" android:exported="false" android:name="com.squareup.picasso.PicassoProvider"/>
        <service android:exported="false" android:name="com.google.android.datatransport.runtime.backends.TransportBackendDiscovery">
            <meta-data android:name="backend:com.google.android.datatransport.cct.CctBackendFactory" android:value="cct"/>
        </service>
        <service android:exported="false" android:name="com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService" android:permission="android.permission.BIND_JOB_SERVICE"/>
        <receiver android:exported="false" android:name="com.google.android.datatransport.runtime.scheduling.jobscheduling.AlarmManagerSchedulerBroadcastReceiver"/>
        <meta-data android:name="com.google.android.play.billingclient.version" android:value="5.2.0"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize" android:exported="false" android:name="com.android.billingclient.api.ProxyBillingActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <activity android:enabled="false" android:exported="false" android:launchMode="singleInstance" android:name="com.google.android.play.core.missingsplits.PlayCoreMissingSplitsActivity" android:process=":playcore_missing_splits_activity" android:stateNotNeeded="true"/>
        <activity android:enabled="false" android:exported="false" android:name="com.google.android.play.core.common.PlayCoreDialogWrapperActivity" android:stateNotNeeded="true" android:theme="@style/Theme.PlayCore.Transparent"/>
        <activity android:configChanges="fontScale|keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize" android:name="com.opera.ad.interstitial.AdActivity"/>
        <service android:exported="false" android:name="ikev2.network.sdk.network.vpn.IKEv2VPNService" android:permission="android.permission.BIND_VPN_SERVICE">
            <intent-filter>
                <action android:name="android.net.VpnService"/>
            </intent-filter>
        </service>
        <service android:exported="false" android:name="com.vpn.network.vpn.connection.OpenVPNService" android:permission="android.permission.BIND_VPN_SERVICE">
            <intent-filter>
                <action android:name="android.net.VpnService"/>
            </intent-filter>
        </service>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTLandingPageActivity" android:theme="@style/tt_landing_page"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTPlayableLandingPageActivity" android:theme="@style/tt_landing_page"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTVideoLandingPageActivity" android:theme="@style/tt_landing_page"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTVideoLandingPageLink2Activity" android:theme="@style/tt_landing_page"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTRewardVideoActivity" android:theme="@style/tt_full_screen_new"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTRewardExpressVideoActivity" android:theme="@style/tt_full_screen_new"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTFullScreenVideoActivity" android:theme="@style/tt_full_screen_new"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTFullScreenExpressVideoActivity" android:theme="@style/tt_full_screen_new"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTInterstitialActivity" android:theme="@style/tt_full_screen_interaction"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTInterstitialExpressActivity" android:theme="@style/tt_full_screen_interaction"/>
        <activity android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTDelegateActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <activity android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTWebsiteActivity" android:screenOrientation="portrait" android:theme="@style/tt_privacy_landing_page"/>
        <activity android:configChanges="keyboardHidden|orientation|screenSize" android:launchMode="standard" android:name="com.bytedance.sdk.openadsdk.activity.TTAppOpenAdActivity" android:theme="@style/tt_app_open_ad_no_animation"/>
        <service android:name="com.bytedance.sdk.openadsdk.multipro.aidl.BinderPoolService"/>
        <activity android:name="com.bytedance.sdk.openadsdk.adapter.PangleAdInterstitialActivity"/>
        <service android:enabled="false" android:exported="false" android:name="com.yandex.metrica.MetricaService" android:process=":Metrica">
            <intent-filter>
                <category android:name="android.intent.category.DEFAULT"/>
                <action android:name="com.yandex.metrica.IMetricaService"/>
                <data android:scheme="metrica"/>
            </intent-filter>
            <meta-data android:name="metrica:api:level" android:value="105"/>
        </service>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:exported="false" android:name="com.opera.android.ads.yandex.YandexIntentInterceptor" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <activity android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode" android:name="com.yandex.mobile.ads.common.AdActivity" android:theme="@android:style/Theme.Translucent.NoTitleBar"/>
        <meta-data android:name="com.android.stamp.source" android:value="https://play.google.com/store"/>
        <meta-data android:name="com.android.stamp.type" android:value="STAMP_TYPE_DISTRIBUTION_APK"/>
        <meta-data android:name="com.android.vending.splits" android:resource="@xml/splits0"/>
        <meta-data android:name="com.android.vending.derived.apk.id" android:value="2"/>
        <meta-data android:name="com.android.dynamic.apk.fused.modules" android:value="base"/>
    </application>
</manifest>=function(){return 0}},{}]},{},[1]);