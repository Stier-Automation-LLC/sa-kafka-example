// **************************************************
// Example Producer for Kafka in Javascript
// // to run => node producer.js <name of user>
// **************************************************
// 11/1/2022 S. Stier Stier Automation LLC
// **************************************************
// create a new constant variable Kafka which will point to the Kafka object in the kafkajs library

const { Kafka, Partitioners } = require('kafkajs')
// run the function
//get the first argument after running the js
const msg = process.argv[2];
run();
// create a function - it needs to be async cause its got a promise
async function run() {
  try
  {
    // instantiate the KafkaJS client by pointing it to the kafka broker
    const kafka = new Kafka({
      "clientId": "myapp",
      "brokers":["localhost:29092"]
    })
    // create a producer
    const producer = kafka.producer({createPartitioner: Partitioners.DefaultPartitioner });
    console.log("Producer Connecting....")
    //Actually connect to the Kafka Broker to create the producter
    await producer.connect()
    console.log("Producer Connected!")
    // first determine which partition you should put the user name in.
    // use ternary operator here, if first letter less than N then put 0 else put in 1 partition
    const partition = msg[0] < "N" ? 0 : 1;
    console.log(`Partition=${partition}`)
    // using the producer send the a new message to the Kafka server
    const result = await producer.send({
      "topic": "Users",
      "messages": [
        {
          "value": msg,
          "partitian": partition
        }
      ]
    })

    console.log(`Send Sucessfully user= ${msg} result= ${JSON.stringify(result)}`)
    // best to disconnect he producer here
    await producer.disconnect();
  } catch (ex) {
    console.error(`Something went wrong: ${ex}`)
  }
  finally {
    //exit the application
    process.exit(0);

  }

}
