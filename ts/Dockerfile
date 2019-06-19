# NodeProf will be run using Ubuntu Linux 18.04
FROM ubuntu:18.04

# Update the Ubuntu installation and install build tools for NodeProf
RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential git wget python2.7 nodejs npm

# Copy the NodeProf installation script to the container
COPY docker-scripts/install.sh /root

# Install NodeProf and the modified JVM
RUN /root/install.sh

# Any commands run inside this container must have `mx` in the PATH and have
# `JAVA_HOME` point to the modified JVM installation.
ENV PATH="${PATH}:/root/mx" JAVA_HOME="/root/openjdk1.8.0_172-jvmci-0.46"

# If running this container with no specific action specified, analyze the
# given program and run its instructions.
# The entire `ts` directory is mounted inside the container at run-time because
# the TypeScript compilation likely brought in other packages that need to be
# present.
CMD (cd /root/ts; \
     /root/mx/mx -p /root/nodeprof/ jalangi \
       --analysis /root/ts/dist/src/analysis/index.js /root/program.js  \
     | npm run run:instrs)
