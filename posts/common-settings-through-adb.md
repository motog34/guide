These are the common settings available in Android you can access through adb.

You can list them by running (pick one):

```
settings list <secure/system/global>
```

And before changing any values you should know the default value in case to revert. Use `get` to get:

```
settings get <system/global/secure> 𝘱𝘳𝘰𝘱𝘦𝘳𝘵𝘺𝘕𝘢𝘮𝘦
```

Use `put` to change:

```
settings put <system/global/secure> 𝘱𝘳𝘰𝘱𝘦𝘳𝘵𝘺𝘕𝘢𝘮𝘦 𝘱𝘳𝘰𝘱𝘦𝘳𝘵𝘺𝘝𝘢𝘭𝘶𝘦
```
