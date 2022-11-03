import {toAbsoluteUrl} from '../../../helpers'

export function FallbackView() {
  return (
    <div className='splash-screen'>
      <img src={toAbsoluteUrl('/media/logos/logo-1.svg')} alt='Start logo' />
      <span>Vui lòng chờ trong giây lát ...</span>
    </div>
  )
}
