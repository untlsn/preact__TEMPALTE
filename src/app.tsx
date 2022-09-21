import preactLogo from './assets/images/preact.svg'
import LazyChildren from './components/containers/LazyChildren';

const count = signal(0);

export function App() {
  return (
    <main className="min-h-screen bg-[#242424] text-white flex-(col center) gap-4 text-center">
      <div className="flex gap-10">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="size-40 hover:blur-2" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="size-40 hover:blur-2" alt="Preact logo" />
        </a>
      </div>
      <h1 className="text-3xl">Vite + Preact</h1>
      <button type="button" className="border-(1 white) rounded-lg p-(y1 x2) bg-white/10" onClick={() => {
        count.value++
      }}>
        <span>count is </span>
        <LazyChildren>
          {count.value}
        </LazyChildren>
      </button>
      <div>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
      </div>
    </main>
  )
}
