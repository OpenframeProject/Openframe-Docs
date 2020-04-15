# Platform

The platform consists of an API, a web app, and software for the RPi that currently supports images, video, web-based artwork, and shaders. Our goal is to create a system that is accessible and extensible, allowing artists to easily add support for new digital formats.

The block diagram below represents a proposed architecture for the Openframe platform. It will continue to evolve as development on the project progresses.

![block diagram of proposed architecture for the Openframe platform](https://raw.githubusercontent.com/OpenframeProject/openframeproject.github.io/master/img/API%20Diagram%20v3.jpg "block diagram of proposed architecture for the Openframe platform")

The Openframe controller is the software that runs on the frame itself (i.e. the RPi), acting as a process manager for starting, stopping, and transitioning between artworks. It communicates with an [Openframe API Server](https://github.com/OpenframeProject/Openframe-APIServer) server via a REST API, and connects to a [global event system](https://github.com/OpenframeProject/Openframe-PubSubServer) allowing for realtime updates. The idea is to work towards a system which supports the basic goals of Openframe, guided by a handful of [pilot use cases](https://github.com/OpenframeProject/Openframe-APIServer/wiki/Pilot-Use-Cases).