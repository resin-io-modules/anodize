const Harvest = require('../../index.js')

const model = {
  quickBoot: Boolean,
  gpuMemory: Number,
  wifi: {
    ssid: String,
    key: String
  },
  phoneNumber: [
    {
      location: String,
      code: Number
    }
  ]
}

console.log(Harvest.expand(model))