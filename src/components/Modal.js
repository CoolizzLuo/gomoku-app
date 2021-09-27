import styled from 'styled-components'
import './Modal.css'

const ModalWrapper = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  overflow: auto;
  display: none;
`

const Modal = () => {
  return (
    <ModalWrapper>
      <div class="modal">
        <div class="modal-content ">
          <div class="modal__header">
            <h4>比賽結束</h4>
            <button class="close-btn" onclick="closeModal();">×</button>
          </div>
          <div class="modal__content">
            白棋獲勝
          </div>
          <div class="modal__footer">
            <button>OK</button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}



export default Modal