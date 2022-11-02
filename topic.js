// **************************************************
// Example create Topics for Kafka broker
// to run => node topic.js
// **************************************************
// 11/1/2022 S. Stier Stier Automation LLC
// **************************************************
//const Kafka = require("kafkajs").Kafka
// create a new constant variable Kafka which will point to the Kafka object in the kafkajs library

const {Kafka} = require("kafkajs")
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
    // need the admin interface to create the topics
    const admin = kafka.admin();
    console.log("Connecting....")
    await admin.connect()
    console.log("Connected!")
    //A-M, N-Z are the user particians
    // Actually create the topics on the Kafka Broker
    await admin.createTopics({
      "topics": [{
        "topic": "Users",
        "numPartitions": 2
      }]
    })
    console.log("Created Sucessfully!")
    await admin.disconnect();
  } catch (ex) {
    console.error(`Something went wrong: ${ex}`)
  }
  finally {
    //exit the application
    process.exit(0);

  }

}