# Development Environment

If you're planning to hack on Openframe, you'll want to set up a dev environment which makes it easy to update code and see the results right away. Openframe uses familiar tools like GitHub, Node, and NPM, and we'll use some of the standard development practices of these tools to get setup.

This guide is for people developing on the Raspberry Pi. Here we'll describe setting up an environment suitable for working on the [Openframe frame controller](https://github.com/OpenframeProject/Openframe) and modifying or developing new extensions. This setup will still use the public Openframe server, so you can use your account at [openframe.io](http://openframe.io) to add and push artwork to your modified frame.

## TL;DR

1. Create an Openframe-ready SD Card following the [Getting started guide](#2-0-prepare-sd-card). [Enable SSH](https://www.raspberrypi.org/documentation/configuration/raspi-config.md) and, optionally, [setup Samba](http://openframeworks.cc/setup/raspberrypi/raspberry-pi-smb/).
2. Fork the [Openframe repo](https://github.com/OpenframeProject/Openframe), and any extension repos you plan to work on / mess around with.
3. On the Pi, clone each forked repo, and `npm install` their dependencies.
4. In each of the extension repos, use `npm link` to create a global symbolic link for this npm package
5. In the Openframe repo, use `npm link [extension-a-package-name] [extension-b-package-name]`, passing each linked extension package name.
6. In the Openframe repo, run `npm start`. Now Openframe is running from the source code, using the source code of the extensions.
7. Get to work. You can SSH into the Pi and edit files directly there, or use Samba to mount the files on your computer and work on them with your favorite editor.

## The Long Version

### Create an Openframe SD Card

In order to make sure the Pi has all of the necessary dependencies installed, the simplest thing to do is to set up an SD Card following the [Getting started guide](#2-0-prepare-sd-card). Make sure you've got an Openframe account and that you can log in and push artwork to your frame. You probably don't want to enable 'autoboot to Openframe', since you'll be launching Openframe yourself.

It's helpful to [enable SSH](https://www.raspberrypi.org/documentation/configuration/raspi-config.md) on the Pi so that you can edit files remotely. If you're comfortable setting up and using vim (or whatever editor) on the Pi and doing your development work there, that's fine. If you'd prefer to use your usual editor, you can use Samba to mount the Pi's file system on your computer and edit the files directly.

There's [a good tutorial on setting up Samba](http://openframeworks.cc/setup/raspberrypi/raspberry-pi-smb/) on the openFrameworks site.

### Fork the Openframe Repo

You'll want to fork the [Openframe repo](https://github.com/OpenframeProject/Openframe) to your own GitHub account. This way you'll be able to keep track of your work and contribute bug fixes or enhancements 😄.

[More info on forks and the GitHub collaborative workflow](https://help.github.com/categories/collaborating-on-projects-using-issues-and-pull-requests/) is available on the GitHub site.

### Clone and Install the Repos to the Pi

> On the Pi, clone your forks of the repos you want to work on, and install their deps:

```terminal
$ git clone git@github.com:mygithubusername/Openframe.git
$ git clone git@github.com:mygithubusername/Openframe-Image.git
$ git clone git@github.com:mygithubusername/Openframe-MyNewExtension.git
$ cd ~/Openframe && npm install
$ cd ~/Openframe-Image && npm install
$ cd ~/Openframe-MyNewExtension && npm install
```

> As a quick test, after all deps have installed, run Openframe from source:

```terminal
$ cd ~/Openframe
$ npm start
```

Log into the Pi terminal, via SSH or directly, and `git clone` your repos. You'll clone your forked Openframe repo, and whatever extension repos you're working on. These might be forks of existing extensions, or a repo for a new extension.

Once you've got the source code for each project on the Pi, `npm install` in each repo directory to install all of the dependencies. Some extensions take quite a while to install!

As a quick test, you can run the Openframe from the source code and make sure it works. Just go to the Openframe project dir and type `npm start`. If you've already logged in when you initially installed `openframe`, the frame should start using the same credentials. It may ask if you want to autoboot, which you should decline.

### NPM Link the Extensions

> E.g., assuming you're working on the Openframe-Image extension, and you've cloned all of the repos into the pi user's home folder:

```terminal
$ cd ~/Openframe-Image
$ npm link
$ cd ~/Openframe-MyNewExtension
$ npm link
$ cd ~/Openframe
$ npm link openframe-image openframe-mynewextension
$ openframe -i openframe-image 
$ openframe -i openframe-mynewextension
```

Extensions are just Node packages, following standard NPM package practices. They are specified by their NPM package name, as defined in the `package.json` file. The package name must be all lowercase, and as a convention should follow the pattern 'openframe-[extension-name]'. For example, the Openframe-glslViewer extension has a [package name of 'openframe-glslviewer'](https://github.com/OpenframeProject/Openframe-glslViewer/blob/master/package.json#L2).

If you are indeed working on extensions, you need to make sure that the local version of Openframe you're running is pulling in the local versions of the extensions. As this is a common need when developing inter-dependent projects, NPM provides a handy way of managing this. You'll use [NPM's link command](https://docs.npmjs.com/cli/link) to create a global symlink for the dependencies, then use it again to tell the dependent project to use the symlinked version.

In each of the extension project directories, run `npm link`. This will create the global symlink.

Then in the Openframe project directory, run `npm link [extension-name] [another-extension-name]`, passing each package name (from `package.json`) for the extension repos you'll be working on.


### Get to Work

That's it! Now the Openframe project will point to the linked extensions, so changes to the extension's files will take effect immediately within the Openframe project. Great!

Whenever you make changes to files, you'll need to restart Openframe on the Pi by running `npm start` in the Openframe project directory.

### Debugging

Openframe uses (and encourages you to use!) the [debug](https://www.npmjs.com/package/debug) package. You can see the debug output by specifying the `DEBUG` env var when starting Openframe. E.g. to see __all__ debug output:

```terminal
$ DEBUG=* npm start
```

## Creating an extension

<aside class="info">This section needs more documentation. Please help <a href="https://github.com/OpenframeProject/Openframe-Docs#how-to-contribute">improving these docs</a>.</aside>

Extensions are node modules which export an instance of the [Extension](https://github.com/OpenframeProject/Openframe-Extension) class. The [README of the Extension repo](https://github.com/OpenframeProject/Openframe-Extension#openframe-extension) gives a bit of information about how Extensions work, and how to create them.

If you're interested, take a look at the source for default extensions ([openframe-image](https://github.com/OpenframeProject/Openframe-Image), [openframe-website](https://github.com/OpenframeProject/Openframe-Website), [openframe-glslviewer](https://github.com/OpenframeProject/Openframe-glslViewer), and [openframe-video](https://github.com/OpenframeProject/Openframe-Video)) to get a sense of how they work in practice.

Keep in mind that Openframe is still in an early alpha state, and the way extensions are created and loaded will continue to evolve and improve!