# Hardware

## Raspberry Pi

Although technically it can run on any computer that runs Node.js, Openframe is designed for the [Raspberry Pi](https://www.raspberrypi.org/). **All versions of Raspberry Pi should work:** Raspberry Pi Zero W, 1, 2, 3 or 4. You will need an internet connection, either via WiFi or ethernet.

At this stage Raspberry Pi 4 is the fastest model and Raspberry Pi Zero W the most affordable.

If you're looking for a Raspberry Pi starter pack, this would work well: [Starter pack](https://www.amazon.com/CanaKit-Raspberry-Complete-Starter-Kit/dp/B01C6Q2GSY)

## Other boards / computers

There are some attempts to run Openframe on a proprietary frames like [Electric Objects](https://openframe.discourse.group/t/make-it-possible-to-run-on-the-eo-electric-objects-hardware/88) or [Memento Smart Frame](https://openframe.discourse.group/t/anyone-here-ever-hack-a-memento-smart-frame/72). Refer to the [Hardware section](https://openframe.discourse.group/c/hardware/9) of the forum for more info, share your own progress or ask questions on that matter.

## Monitors

Most monitors should work. Just make sure it connects to the **HDMI** port of the Pi, not GPIO or SPI. If your monitor doesn't have an HDMI port you can also use an adaptor to DVI / Display Port / VGA / etc..

<aside id="tft-displays" class="warning">TFT HAT displays, e-paper/e-ink displays and alike are reported not to work with Openframe. This is probably due to the displays' drivers. That said — it might be possible to write an extension for Openframe to add support. <br>
<br>
Please let us know if you are able to run Openframe on a display that doesn't connect via HDMI as this has not been tested much.</aside>

If you are choosing a monitor these are things you might want to consider:

- **Size:** This is depending on your use case. Openframe should work on any size, from tiny to extra-large. You could even hook up the Pi to a projector.
- **Resolution:** The higher the resolution, the more crisp your content is going to look like. A large resolution might slow down your Pi, though. A 4k-display hooked up to a Pi Zero might be too slow (we have not tested it though). A good and affordable standard is probably Full HD (1920 x 1080).
- **Panel:** Most common panel technologies are TN, IPS and VA. In general, TN is most affordable but doesn't work as well when looked at from the side. Also contrast and brightness might not be as good as IPS and VA. Refresh rate might also be a concern on older displays, if the content you want to show is rapidly changing. Check out this [display panel technology guide](https://www.techspot.com/article/1788-display-tech-compared/) for more info.
- **Size of the bezel:** most people probably prefer thin bezels. Thin bezels also makes it easier to build a [frame around your monitor](#monitor-frame).
- **Case design:** Buttons at the side or behind the display? Any visible logos? Again, this probably depends on your usecase.
- **Touch:** You might consider a touchscreen to interact with your frame. They usually work like a regular monitors connecting to the HDMI port of the Pi but come with an extra USB cord.
- **Price:** Prices for monitors usually vary depending on size, resolution, panel type and quality. But you can actually get very cheap second hand ones from Ebay, local second hand stores or even rescue one for free from the dump.

A couple of specific models have been [mentioned in the forum](https://openframe.discourse.group/t/directory-list-of-screens-used-with-openframe-io/18).

### Monitor Frames

You might consider framing your monitor to improve the design or make it look more like a classic picture frame. 

![Framed monitor showing artwork from Patricio Gonzalez Vivo and Anders Hoff](https://cdn.instructables.com/FNJ/63AI/ILWLAXET/FNJ63AIILWLAXET.LARGE.jpg?auto=webp&width=1024&height=1024&fit=bounds "Framed monitor showing artwork from Patricio Gonzalez Vivo and Anders Hoff")
There is a building [guide based on a picture frame](https://www.instructables.com/id/A-Frame-for-Openframe/).

Other users have [built one with extra physical buttons](https://twitter.com/patxangas/status/749611553155080192) or had one [built in a professional framing shop](https://openframe.discourse.group/t/just-framed-a-27-monitor/53).

Please share your framing projects in the [Woodwork category of the forum](https://openframe.discourse.group/c/woodwork/10).  

### Strip down

Another option is to strip down the plastic case and reveal the bare-bone display. This has been done for the [Alt-AI / Openframe exhibition](https://www.flickr.com/photos/78897029@N00/albums/72157668428434301/with/26577041814/), for example. 

## GPIO for electronic components

Using the [GPIO of the Raspberry Pi](https://www.raspberrypi.org/documentation/usage/gpio/) you can extend your frame with electronic components like sensors, buttons, motors and more. The sky is your limit. This [GPIO example Openframe extension](https://github.com/OpenframeProject/Openframe-GPIO) might help getting started.