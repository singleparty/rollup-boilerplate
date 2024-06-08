export { default as sum } from './sum'
import sum from './sum'

const a = [1, 2, 3]
const b = new Promise((resolve, reject) => {
  console.log(resolve, reject)
})

const c = 12

export function d() {
  console.log(sum(1, 2))
  console.log(...a, 2 ** 3)
}
