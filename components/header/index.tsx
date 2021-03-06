import Logo from '@components/logo/index'
import { container, title } from './styles'

const Header = () => (
  <header css={container}>
    <Logo />
    <h1 css={title}>devlog</h1>
  </header>
)

export default Header
