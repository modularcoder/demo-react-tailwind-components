type Props = {
  name: string
}

const BaseAutocompleteItem: React.FC<Props> = ({ name }) => {
  return (
    <div role="button" className="px-2 py-2 hover:bg-slate-100" tabIndex={0}>
      {name}
    </div>
  )
}
export default BaseAutocompleteItem
