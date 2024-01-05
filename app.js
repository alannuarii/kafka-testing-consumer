const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    brokers: ["192.168.88.251:9092"]
})

const consumer = kafka.consumer({
    groupId: "consumen-tester"
})

const runConsumer = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: "tester"
    })

    await consumer.run({
        eachMessage: async (record) => {
            const message = record.message // Perubahan pada baris ini
            console.log(message.value.toString())
        }
    })
}

runConsumer().catch(console.error)
