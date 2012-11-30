# Demux

Combine a bunch of streams into one.

```javascript
var crdt  = require('crdt');
var demux = require('demux');

var doc1 = new crdt.Doc;
var doc2 = new crdt.Doc;
var doc3 = new crdt.Doc;

demux(doc1.createReadStream(), doc2.createReadStream()).pipe(doc3.createWriteStream());

// Now doc1 and doc2 replicate to doc3, basiclly a master, master, slave scenario
```

## Demux

### demux(stream...)
Create one stream that all the other streams go into.