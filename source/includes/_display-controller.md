# Display Controller

The [display or frame controller](https://github.com/OpenframeProject/Openframe) is the software that runs on the frame itself (i.e. the RPi), acting as a process manager for starting, stopping, and transitioning between artworks. You can remote control it via the [Web-App](https://openframe.io/stream). Both communicate via an API Server (more on this in the [Platform section](#platform)).

The following are topics that might be interesting to you.

## Timer

> At the terminal, open crontab config:

```terminal
$ crontab -e
```

> and add the following cron rules:

```
00 23 * * * vcgencmd display_power 0
30 7 * * * vcgencmd display_power 1
```

If you want your frame to go to sleep at certain hours, edit crontab.

The example to the right will turn OFF the display of the frame at 23:00, and turn it ON at 7:30 in the morning. Change the values for different times. [Learn more](http://www.adminschoice.com/crontab-quick-reference) about crontab to setup different timer for different days of the week.

## Change the rotation of the display

> At the terminal, edit `/boot/config.txt`:

```terminal
$ sudo nano /boot/config.txt
```

> then add the desired display_rotate setting:

```terminal
display_rotate=1
```

If you want to change the orientation from what was set during the installation, edit the Raspberry Pi configuration file (/boot/config.txt).

`0` is the display default (landscape). `1` will rotate the display by 90° counterclockwise. Use `2` for 180°, or `3` for 270°.

## Adding additional curators

If you're a frame *owner* (i.e. you've created it using your username) you can add other users as *curators*. Curators will see another frame in their list of frames, and will be able to push artwork to it. They cannot edit the frame settings or delete it.

Curators are added via the web app, within the frame's settings panel.


## Resetting a frame

```terminal
$ openframe -r
```

A frame can be reset to its default state — that is, a blank frame instance not yet attached to any particular account — by passing the `-r` flag at startup. This will erase the user and frame data stored on the RPi, and will prompt you once again for your username, password, and a name for the frame. Once a frame is reset, it's previous state cannot be restored (though this is generally not an issue... you'll just need to start pushing artwork to the new frame).

Resetting a frame will _not_ remove it from your frame list in the web app; you will need to remove the instance of the old frame manually via the UI, under the frame's settings.





## Updating

> Re-run the install script, then source your `.bashrc` file:

```terminal
$ bash -c "$(curl https://openframe.io/install.sh)"
$ source ~/.bashrc
```

> Then run openframe:

```terminal
$ openframe
```

If you've already installed Openframe via the install script above, you can simply re-run the install script to update.

After upgrading, you'll need to reload your shell in order to pull in any enviroment changes.