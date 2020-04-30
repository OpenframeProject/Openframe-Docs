# Display Controller

The [display or frame controller](https://github.com/OpenframeProject/Openframe) is the software that runs on the frame itself (i.e. the RPi), acting as a process manager for starting, stopping, and transitioning between artworks. You can remote control it via the [Web-App](https://openframe.io/stream). Both communicate via an API Server (more on this in the [Platform section](#platform)).

The following are topics interesting to everyone running a frame.

## Extensions

Openframe provides a baseline functionality that can be augmented with extensions. An extension may be created to support a new artwork format, to add interactivity to the frame, etc.

**Installing / removing an extension**

> E.G, to add the openFrameworks extension:

```terminal
$ openframe -i openframe-of
```

> To remove the openFrameworks extension:

```terminal
$ openframe -u openframe-of
```

At present, extensions must be installed and removed on the Raspberry Pi directly, via the command line.

<aside class="info">
  More on <a href="#artwork-formats-and-extensions">Extensions and artwork formats</a>.<br>
  <br>
  You may <a style="font-weight: bold" href="#creating-an-extension">create new extensions</a> to support new artwork formats, to add interactivity to the frame, etc.
</aside>


## Artwork formats and extensions

By default, Openframe supports four types of artwork formats:

* Images (PNG, JPG, JPEG)
* Videos (mp4)
* Websites (including WebGL)
* Shaders

At the moment each artwork format is coupled to a specific extension ([this might change](https://github.com/OpenframeProject/Openframe/issues/68)). 

The following list should help you finding the right extension for the media type you would like to use. 

<aside class="info">
  Read more on how to <a style="font-weight: bold;" href="#extensions">installing and removing extensions</a>.<br>
  <br>
  In addition to the following list, you can <a href="https://npmsearch.com/?q=openframe-extension">search for existing extensions on NPM</a> or <a href="#creating-an-extension">create an extension</a> to support a new format.
</aside>


**Images**

- [`openframe-image`](https://www.npmjs.com/package/openframe-image) (installed by default) based on glsl-viewer
    - JPG and PNG support only
    - might not work with larger images
- [`openframe-vlc`](https://www.npmjs.com/package/openframe-vlc) based on VLC player
    - [supports lots of image formats](https://wiki.videolan.org/Image/)
    - might have issues with aspect ratio especially if screen is turned into portrait mode
- [`openframe-website`](https://www.npmjs.com/package/openframe-website)` (installed by default) based on Chromium
    - supports several image formats. Even animated GIFs, yay!
    - the image needs to be wrapped into HTML website for proper positioning and scaling 
    - starting the browser takes a while

**Video/Audio**

- [`openframe-video`](https://www.npmjs.com/package/openframe-video) (installed by default) based on omxplayer
    - supports H264 and probably a few other formats
- [`openframe-vlc`](https://www.npmjs.com/package/openframe-vlc) based on VLC player 
    - [plays lots of different formats](https://wiki.videolan.org/VLC_Features_Formats/)
    - starts videos without downloading
    - might have issues with aspect ratio especially if screen is turned into portrait mode

**Websites**

- [`openframe-website`](https://www.npmjs.com/package/openframe-website) (installed by default) based on Chromium
    - supports everything you would expect from a modern browser (including WEBGL)
    - takes a while to start the browser

**Shader**

- [`openframe-glslviewer`](http://npmjs.com/package/openframe-glslviewer) (installed by default) based on glsl-viewer
    - supports GLSL shader
    - you can use [editor.thebookofshaders.com](http://editor.thebookofshaders.com/) to edit and host a shader. The direct upload to Openframe from their website (**`Export`** -> **`[o]`** in the top menu) is currently broken though. Download and host yourself instead.

**Processing**

- [`openframe-processing`](https://www.npmjs.com/package/openframe-processing) based on processing-java
    - adds support for Processing .pde files and .zip files including libraries
- `openframe-processing-javascript` not on NPM yet. Follow the [install instructions on Github](https://github.com/jvolker/Openframe-Processing-JavaScript#instructions). 
    - supports sketches hosted on [Openframe.org](http://www.openframe.org) based on p5.js or processing.js

**Openframeworks**

- [`openframe-of`](https://www.npmjs.com/package/openframe-of)`
    - adds support for openFrameworks executables
    
**Maps**

- [`openframe-tangram`](https://www.npmjs.com/package/openframe-tangram) [](https://www.npmjs.com/package/openframe-tangram)
    - adds support for maps via tangram-es


## Slideshow

There is a [slideshow extensions](https://github.com/jmwohl/Openframe-Slideshow) available which loops through [your artwork collection](#your-artwork-collection). In theory it can loop through other collections of artworks too, but at this stage the only collection available is your personal one.

[Install it like any other extension](#extensions) on the display controller:  

```terminal
$ openframe -i openframe-slideshow
```

The interval between two artworks is hardcoded at this stage. You have to change it [in the code](https://github.com/jmwohl/Openframe-Slideshow/blob/dac94fd8173ede13a3e6c7e4c3f63deed2c4d69e/extension.js#L10) on your device.

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