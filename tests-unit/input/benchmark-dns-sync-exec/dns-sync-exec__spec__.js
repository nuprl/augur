(function (sandbox) {

    if (typeof sandbox.Spec !== 'undefined') {
        return;
    }
    var Spec = sandbox.Spec = {};

    Spec.taintSpec = {
        "source"  : [
            {"name":"dummySource", "direct":true}
        ],
        "sink" : [
            {"name": "exec", "direct": true}
        ]
    };

    Spec.appInfo = {
        name:"dns-sync-exec",
        isNodeJS: true
    };
    Spec.reportFlowLocation = true;
    Spec.debugAbstractMachine = false;
    Spec.reportInBrowser = false;
    Spec.reportAllFlows = true;
})(J$);