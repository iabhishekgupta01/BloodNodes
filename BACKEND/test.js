const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.cluster0.amycde4.mongodb.net",
  (err, records) => {
    console.log("ERR:", err);
    console.log("RECORDS:", records);
  }
);