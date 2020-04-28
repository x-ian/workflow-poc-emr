module.exports = function(RED) {
  function ScreenMedicationPrescriptionNode(config) {
      RED.nodes.createNode(this,config);
      var node = this;
      node.drugs = config.drugs;
      node.on('input', function(msg) {
          msg.payload = msg.payload; //.toLowerCase();
          node.send(msg);
      });
  }
  RED.nodes.registerType("medication-prescription",ScreenMedicationPrescriptionNode);
}