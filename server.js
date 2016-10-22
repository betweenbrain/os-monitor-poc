/**
 * Created by mthomas on 10/21/16.
 */

var monitor = require("os-monitor");

// basic usage
monitor.start({
    delay: 300000,
    immediate: true
});

monitor.on('monitor', function (data) {
    console.log(
        'freemem: ' + (data.freemem / data.totalmem) + "\n" +
        'usedmem: ' + ((data.totalmem - data.freemem) / data.totalmem) + "\n" +
        '1  min load avg: ' + data.loadavg[0] + "\n" +
        '5  min load avg: ' + data.loadavg[1] + "\n" +
        '15 min load avg: ' + data.loadavg[2] + "\n"
    )
});