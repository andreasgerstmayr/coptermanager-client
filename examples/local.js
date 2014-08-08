var coptermanager = require('coptermanager');
var client = coptermanager.createLocalClient({port: '/dev/ttyS0', baudrate: 9600});

client.takeoff();

client
  .after(5000, function() {
    this.clockwise(50);
  })
  .after(1000, function() {
    this.ledOn();
  })
  .after(3000, function() {
    this.flipOn();
  })
  .after(1000, function() {
    this.land();
  })
  .after(0, function() {
    this.disconnect();
  });