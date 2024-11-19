Info { 
description: Step by step guide to debloat Android
tags:
 }
 
 # How to?
```NOTE
Note: I recommend you to use [universal-android-debloater](https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/releases) a PC program; but if you don't have a PC you can use [LADB](https://motog34.github.io/guide/?post=how-to-use-LADB) to remove bloatware
```

Some terminology (only applies to system apps, and to this guide):

- **Disable:** Think it as a toggle, when turned on an app can't expand anymore, can't run, it just like bacteria can't grow anymore when freezed but still alive.
- **Completely disable:** Similar to disable but it will make the app size 0 B when viewed from app info.
- **Uninstall:** Roughly speaking, removes for the specific user but the installer still remains in the system.
- **Completely uninstall (needs root user access):** It literally means what it means; the particular package (aka app) will no longer be in the system.

Talking about space, a completely disabled app is going to save 0 space when uninstalled.

Also some disabled apps show some space like 24 kB, 6 MB. Make sure their updates are removed and you cleared the app data that is possible to be cleared. And if even after that they don't show 0 B, consider them completely disabled, you can't do much on them. And I don't know if you could save any space by uninstalling them. App size like 24 kB is negligible, although 6 MB is not but you can ignore it if 6 MB is only for one-two app(s).

In some cases it's better to completely disable an app instead of uninstalling it.

**To completely** disable the app:

