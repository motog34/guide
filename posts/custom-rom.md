Info { 
description: Step by step guide to install custom rom
tags:
 }
 
# Installing custom rom with custom recovery
 
```WARN
NOTE: if you want to flash custom rom using a custom recovery follow this steps:
IMPORTANT: after temporary boot to recovery don't reboot unless it's specified.
```
 
- Temporary boot custom recovery, if u haven't flashed the recovery permanently
```
fastboot boot recovery_latest.img
```

```WARN
IMPORTANT: flash [copy-partitions.zip](https://github.com/PrintHelloPeople/recovery_release/releases/tag/Latest) if you are flashing custom rom for the first time.
```
- Flash custom rom
- Format data
- Flash Gapps (if rom is vanilla, not needed in pixel based roms such as hentaiOS)
- (Optional) Install recovery as permanent, then reboot to recovery
- (Optional) Flash [MagiskLatestStable.zip](https://github.com/PrintHelloPeople/fogos_recovery/releases/download/Latest/MagiskLatestStable.zip) if u want root
- Reboot and enjoy ;)
 
```WARN
NOTE: you can't flash official Magisk.apk or Magisk.zip in custom recovery, it will not work you must use MagiskLatestStable.zip
```