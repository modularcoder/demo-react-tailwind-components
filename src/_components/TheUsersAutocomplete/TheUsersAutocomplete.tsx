import { useState } from 'react'
import usersService, { UserRes } from '../../_services/usersService'
import { debounce } from '../../_services/utilsService'
import BaseAutocomplete from '../BaseAutocomplete/BaseAutocomplete'

const TheAutocomplete: React.FC = () => {
  const [items, setItems] = useState<UserRes[]>([])

  const handleQueryItems = debounce(async (search: string) => {
    const users = await usersService.get(search)

    console.log('users', users)

    setItems(users)
  })

  return (
    <BaseAutocomplete
      className="w-full"
      items={items}
      onSelect={() => {
        console.log('Item selected ')
      }}
      queryItems={handleQueryItems}
    />
  )
}

export default TheAutocomplete
