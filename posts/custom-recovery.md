Info { 
description: Step by step guide to install custom recovery
tags:
 }
 
```WARN
Before any flashing you %MUST% have bootloader unlock, guide is on previous section.
```

Right now Motorola Moto G34 5G (fogos) supports the following recoveries

TWRP (Official)
OFOX (Unofficial)
SHRP (Unofficial)
```NOTE
Recovery is under boot partition on this device
```

# Installing custom recovery

You can download the latest releases of recoveries from [here](https://github.com/PrintHelloPeople/recovery_release/releases/tag/Latest)

Given recovery_latest.img the file you have downloaded (it could be twrp-3.7.1_12-0-fogos.img ,shrp.img etc..)

1. To **temporary boot** run
```
fastboot boot recovery_latest.img
```
```WARN
IMPORTANT you must not run
```
```WARN
If you do so you will screw your system!
To fix that you need to get latest boot.img from stock or custom rom and run
```
```
fastboot flash boot boot.img
``` 
2. After recovery has booted you need to:

1. Flash recovery as permanent (optional but recommend if you want recovery to stick on reboot)

**TWRP:**
- Advanced
- Flash current TWRP

**Orange Fox Recovery:**
- Click setting icon up right
- Flash current OFox

```NOTE
permanent installation will remove root follow next section for installing magisk again
```

2. After permanent recovery installation, you need to reboot to recovery (If recovery still show up you did everything right if not you failed somewhere repeat section 1 from temporary boot)

3. Optional: Flash Magisk
- Dowload latest MagiskLatestStable.zip from [here](https://github.com/PrintHelloPeople/fogos_recovery/releases/download/Latest/MagiskLatestStable.zip)
- Then flash it in recovery (if you don't know how to do that search surf the web)
- Congratulations now recovery is permanent and you have root :)