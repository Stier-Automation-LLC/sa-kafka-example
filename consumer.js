//**************************************************
// Example consumer for Kafka in Javascript
// to run => node consumer.js
// **************************************************
// 11/1/2022 S. Stier Stier Automation LLC
// **************************************************
// requires the kafkajs library
// create a new constant variable Kafka which will point to the Kafka object in the kafkajs library

const { Kafka, Partitioners} = require('kafkajs')
// run the function
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
    // create a consumer
    const consumer = kafka.consumer({"groupId" : "testGroup" });
    console.log("Consumer Connecting....")
    await consumer.connect()
    console.log("Consumer Connected!")
    // subscribe to the Users Topic and read from the beginning
    await consumer.subscribe({
      "topic": "Users",
      "fromBeginning": true
    })
    // this will run the embeded function for each message recieved. 
    await consumer.run({
      "eachMessage": async result => {
        console.log (`Recived msg ${result.message.value} on partition ${result.partition}`);
      }
    })
  } catch (ex) {
    console.error(`Something went wrong: ${ex}`)
  }
  

}