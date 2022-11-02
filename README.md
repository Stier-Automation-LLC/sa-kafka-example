# sa-kafka-example
Provides examples of how to spin up Kafka and Zookeeper containers and sample code in Node.js to create topics, implement a Kafka data producer to send data to the Kafka broker and to create consumers to subscribe to the Kafka topics.

## Contact
|||
|---|---|
| Developer |  [www.stier-automation.com](www.stier-automation.com) - [stiersl@stier-automation.com](stiersl@stier-automation.com) |

Project Link: [https://github.com/Stier-Automation-LLC/kafka-example.git](https://github.com/Stier-Automation-LLC/sa-kafka-example.git)

## Prerequisite

### Spin up the docker containers
- Make sure docker is installed (i used Desktop for Windows-4.13.1 )
- Spin up the zookeeper and kafka docker containers using docker-compose from root directory

  `docker-compose up -d`

    Notes: 
      ZooKeeper exposed port 22181
      Kafka Service exposed on Port 29092

### Code developed Node.js and uses kafkajs library

    `npm install kafkajs`

    `npm install`

### Code examples
### example create "Users" topic
  `node topic.js`

### example create producer & send data to User topic
  `node producer.js Bill`

### example create consumer to subscribe to user topic
  `node consumer.js`
