import { useHello } from 'utils/effect'

export interface IUser {
  name: string
}

useHello()
console.log('hello world!')
