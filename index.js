const fetch = require("node-fetch");
const dfd = require("danfojs-node")
getData();
     async function getData() {

          const response = await fetch('https://ftx.com/api/markets')
          const data = await response.json();
          console.table(data.result);
          df = new dfd.DataFrame(data.result);
          df.to_csv("Data.csv")
          df.set_index({key: "name", inplace: true});
          df.print();
     }