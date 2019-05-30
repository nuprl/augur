This folder contains Docker-related files. It contains scripts to be run *inside* the Docker container, along with housing cloned NodeProf repos.

Its directory structure is roughly:

```
docker/            # For everything Docker-related
  nodeprof-clones/ # For NodeProf clones, not under source-control
    public/        # Public version, created after running docker-build.sh
      nodeprof.js/ # Actual clone
    private/       # Private version, created after running docker-build.sh
      nodeprof.js/ # Actual clone
  # Scripts
  install.sh
  run-callbacks.sh
  ...
```
