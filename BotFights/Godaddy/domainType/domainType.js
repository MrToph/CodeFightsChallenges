function domainType (domains) {
  domains = domains.map(x => x.substr(x.lastIndexOf('.') + 1));
  var tlds = ['org', 'com', 'net', 'info'];
  var names = ['organization', 'commercial', 'network', 'information'];
  domains = domains.map(x => names[tlds.indexOf(x)]);
  console.log(domains);
  return domains;
}
