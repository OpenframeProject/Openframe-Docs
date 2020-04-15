---
title: Openframe Documentation

toc_footers:
  - <a href='https://api.openframe.io/explorer'>REST API Docs</a>
  - <a href='https://github.com/OpenframeProject'>Openframe on Github</a>

includes:
    - getting-started
    - display-controller
    - hardware
    - platform
    - dev-env-setup
    - js-client.md.erb

search: true
---

# Introduction

<aside id="header-notice" class="notice sticky">This project is in an early state, and is under active development — we cannot promise everything will work 100%. <a href="#bugs-contributions-and-feedback">Feedback and contributions</a> are welcome. Please help <a href="https://github.com/OpenframeProject/Openframe-Docs#how-to-contribute">improving these docs</a>!
</aside>

## What is Openframe?

Openframe is an open source platform for artists, curators and art enthusiasts to share, discover and display digital art.

Openframe is free. Anyone can set up a frame using an HDMI display and a Raspberry Pi.

Openframe is a collaborative, on-going project. The platform consists of an API, a web app, and software for the RPi that currently supports images, video, web-based artwork, and shaders (more on this in the [Platform section](#platform)). Our goal is to create a system that is accessible and extensible, allowing artists to easily add support for new digital formats.

Go to [openframe.io](http://www.openframe.io) for more info.

## Bugs, contributions and feedback

Feedback and contributions are welcome!

Please post questions to the <a href='https://openframe.discourse.group/'>Openframe Forum</a> so that others may benefit! Specific software bugs can be submitted as Github issues in the appropriate repo (E.g. <a href="https://github.com/OpenframeProject/Openframe/issues">Raspberry Pi</a>, <a href="https://github.com/OpenframeProject/Openframe-WebApp/issues">Web App</a>, <a href="https://github.com/OpenframeProject/">etc.</a>).

Please help <a href="https://github.com/OpenframeProject/Openframe-Docs#how-to-contribute">improving these docs</a>!

## Documentation Topics

- **[Getting Started Guide](#getting-started)**  
  A step-by-step guide to installing and setting up a Raspberry Pi-based frame.
- **[Display Controller](#display-controller)**  
  Specific topics on using a frame.
- **[Hardware](#hardware)**  
  Detailed infos on computer hardware, monitors and monitor encasings / frames.
- **[Platform](#platform)**  
  An overview of all software components of the Openframe Platform.
- **[Development Environment Setup](#development-environment)**  
  A general overview of how to setup an enviroment for Extension development or core contribution.
- **[API Docs](https://api.openframe.io/explorer)**  
  Swagger-generated API docs.
- **[JS Client](#javascript-client)**  
  A JavaScript API client library for interacting with the Openframe REST API.