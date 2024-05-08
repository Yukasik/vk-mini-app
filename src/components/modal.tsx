import { PopoutWrapper } from '@vkontakte/vkui';
import KittyModal from '../img/kitty-modal.png'


const Modal = ({onClose}: any) => {
  return (
    <div>
        <PopoutWrapper onClick={onClose}>
          <div className='modal'>
            <h4>Не надо на меня тыкать, отвечай на вопрос</h4>
            <img src={KittyModal} alt="Злая киса" />
          </div>
	      </PopoutWrapper>
    </div>
  )
}

export default Modal