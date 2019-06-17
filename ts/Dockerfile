# NodeProf will be run using Ubuntu Linux 18.04
FROM ubuntu:18.04

ARG nodeprof_repo=docker/nodeprof-clones/public/nodeprof.js

# Update the Ubuntu installation and install build tools for NodeProf
RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential git wget python2.7 nodejs npm

# Install mx and add it to the path
RUN (cd /root; git clone https://github.com/graalvm/mx.git)
ENV PATH="${PATH}:/root/mx"

# Install the modified JDK and make it available to NodeProf through $JAVA_HOME
RUN (cd /root; \
     wget --quiet https://github.com/graalvm/openjdk8-jvmci-builder/releases/download/jvmci-0.46/openjdk-8u172-jvmci-0.46-linux-amd64.tar.gz; \
     tar xvf openjdk-8u172-jvmci-0.46-linux-amd64.tar.gz)
ENV JAVA_HOME="/root/openjdk1.8.0_172-jvmci-0.46"

# Install NodeProf
# TODO: maybe this wildcard is an issue; does it actually encapsulate every
# file? if it's expanded blindly by the shell, probably not.
COPY ${nodeprof_repo} /root/nodeprof
RUN (cd /root/nodeprof && \
     (mx sforceimports && mx build))

# If running this container with no specific action specified, analyze the
# given program and run its instructions.
# The entire `ts` directory is mounted inside the container at run-time because
# the TypeScript compilation likely brought in other packages that need to be
# present.
CMD (cd /root/ts; \
     /root/mx/mx -p /root/nodeprof/ jalangi \
       --analysis /root/ts/dist/src/analysis/index.js /root/program.js  \
     | npm run run:instrs)
