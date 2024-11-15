Info {
  title: Installing Custom
  description: Installing custom ROM with custom recovery
  tags: Custom ROM, Step by Step, Basic
}

```NOTE
If you want to flash a custom ROM using a custom recovery, follow these steps
```
```IMPORTANT
After temporarily booting to recovery, do not reboot unless specified.
```
1. Temporarily ```boot the custom recovery``` if you haven't flashed it permanently:
```
fastboot boot recovery_latest.img
```
3. Format data.
```IMPORTANT
Flash [copy-partitions.zip](https://github.com/PrintHelloPeople/fogos_recovery/releases/download/Latest/copy-partitions-20220613-signed.zip) if you are flashing a custom ROM for the first time
```
4. Flash the custom ROM:
```adb sideload *File here*```
5. Flash Gapps (if the ROM is vanilla; not needed in Pixel-based ROMs such as HentaiOS).
6. (Optional) Install recovery permanently and then reboot to recovery.
7. (Optional) Flash [MagiskLatestStable.zip](https://github.com/PrintHelloPeople/fogos_recovery/releases/download/Latest/MagiskLatestStable.zip) if you want root access.
8. Reboot and enjoy! ;)
