# Getting Started

This guide tells you everything you need to know to set up and use a frame quickly. We're going to add more in-depth information on specific topics elsewhere in this documentation over time.

## 1. Create a user account

Go to [openframe.io](https://openframe.io/login) and create a new account.


## 2. Setup a frame

Openframe is designed for the [Raspberry Pi](https://www.raspberrypi.org/) although it might run on other computers.

**Hardware requirements**

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

1. [Log in to the Web-App](https://openframe.io/login) using your account.
2. You can find artwork on the [public stream](#public-artwork-stream) or [your personal artwork collection](#your-artwork-collection).
3. Pick something you like and click the **`arrow button`** to push the artwork to your frame.<br>
<br>
![](https://paper-attachments.dropbox.com/s_47C66C780B27D1D2264AC535F55118B0B8C6F1BE72F9B3AD04CFC94291323268_1573847491114_image.png)
The artwork should show up on the frame a few seconds later.

<span style="font-size: 19px">🙌 That's all. Enjoy your Openframe!</span>

**What's next?** Now you are probably keen to **add your own artwork**. More on this [here](#adding-artwork).

<aside class="info">The web app is responsive and works well as a mobile app. If you'll be using it on your phone, we recommend <a href="http://lifehacker.com/5809338/add-web-site-bookmarks-to-your-iphones-homescreen">adding the website to your homescreen</a></aside>

<aside class="warning">
  <span style="font-weight: bold">Troubleshooting:</span> 
  <ul>
    <li>Some artwork might require you to install an extension on your Openframe, that might not be installed by default. More on <a href="#artwork-formats-and-extensions">extensions</a>.</li>
    <li>Some artwork might be offline. You might not get any feedback if this happens.</li>
    <li>Some artwork might be very large and it can take a while to download to the frame depending on the internet connection.</li>
  </ul>
  
  <span style="font-weight: bold">Please help us <a href="#bugs-contributions-and-feedback">improving Openframe</a></span> to make things easier and run smoother.
    
</aside>