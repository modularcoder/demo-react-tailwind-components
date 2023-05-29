import TheHeader from './_components/TheHeader/TheHeader'
import TheUsersAutocomplete from './_components/TheUsersAutocomplete/TheUsersAutocomplete'

function App() {
  return (
    <main>
      <TheHeader />
      <div className="container mx-auto px-4 py-14">
        <article className="prose w-full">
          <h1>Demo system design components</h1>

          <h2>Autocomplete</h2>

          <div className="mb-10">
            <TheUsersAutocomplete />
          </div>

          <h2>Modal</h2>
        </article>
      </div>
    </main>
  )
}

export default App
