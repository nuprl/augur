# This script should only be run *inside* the Docker container. If you try to
# execute it on your host machine, it might produce lots of errors and garbage.

cd /root
git clone https://github.com/graalvm/mx.git
export PATH=$PATH:/root/mx
wget https://github.com/graalvm/openjdk8-jvmci-builder/releases/download/jvmci-0.46/openjdk-8u172-jvmci-0.46-linux-amd64.tar.gz
tar xvf openjdk-8u172-jvmci-0.46-linux-amd64.tar.gz
export JAVA_HOME=/root/openjdk1.8.0_172-jvmci-0.46
mkdir workspace-nodeprof
(cd workspace-nodeprof \
     && git clone https://github.com/Haiyang-Sun/nodeprof.js.git \
     && (cd nodeprof.js && mx sforceimports && mx build))