1. **Disable the app** either from app info if you can, or by 
```
pm disable-user --user 0 pkgName`
``` 
2. **Uninstall its updates** if any (ie restored it to factory version), [here's how](xxxxxx) (you will see the search icon there if there aren't any updates) and
3. **Clear its data** either from the app info if you can, or by 
```
pm clear pkgName
```
(if the clear app data option is greayed out and there is app data that could be cleared, enable the app, then clear its data, and then disable it or simply use the command to clear it)

**To enable the app** you can either from the app info if you can or by pm 
```
enable pkgName
```
universal-android-debloater does all the three steps in one click for you, but doing these steps in ladb is a hassle (unless you're a pro).

So if you're using ladb you may want to uninstall the app instead of disabling it because of the hassle:

```
pm uninstall --user 0 pkgName
```
And **to get it back**, 
```
pm install-existing pkgName
```

```TIP
Implies external description is provided.
```
[External descriptions](https://motog34.github.io/guide/?post=external-descriptions)
```TIP
Open external descriptions section in new tab for better viewing.
```

| **Third party (no doubt bloatware)** | **Package name** |
|--------------------------------------|-------------------|
| Meta App Installer                   | com.facebook.system |
| Meta Services                        | com.facebook.services |
| Mobile Device Information Provider   | com.amazon.appmanager |
| Meta App Manager                     | com.facebook.appmanager |

| **Region Specific**                  | **Package name** |
|--------------------------------------|-------------------|
| NA                                   | com.android.cellbroadcast.overlay |
| NA                                   | com.android.cellbroadcastreceiver |
| NA                                   | com.android.cellbroadcastservice.overlay |
| Cell Broadcast Service               | com.google.android.cellbroadcastservice |
| Wireless emergency alerts            | com.google.android.cellbroadcastreceiver |

| **Moto & Lenovo**                    | **Package name** |
|--------------------------------------|-------------------|
| Camera*                              | com.motorola.camera3 |
| Moto Camera Content 3*               | com.motorola.camera3.content.ai |
| Camera Desktop Settings*             | com.motorola.motcameradesktop |
| Motorola Notifications*              | com.motorola.ccc.notification |
| Device Care*                         | com.motorola.motocare |
| Device Help*                         | com.motorola.genie |
| Moto feedback*                       | com.motorola.help |
| Device Management*                   | com.motorola.ccc.devicemanagement |
| Lenovo ID*                           | com.lenovo.lsf.user |
| Device configuration*                | android.autoinstalls.config.motorola.layout |
| PAKS*                                | com.motorola.paks |
| App Box*                             | com.motorola.brapps |
| MotoApps                             | com.aura.oobe.motorola |
| Moto Discovery                       | com.motorola.discovery |
| Moto Tour                            | com.motorola.mototour |
| Interactive wallpapers               | com.motorola.livewallpaper3 |
| Games                                | com.motorola.gamemode |
| Ready For engine                     | com.motorola.mobiledesktop.core |
| Moto Widget                          | com.motorola.timeweatherwidget |
| Moto Display*                        | com.motorola.motodisplay |
| Motorola face unlock*                | com.motorola.faceunlock |
| Screenshot editor                    | com.motorola.screenshoteditor |
| Adaptive volume                      | com.motorola.dynamicvolume |
| Moto Power Touch                     | com.motorola.motofpstouch |
| Moto Actions & Gestures              | com.motorola.actions |
| FM Radio                             | com.motorola.fmplayer |
| FMRadioService                       | com.motorola.android.fmradio |
| Recorder                             | com.motorola.audiorecorder |
| Personalise                          | com.motorola.personalize |

| **Google**                           | **Package name** |
|--------------------------------------|-------------------|
| Google                               | com.google.android.googlequicksearchbox |
| Assistant                            | com.google.android.apps.googleassistant |
| Google Assistant*                    | com.android.hotwordenrollment.okgoogle |
| Google Assistant*                    | com.android.hotwordenrollment.xgoogle |
| Maps                                 | com.google.android.apps.maps |
| Duo                                  | com.google.android.apps.tachyon |
| YouTube                              | com.google.android.youtube |
| YouTube Music                        | com.google.android.apps.youtube.music |
| YT Music                             | com.google.android.apps.youtube.music.setupwizard |
| Google TV                            | com.google.android.videos |
| Android Auto                         | com.google.android.projection.gearhead |
| ARCore*                              | com.google.ar.core |
| Android Accessibility Suite*         | com.google.android.marvin.talkback |
| Speech services by Google*           | com.google.android.tts |
| Contacts                             | com.google.android.contacts |
| Phone                                | com.google.android.dialer |
| Messages*                            | com.google.android.apps.messaging |
| Files by Google                      | com.google.android.apps.nbu.files |
| Files*                               | com.google.android.documentsui |
| NA*                                  | com.google.android.overlay.modules.documentsui |
| Gmail                                | com.google.android.gm |
| Google One*                          | com.google.android.apps.subscriptions.red |
| Drive                                | com.google.android.apps.docs |
| Photos                               | com.google.android.apps.photos |
| Chrome                               | com.android.chrome |
| Clock                                | com.google.android.deskclock |
| Styles & wallpapers                  | com.google.android.apps.wallpaper |
| Gboard                               | com.google.android.inputmethod.latin |
| Calendar                             | com.google.android.calendar |
| Calculator                           | com.google.android.calculator |
| Data restore tool*                   | com.google.android.apps.restore |
| Google Location History*             | com.google.android.gms.location.history |
| Digital Wellbeing*                   | com.google.android.apps.wellbeing |
| Print Spooler*                       | com.android.printspooler |
| Default print service*               | com.android.bips |
| Emergency information*               | com.android.emergency |
| Market Feedback Agent*               | com.google.android.feedback |

# External description

| **Nickname**                    | **Package name**                          | **Description** |
|---------------------------------|-------------------------------------------|-----------------|
| Camera                          | com.motorola.camera3 🌐                   |                 |
| Moto Camera Content 3           | com.motorola.camera3.content.ai 🌐        |                 |
| Camera Desktop Settings         | com.motorola.motcameradesktop 🌐          |                 |
| Motorola Notifications          | com.motorola.ccc.notification 🌐          | Sends periodic product-related information, including notifications about software updates, tips, surveys, and new Motorola products and services. |
| Device Care                      | com.motorola.motocare                    | "Moto Care" was renamed to "Moto Help" and then to "Device Help". Provides support features. [More info](https://mobile.softpedia.com/blog/Moto-Care-App-Gets-Updated-Now-Called-Motorola-Help-432827.shtml) |
| Device Help                     | com.motorola.genie 🌐                    | An app that checks hardware status and provides support contacts for users. |
| Moto feedback                   | com.motorola.help 🌐                      | Allows you to rate your device and send feedback to Motorola. |
| Device Management               | com.motorola.ccc.devicemanagement        | MDM allows a company’s IT department to access your phone to ensure security, know its location, and remotely erase data. [More info](https://onezero.medium.com/dont-put-your-work-email-on-your-personal-phone-ef7fef956c2f) |
| Lenovo ID                       | com.lenovo.lsf.user                      | Adds a login option for Lenovo ID in Settings > Accounts. Syncs user information across devices. |
| Device configuration            | android.autoinstalls.config.motorola.layout | Device configuration for Motorola. Auto-installs a set of OEM apps on first boot or factory reset. |
| PAKS                            | com.motorola.paks                        | Protected by ADB; third-party application bundles. [More info](https://www.financialmirror.com/2007/10/31/motorola-packs-moto-q-9h-global-smart-device-with-third-party-applications/) |
| App Box                         | com.motorola.brapps 🌐                   | Offers a selection of apps developed by Brazilians and recommended apps. Disabled by default outside Brazil. |
| Moto Display                    | com.motorola.motodisplay 🌐              | Displays notifications with the screen off (like Always On Display). [More info](https://support.motorola.com/uk/en/solution/ms108519) |
| Motorola face unlock            | com.motorola.faceunlock 🌐              | Unlocks the device by looking at the screen. [More info](https://www.kaspersky.com/blog/face-unlock-insecurity/21618/) |
| Google Assistant                | com.android.hotwordenrollment.okgoogle  | "OK Google" detection service. |
| Google Assistant                | com.android.hotwordenrollment.xgoogle   | "OK Google" detection service. |
| ARCore                          | com.google.ar.core 🌐                    | Google Play Services for AR (Augmented Reality). Can affect apps like Pokemon GO. [More info](https://beta.pithus.org/report/99ea324529f950fe351d22724f8b894cce19c16607fcc9c2855bc906b1f8e644) |
| Android Accessibility Suite     | com.google.android.marvin.talkback 🌐   | Assists visually impaired users. [Available on Google Play](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) |
| Speech services by Google       | com.google.android.tts 🌐               | Default Text-To-Speech (TTS) engine on Android. Enables apps to convert text to speech. [Pithus analysis](https://beta.pithus.org/report/08f97758fbfae1e17c4a8e5ee1a1e6d2726ce6b0b4931d5452f2376d60f1b4fb) |
| Messages                        | com.google.android.apps.messaging 🌐     | Google Messages (SMS+RCS). [GitHub pull request to share experiences](https://github.com/0x192/universal-android-debloater/pull/250) |
| Files                           | com.google.android.documentsui          | File selector for other apps. Safe to disable but may affect file saving/loading in some apps. |
| NA                              | com.google.android.overlay.modules.documentsui | Theme pack for the stock Android file browser. |
| Google One                      | com.google.android.apps.subscriptions.red 🌐 | Manages Google cloud storage. |
| Data restore tool               | com.google.android.apps.restore 🌐      | Backup restore wizard for Android system backups from Google. Runs on boot and re-enables on factory reset. |
| Google Location History         | com.google.android.gms.location.history | Tracks location history. [More info](https://support.google.com/accounts/answer/3118687?hl=en) |
| Digital Wellbeing               | com.google.android.apps.wellbeing 🌐    | Tracks device and app usage and sets limits. A hard dependency on Android 12+ for Pixel phone settings. |
| Print Spooler                   | com.android.printspooler               | Manages printing process. Safe to disable but will disable print settings and functionality. |
| Default print service           | com.android.bips                       | Generic print service. Disabling breaks printing, but other print services can be downloaded. |
| Emergency information           | com.android.emergency                  | Shows emergency info on lock screen and power menu. |
| Market Feedback Agent           | com.google.android.feedback            | Sends crash-report feedback to the Play Store. Has permissions for system logs and usage stats. [Pithus analysis](https://beta.pithus.org/report/7041823ff880c207ed2ddacdc92e5ed803b1eb105e4483696d2152bea44903aa) |
