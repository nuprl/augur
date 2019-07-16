
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
        name:"office-converter",
        isNodeJS: true
    };
    Spec.reportFlowLocation = true;
    Spec.debugAbstractMachine = false;
    Spec.reportInBrowser = false;
    Spec.reportAllFlows = true;
    Spec.includeCommentsInGeneratedInstr = false;
})(J$);
