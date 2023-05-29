import React, { useRef, useState } from 'react'

type Item = {
  id: string
  name: string
  [key: string]: unknown
}

type Props = {
  items: Item[]
  isLoading?: boolean
  className?: string
  queryItems: (search: string) => void
  onSelect: (item: unknown) => void
}

const BaseAutocomplete: React.FC<Props> = ({
  queryItems,
  items,
  className,
}) => {
  const refInput = useRef(null)
  const [search, setSearch] = useState('')
  const itemsVisible = items.slice(0, 10)

  const hanldeInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
    queryItems(e.target.value)
  }

  return (
    <div className={`inline-flex relative ${className}`}>
      <input
        type="text"
        className="form-input rounded w-full"
        value={search}
        ref={refInput}
        placeholder="Type to search..."
        onChange={hanldeInputChange}
      />
      {search && itemsVisible.length > 0 && (
        <div className="absolute top-full shadow-md bg-white rounded-md w-full mt-1">
          {itemsVisible.map((item) => (
            <div
              key={item.id}
              role="button"
              className="px-2 py-2 hover:bg-slate-100"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BaseAutocomplete
