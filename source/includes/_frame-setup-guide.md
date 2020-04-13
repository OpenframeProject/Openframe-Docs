# Frame Setup Guide

## A quick note, before you start...

## 1. Create a user account

Go to [openframe.io](https://openframe.io/login) and create a new account.


## 2. Setup a frame

Although technically it can run on any computer that runs Node.js, Openframe is designed for the Raspberry Pi. 

### Requirements

* Raspberry Pi 1, 2, or 3 w/ power adaptor
* HDMI monitor (or any monitor with an HDMI adaptor)
* SD card pre-flashed w/ [NOOBS](https://www.raspberrypi.org/help/noobs-setup/)
* WiFi dongle (note: RPi 3 has built-in wifi)
* Keyboard + Mouse
* HDMI Cable

If you're looking for a Raspberry Pi starter pack, this would work well: [Starter pack](https://www.amazon.com/CanaKit-Raspberry-Complete-Starter-Kit/dp/B01C6Q2GSY)

### 2.0 Preparing the Pi

<aside class="info">If you already have a Raspberry Pi setup with WiFi connected, jump to step <a href="#2-1-install-openframe">2.1 Install Openframe</a>. People have reported issues using Raspbian Wheezy — we recommend using Jessie (from the latest NOOBS).</aside>

1. Insert the SD card, WiFi dongle, and connect the monitor, keyboard and mouse.
2. Plug in the Pi, and follow the directions on screen, selecting Rasbian.
  a. Once the installation finishes, the Pi will reboot and open to the configuration screen.
  b. If your RPi booted to Desktop, find Terminal in the Menu and type `sudo raspi-config` to access the configuration screen. **We recommend booting the RPi to terminal: Select 'Boot Options' and select 'B2 Console Autologin'.**
4. Select your timezone in Internationalisation Options > Change Timezone
5. If you wish, change your password (the default password is raspberry)
6. Select 'Finish', then 'Yes' when it asks about rebooting.
7. When the Pi reboots, login with the root user (`pi`) and password (`raspberry`, unless you changed it).


#### Setup WiFi

1. After you're logged in at the command line, we'll start up the GUI in order to configure WiFi. At the command line type `startx` to launch the GUI.
2. Once the GUI is open, click the network icon in the upper right-hand corner, and select your WiFi network. Enter the password at the prompt, and connect.
3. Assuming the WiFi has connected successfully, click 'Menu' on the upper left and select 'Shutdown', then select the 'Logout' or 'Exit to command line', and press 'Ok'.

### 2.1 Install Openframe

```terminal
$ bash -c "$(curl https://openframe.io/install.sh)"
```

In the command line on the Raspberry Pi, execute the install shell script.

The installation takes around 20 minutes (could be longer on a slow connection). Follow the instructions at the end of the installation, you may need to restart the RPi.

### 2.2 Start the frame

```terminal
$ openframe
? Enter your Openframe username: lewisc
? Enter your Openframe password: ****
? Enter a name for this Frame: Living Room Frame
? Do you want to boot openframe on startup? (Y/n): No

[o]   Connected! You can now push artwork to this frame.

This frame should now appear as Living Room Frame when you log in to Openframe at https://openframe.io.
```

> If you haven't selected to autoboot, you can exit `openframe` with Ctrl+C, or Ctrl+W in web artworks.

After installation, just type `openframe` at the command line.

If it's the first time you start the frame, it will ask you for your Openframe username and password, a name for this frame, and if you want to boot into openframe automatically when the Pi starts.

<aside class="warning">If you choose to autoboot (the default), holding <code>n</code> during startup of the Pi will bring you to the command line instead of launching Openframe.</aside>

You're now ready to start displaying artwork!

We recommend setting a timer so the frame goes to sleep at night. See how below.





## 3. Displaying artwork

**Quick guide** to send artwork to your frame:

* Go to [openframe.io](https://openframe.io/login) and login to your account.
* In the web app, go to 'You' and click **Add artwork** to add a new piece. Then click the arrow button to push the artwork to your frame.
* You can also push artwork to your frame directly from the Stream (artwork created and published by other users).

<aside class="info">The web app is responsive and works well as a mobile app. If you'll be using it on your phone, we recommend <a href="http://lifehacker.com/5809338/add-web-site-bookmarks-to-your-iphones-homescreen">adding the website to your homescreen</a></aside>

### 3.1 Artwork formats

By default, Openframe supports four types of artwork formats:

* Images (PNG, JPG, JPEG)
* Videos (mp4)
* Websites (including WebGL)
* Shaders

If you'd like to add artwork with a different format (Processing, OpenFrameworks, etc.) you can [search for existing extensions](https://npmsearch.com/?q=openframe-extension) on NPM or [create an extension](#4-2-creating-an-extension) to support a new format.

See more about installing and creating Extensions [below](#4-extensions).

### 3.2 The Stream

The Stream contains all artwork that users have made **public**. You can **like** artwork from the Stream to save it. Click the like button again to remove it.

### 3.3 Your Artwork

Your artwork collection contains artwork that you've **added**, or you've **liked** from the Stream.

#### Adding artwork

Artwork added to Openframe requires an author, name, a format, a URL where the artwork is hosted, and a URL for a preview image (suggested width = 500px).

When adding new artwork, you can set it to be private (default) or public. Private artworks are only visible to you, while public artworks will appear in the Stream for others to like and display.

<aside class="warning">By making an artwork public, you are claiming to be the author (or copyright holder) of the work — please do not publish works that are not your own.</aside>

#### Adding shaders from The Book of Shaders

Shaders can be added via the [Book of Shaders Editor](http://editor.thebookofshaders.com/). Create your shader, then select Export -> [o] in the top menu. This will add the shader to your Artworks.

### 3.4 Rights

Openframe does not store any artwork. Frames fetch artwork directly form the provided URL each time it's required to display it. Make sure you have the rights to the artwork you add and display using Openframe.

The artwork will be available as long as the content in the URL is available.





## 4. Extensions

Openframe provides a baseline functionality that can be augmented with extensions. An extension may be created to support a new artwork format, to add interactivity to the frame, etc.

### 4.1 Installing an extension

> E.G, to add the openFrameworks extension:

```terminal
$ openframe -i openframe-of
```

> To remove the openFrameworks extension:

```terminal
$ openframe -u openframe-of
```

At present, extensions must be installed and removed on the Raspberry Pi directly, via the command line.

### 4.2 Creating an extension

<aside class="info">More documentation coming soon!</aside>

Extension are node modules which export an instance of the [Extension](https://github.com/OpenframeProject/Openframe-Extension) class. The README for the Extension repo gives a bit of information about how Extensions work, and how to create them.

If you're interested, take a look at the source for default extensions ([openframe-image](https://github.com/OpenframeProject/Openframe-Image), [openframe-website](https://github.com/OpenframeProject/Openframe-Website), [openframe-glslviewer](https://github.com/OpenframeProject/Openframe-glslViewer), and [openframe-video](https://github.com/OpenframeProject/Openframe-Video)) to get a sense of how they work in practice.

Keep in mind that Openframe is still in an early alpha state, and the way extensions are created and loaded will continue to evolve and improve!





## Extras

### Add a timer

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

### Change the rotation of the display

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

### Adding additional curators to a frame you own

If you're a frame *owner* (i.e. you've created it using your username) you can add other users as *curators*. Curators will see another frame in their list of frames, and will be able to push artwork to it. They cannot edit the frame settings or delete it.

Curators are added via the web app, within the frame's settings panel.


### Resetting a frame

```terminal
$ openframe -r
```

A frame can be reset to its default state — that is, a blank frame instance not yet attached to any particular account — by passing the `-r` flag at startup. This will erase the user and frame data stored on the RPi, and will prompt you once again for your username, password, and a name for the frame. Once a frame is reset, it's previous state cannot be restored (though this is generally not an issue... you'll just need to start pushing artwork to the new frame).

Resetting a frame will _not_ remove it from your frame list in the web app; you will need to remove the instance of the old frame manually via the UI, under the frame's settings.





## Updating Openframe

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
