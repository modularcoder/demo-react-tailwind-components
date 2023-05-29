type Props = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

//       ref={refInput}

const BaseAutocompleteItem: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="form-input rounded w-full"
      value={value}
      placeholder="Type to search..."
      onChange={onChange}
    />
  )
}
export default BaseAutocompleteItem
