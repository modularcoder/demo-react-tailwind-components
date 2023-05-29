import React, { useRef, useState } from 'react'

import BaseAutocompleteInput from './BaseAutocompleteInput'
import BaseAutocompleteItem from './BaseAutocompleteItem'
import FocusTrap from 'focus-trap-react'

type Item = {
  id: string
  name: string
  [key: string]: unknown
}

type Props = {
  items: Item[]
  isLoading?: boolean
  className?: string
  maxItems?: number
  queryItems: (search: string) => void
  onSelect: (item: unknown) => void
}

const BaseAutocomplete: React.FC<Props> = ({
  queryItems,
  maxItems = 5,
  items,
  className,
}) => {
  // const refInput = useRef(null)
  const [search, setSearch] = useState('')
  const itemsVisible = items.slice(0, maxItems)

  const hanldeInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
    queryItems(e.target.value)
  }

  return (
    <FocusTrap>
      <div className={`inline-flex relative ${className}`}>
        <BaseAutocompleteInput value={search} onChange={hanldeInputChange} />
        {search && itemsVisible.length > 0 && (
          <div className="absolute top-full shadow-md bg-white rounded-md w-full mt-1">
            {itemsVisible.map((item) => (
              <BaseAutocompleteItem key={item.id} name={item.name} />
            ))}
          </div>
        )}
      </div>
    </FocusTrap>
  )
}

export default BaseAutocomplete
