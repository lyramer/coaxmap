## Table of Contents

- [Overview](#overview)
- [Build Notes](#build-notes)
- [Updating With New Map Data](#updating-with-new-map-data)
- [To Do](#to-do)

## Overview

This project was initially developed Merrick Paquin-Mannington. This current version was built and is maintained by [Andy Wynden](https://www.andywynden.com). The heavy data lifter is Derek Jacoby, who takes the Sentinel-3 data and munches it through a pipeline to produce the imagery rendered in this application.

We used [React-Leaflet](https://react-leaflet.js.org/) as the backbone of this project. Many thanks to the lovely folks at [OSM](https://www.openstreetmap.org) without which our project and Leaflet would not be possible. [ReactStrap](https://reactstrap.github.io/) made it pretty.

## Build Notes

Because the data we get from the nightly processing of images from Compute Canada is in a seperate folder, I've created a script which re-creates the symlink to this folder inside the build folder. This means that **during deployment on the server, use npm run server-build**. On your local machine, running npm run build is just fine as you'll need to import a handful of overlays so that map data shows up properly

## Updating With New Map Data

There is a file - curDates.txt, of which an old version exists in the public/OLCI folder for development purposes. The one that gets updated regularly is the OLCI folder which is in the mnt folder on the server. curDates.txt contains a newline separated list of all the dates for which we have imagery, and which is fetched and parsed on component load so that the available dates will be selectable in the date dropdown.

## To Do

-Pinging the server to check if the image exists so we don't have a big fat nothing to display (with no error) if for some reason the imagery isn't found.

-Make ModSquad png smaller. Jeez.

-

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Please go see their documentation if you have any questions regarding this.
