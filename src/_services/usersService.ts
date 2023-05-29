export default class usersService {
  static BLUETOOTH_SYNC_API = 'https://randomuser.me/api/?results=1000'

  static get = async (search: string) => {
    const result = await fetch(
      'https://randomuser.me/api/?results=10&&orderby=!registered'
    )
    const data: { results: unknown[] } = await result.json()

    return data.results
  }
}
