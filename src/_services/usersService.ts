export type UserRes = {
  id: string
  name: string
  [key: string]: unknown
}

let data: UserRes[] = []

;(async () => {
  const request = await fetch(
    'https://randomuser.me/api/?results=1000&&orderby=!registered?nat=us,gb?seed=helloworld'
  )

  const result = await request.json()

  data = result.results
    .filter((item: any) => {
      return Boolean(item.id.value)
    })
    .map((item: any) => ({
      ...item,
      id: `${new Date().toTimeString()}-${Math.random()}`,
      name: `${item.name.first} ${item.name.last}`,
    })) as UserRes[]
})()

export default class usersService {
  static get: (search: string) => Promise<UserRes[]> = async (search) => {
    const dataResult = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataResult)
      }, 300)
    })
  }
}
