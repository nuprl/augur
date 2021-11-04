 # NodeProf will be run using Ubuntu Linux 18.04
FROM debian

# Update the Ubuntu installation and install build tools for NodeProf
RUN \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential git wget python2.7 nodejs npm libnotify-bin

# Install mx and add it to the path
RUN (cd /root; git clone https://github.com/graalvm/mx.git)
ENV PATH="${PATH}:/root/mx"

# Install the modified JDK and make it available to NodeProf through $JAVA_HOME
RUN (cd /root; \
     wget --quiet https://github.com/graalvm/openjdk8-jvmci-builder/releases/download/jvmci-0.46/openjdk-8u172-jvmci-0.46-linux-amd64.tar.gz; \
     tar xvf openjdk-8u172-jvmci-0.46-linux-amd64.tar.gz)
ENV JAVA_HOME="/root/openjdk1.8.0_172-jvmci-0.46"

ARG nodeprof_repo=docker/nodeprof-clones/public/nodeprof.js

# Install NodeProf
COPY ${nodeprof_repo} /root/nodeprof
RUN (cd /root/nodeprof && \
     (mx update && mx sforceimports && mx build && mx test-all))
# we run tests here because some dependencies don't download until
# analyses are actually run.

# Display color output in terminal
ENV TERM xterm-256color

# This container can now be used like `mx`.
# ENTRYPOINT ["/root/mx/mx"]
