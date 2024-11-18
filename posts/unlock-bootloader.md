Info { 
description: Step by step guide to unlock your device bootloader
tags:
 }
 
This method is extracted from official Motorola bootloader unlock page. I modified and simplified it and fixed the broken links.

Divided in 5 sub sections:

# Outline and warnings

To unlock the bootloader, you need to find and enter your device ID in Motorola unlock bootloader page and they will give you a unlock key which you will use to unlock the bootloader.

The moment they reveal the key for you, your warranty is voided and it will not come back even after relocking

You will recieve ota on stock no issues with unlocked bl as long phone isn't rooted

Motorola over expressed their feelings for why one shouldn't not unlock the bootloader even to death, bullshit I say.

# Prerequisites

- [Usb Drivers](https://dl.google.com/android/repository/usb_driver_r13-windows.zip)
Only needed if you use Windows.

- Have [platform tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) already setup in your PC and some experience with CLI

# Getting your device ID

In developer option, enable “OEM unlocking” and “USB debugging”
Connect your phone with your PC using the cable
Put your device in fastboot mode: 
```
adb reboot bootloader
```
Make sure the device is recognisable by the PC in fastboot mode: 
```
fastboot devices
```
Get your device ID: 
```
fastboot oem get_unlock_data
```

This fastboot command will return linear sequences of characters called strings.

You'll need to join together the 5 lines of output into one continuous string without any other text or white spaces, remove if there's something like “INFO”, “(bootloader)” in the string.

This new continuous string is the device ID which you will be using to generate your unique unlock key.

# Getting your unlock key

1- To get your unlock key, copy the device ID string, being sure there are no spaces, and paste it into the “Make sure your device is unlockable” field To get your unlock key, copy the device ID string, being sure there are no spaces, and paste it into the “Make sure your device is unlockable” field [here](https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-b) at the bottom (you have to log in first). And tap on the Can my device be unlocked? button.
2- A new Request Unlock Key button should appear at the bottom of the page. Agree to their whatever and tap on that button.
3- You will receive your unlock key through the email address you used to log in here.

# Unlock it and done

```
fastboot oem unlock 𝘺𝘰𝘶𝘳𝘜𝘯𝘭𝘰𝘤𝘬𝘒𝘦𝘺
```