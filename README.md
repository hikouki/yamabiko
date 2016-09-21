# yamabiko

It's watching request content.

# How to use

Lieten 3333 port.

```
node index.js
```

# Example

Send http request.

```
curl -H 'Content-Type:application/json' -d '{ "time": "2016-9-10", "location": "3332.22212, 2213.22123" }' http://localhost:3333/\?a\=1\&b\=2
(/'0`)/ Oo-i!
```

console log of yamabiko.

```
→ node index.s
----------------------------------------
Request: POST /?a=1&b=2
----------------------------------------
HEADERS
````````````````````````````````````````
host: localhost:3333
user-agent: curl/7.43.0
accept: */*
content-type: application/jsoncontent-length: 61
----------------------------------------
BODY
````````````````````````````````````````
{ "time": "2016-9-10", "location": "3332.22212, 2213.22123" }
----------------------------------------
```
