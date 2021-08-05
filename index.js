const fetch = require("node-fetch");
getData();
     async function getData() {

          const response = await fetch('https://ftx.com/api/markets')
          const data = await response.json();
          console.table(data.result);
     }