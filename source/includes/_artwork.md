# Artwork

##  Public Artwork stream

The [Stream](https://openframe.io/stream) contains all artwork that users have made **public**. You can **like** artwork from the Stream to save it. Click the like button again to remove it.

## Your Artwork collection

Your artwork collection contains artwork that you've **added**, or you've **liked** from the Stream. You can find it clicking on the **`YOU`** button next to the **`BROWSE`** in the [stream](https://openframe.io/stream).

It's located at this URL: `www.openframe.io/{username}`

## Adding artwork

You can add artwork through the [Openframe web-app](https://openframe.io/stream). 

<aside class="info">
In addition, there is a <a href="https://openframe.discourse.group/t/webclipper/61">Web Clipper extension for Chrome in the making</a>, which is going to make the uploading process a lot easier, in most cases. In the meantime, this guide is hopefully going to be helpful to you.
</aside>

1. [Create a new account](https://openframe.io/login), if you haven't done already.
2. Then click on **`You`** to navigate to your personal artwork stream (which includes all artwork you have uploaded) and click **`Add artwork`** to add a new piece.
![](https://paper-attachments.dropbox.com/s_47C66C780B27D1D2264AC535F55118B0B8C6F1BE72F9B3AD04CFC94291323268_1573847631491_image.png)
3. Your artwork must have a title.
4. Choose the right artwork format (e.g. `openframe-image`). More on this further below in the [Artwork formats](#artwork-formats) section.
5. Enter the URL to your artwork into the field `URL where the artwork is hosted`. You have to [host the artwork](#hosting-artwork) yourself.
6. Optionally enter a URL to a preview image of the sketch which is useful to quickly identify the artwork in the web-app. This is even more important if you like to publish your beautiful artwork.

<aside class="info">
  Artwork added to Openframe <span style="font-weight: bold">requires</span> the following: 
  <ul>
    <li>author</li> 
    <li>title
    <li>format
    <li>URL where the artwork is hosted
    <li><span style="font-style: italic;">optional:</span> URL for a preview image (suggested width = 500px).
  </ul> 
  When adding new artwork, you can set it to be <span style="font-weight: bold">private (default) or public</span>. Private artworks are only visible to you, while public artworks will appear in the Stream for others to like ♥ and display.
</aside>


<aside class="warning">By <span style="font-weight: bold">making an artwork public</span>, you are claiming to be the author (or copyright holder) of the work — please do not publish works that are not your own. <br><br> More on this in the <a href="#rights">rights section</a>.</aside>

## Artwort formats and extensions

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

**Maps**

- [`openframe-tangram`](https://www.npmjs.com/package/openframe-tangram) [](https://www.npmjs.com/package/openframe-tangram)
    - adds support for maps via tangram-es

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


## Hosting artwork

<aside class="info">
  Currently, you have to upload your artwork to a publicly reachable webspace. 
</aside>

**If you don't have a webspace/server?** 

You could, as one out of many options, try Dropbox. Once it's uploaded to Dropbox, use the `Copy Dropbox Link`. You will end up with a URL like this `https://www.dropbox.com/s/vb17ehsdfqp2bjd/290317.jpg?dl=0`. Change the 0 at the end to 1 like this `https://www.dropbox.com/s/vb17ehsdfqp2bjd/290317.jpg?dl=1`, and you will be able to use the URL for Openframe.

## Rights


<aside class="info">
<span style="font-weight: bold">Openframe does not store any artwork.</span> Frames fetch artwork directly form the provided URL each time it's required to display it. Make sure you have the rights to the artwork you add and display using Openframe.
</aside>

The artwork will be available as long as the content in the URL is available.

<aside class="info">
At this stage, there is no way to attach a <span style="font-weight: bold">license / copyright</span> to your artwork. We are aware that this is not ideal. If you have ideas on how to approach this topic, please let us know <a href="https://openframe.discourse.group/c/artwork/11">in the forum</a>.
</aside>

<aside class="warning">By <span style="font-weight: bold">making an artwork public</span>, you are claiming to be the author (or copyright holder) of the work — please do not publish works that are not your own.</aside>
