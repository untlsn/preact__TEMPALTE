import { render } from 'preact'
import { App } from './app'
import '$css';

render(<App />, document.getElementById('app') as HTMLElement)
