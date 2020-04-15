# Getting Started

This guide tells you everything you need to know to set up and use a frame quickly. We're going to add more in-depth information on specific topics elsewhere in this documentation over time.

## 1. Create a user account

Go to [openframe.io](https://openframe.io/login) and create a new account.


## 2. Setup a frame

Openframe is designed for the [Raspberry Pi](https://www.raspberrypi.org/) although it might run on other computers.

### Hardware requirements

* **Any Raspberry Pi model** w/ power adaptor.  
It needs to connect to the internet either via ethernet or WiFi. [Check here](https://en.wikipedia.org/wiki/Raspberry_Pi#Generations_of_released_models) if your model comes with built-in WiFi.
* Monitor that connects to the HDMI port of the Raspberry Pi (others are probably [not going to work](#tft-displays))
* SD card
* Keyboard + Mouse

If you're looking for a Raspberry Pi starter pack, this would work well: [Starter pack](https://www.amazon.com/CanaKit-Raspberry-Complete-Starter-Kit/dp/B01C6Q2GSY)

Head over to the [Hardware section](#hardware) for more info.

<aside class="info">If you already have a Raspberry Pi running and connected to the internet, jump to step <a href="#2-2-install-openframe">2.2 Install Openframe</a>.</aside>


### 2.0 Prepare SD card

Follow the [Raspberry Pi installation guide](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) and copy the latest version of the Raspian operating system on to the SD card. Alternatively use a pre-flashed SD-card with [NOOBS](https://www.raspberrypi.org/downloads/noobs/).

Alternatively, you can download an [SD image with Openframe preinstalled](https://gist.github.com/jvolker/96a52b05459316643f8e110ff46b8e32). If you choose this option, set up the hardware (as described below) boot the Pi, log in and jump to step <a href="#2-3-start-the-frame">2.3 Start the frame</a>.

### 2.1 Preparing the Pi

1. **Set up hardware:** Insert the SD card, WiFi dongle, and connect the monitor, keyboard and mouse.
2. **Plug in the Pi**, and follow the directions on screen, selecting Rasbian.  
  a.) Once the installation finishes, the Pi will reboot and open to the configuration screen.  
  b.) If your RPi booted to Desktop, find Terminal in the Menu and type `sudo raspi-config` to access the configuration screen.  
  **We recommend booting the RPi to terminal:** Select `Boot Options` and select `B2 Console Autologin1.
3. **Select** your timezone in Internationalisation Options > Change Timezone
4. *Optional:* **Change your password** (the default password is `raspberry`)
5. **Select** 'Finish', then 'Yes' when it asks about rebooting.
6. When the Pi reboots, **login** with the root user (`pi`) and password (`raspberry`, unless you changed it).


#### Optional: Setup WiFi

1. After you're logged in at the command line, we'll start up the GUI in order to configure WiFi. At the command line type `startx` to launch the GUI.
2. Once the GUI is open, click the network icon in the upper right-hand corner, and select your WiFi network. Enter the password at the prompt, and connect.
3. Assuming the WiFi has connected successfully, click 'Menu' on the upper left and select 'Shutdown', then select the 'Logout' or 'Exit to command line', and press 'Ok'.

### 2.2 Install Openframe

```terminal
$ bash -c "$(curl https://openframe.io/install.sh)"
```

In the command line on the Raspberry Pi, execute the install shell script.

The installation takes around 20 minutes (could be longer on a slow connection). Follow the instructions at the end of the installation, you may need to restart the RPi.

### 2.3 Start the frame

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

We recommend [setting a timer](#timer) so the frame goes to sleep at night.





## 3. Displaying artwork

**Quick guide** to send artwork to your frame:

* Head over to the Web-App and [log in using your account](https://openframe.io/login).
* In the web app, go to **You** and click **Add artwork** to add a new piece. Then click the arrow button to push the artwork to your frame.
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
