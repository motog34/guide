Info {
  title: Installing Custom
  description: Installing custom ROM with custom recovery
  tags: Custom ROM, Step by Step, Basic
}
> [!NOTE]
>If you want to flash a custom ROM using a custom recovery, follow these steps:<note>
<important>After temporarily booting to recovery, do not reboot unless specified.<important>
- Temporarily boot the custom recovery if you haven't flashed it permanently:
```fastboot boot recovery_latest.img```
- Format data.
<important>Flash [copy-partitions.zip](https://github.com/PrintHelloPeople/fogos_recovery/releases/download/Latest/copy-partitions-20220613-signed.zip) if you are flashing a custom ROM for the first time<important>
- Flash the custom ROM:
```adb sideload *File here*```
- Flash Gapps (if the ROM is vanilla; not needed in Pixel-based ROMs such as HentaiOS).
- (Optional) Install recovery permanently and then reboot to recovery.
- (Optional) Flash [MagiskLatestStable.zip](https://github.com/PrintHelloPeople/fogos_recovery/releases/download/Latest/MagiskLatestStable.zip) if you want root access.
- Reboot and enjoy! ;)
