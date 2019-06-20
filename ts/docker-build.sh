#!/usr/bin/env sh

# Used to build/rebuild the Docker container.
# Usage: ./docker-build.sh [--private]

# Ensure `docker/nodeprof-clones` exists.
mkdir -p docker/nodeprof-clones

# Clone relevant NodeProf repo. Also sets four local variables:
# - GIT_REPO: the URL of the git repository of NodeProf to clone.
# - REPO_NAME: the name of the git repository to clone.
# - LOCAL_LOCATION: the path on disk to clone NodeProf into, a directory called
#                   `public` or `private`.
# - DOCKER_IMAGE_NAME: the name that should be given to the Docker image once
#                      it's built. Either `jsanalysis` or `jsanalysis-private`.
if [[ $1 = "--private" ]]
then
    # Build a Docker image with the private version of NodeProf.
    GIT_REPO=https://github.com/Haiyang-Sun/nodeprof.git
    REPO_NAME=nodeprof
    LOCAL_LOCATION=docker/nodeprof-clones/private
    DOCKER_IMAGE_NAME=jsanalysis-private
else
    # Build a Docker image with the public version of NodeProf.
    GIT_REPO=https://github.com/Haiyang-Sun/nodeprof.js.git
    REPO_NAME=nodeprof.js
    LOCAL_LOCATION=docker/nodeprof-clones/public
    DOCKER_IMAGE_NAME=jsanalysis
fi

# Actually clone NodeProf.
mkdir -p $LOCAL_LOCATION

# Clone/pull from the repository as necessary.
if [ ! -d $LOCAL_LOCATION/$REPO_NAME/.git ]
then
    (cd $LOCAL_LOCATION; git clone $GIT_REPO)
else
    (cd $LOCAL_LOCATION/$REPO_NAME; git pull)
fi

# Build the image.
docker build -t $DOCKER_IMAGE_NAME \
       --build-arg nodeprof_repo=$LOCAL_LOCATION/$REPO_NAME \
       .
