#!/bin/bash
VERSION="1.0.0.4.${BUILD_NUMBER:-99}"
IMAGE=gnschenker/node-sample
ID=$(docker build  -t ${IMAGE}  .  | tail -1 | sed 's/.*Successfully built \(.*\)$/\1/')

docker tag ${ID} ${IMAGE}:${VERSION}
docker tag ${ID} ${IMAGE}:latest
