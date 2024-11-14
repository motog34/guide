Info {
title: Installing Custom
description: Installing custom rom with custom recovery
tags: Custom ROM, Step by Step, Basic
}
<note>If you want to flash custom rom using a custom recovery follow this steps<note>
<important>After temporary boot to recovery don't reboot unless it's specified.<important>
- Temporary boot custom recovery, if u haven't flashed the recovery permanently
```fastboot boot recovery_latest.img```
- Format data
<important>Flash [copy-partitions.zip](https://github.com/PrintHelloPeople/fogos_recovery/releases/download/Latest/copy-partitions-20220613-signed.zip) if you are flashing custom rom for the first time.<important>
- Flash custom ROM
```adb sideload *File here*```
- Flash Gapps (if rom is vanilla, not needed in pixel based roms such as hentaiOS)
- (Optional) Install recovery as permanent, then reboot to recovery
- (Optional) Flash [MagiskLatestStable.zip](https://github.com/PrintHelloPeople/fogos_recovery/releases/download/Latest/MagiskLatestStable.zip) if u want root
- Reboot and enjoy ;)
