const tg = Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  }
  return (
    <div className="bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-text-color)]">
      <button onClick={onClose}>

      </button>
    </div>
  )
}

export default App
