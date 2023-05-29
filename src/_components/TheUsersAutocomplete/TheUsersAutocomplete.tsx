import { useState } from 'react'
import usersService from '../../_services/usersService'
import { debounce } from '../../_services/utilsService'
import BaseAutocomplete from '../BaseAutocomplete/BaseAutocomplete'

const TheAutocomplete: React.FC = () => {
  const [items, setItems] = useState([])

  const handleQueryItems = debounce(async (search: string) => {
    const result = await usersService.get(search)

    console.log('result', result)
  })

  return (
    <BaseAutocomplete
      className="w-full"
      items={items}
      queryItems={handleQueryItems}
    />
  )
}

export default TheAutocomplete
