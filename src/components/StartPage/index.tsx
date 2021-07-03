import { checkIfRoomExists } from "../../firebaseTools"
import { ElemType } from "bluejsx"
const { log } = console
export default () => {
  const ref: {
    roomIdInput?: ElemType<'input'>
    roomIdForm?: ElemType<'form'>
  } = {}
  const self = <div>
    <form ref={[ref, 'roomIdForm']}>
      <label for='roomId'>Room ID: </label>
      <input ref={[ref, 'roomIdInput']} type='text' id='roomId' autofocus></input>
      <input type="submit" value="submit"></input>
    </form>
  </div>
  const { roomIdInput, roomIdForm } = ref
  roomIdForm.onsubmit = async (event) => {
    event.preventDefault()
    const roomId = encodeURIComponent(roomIdInput.value)
    if(checkIfRoomExists(roomId)){

    }else{
      //wanna make new room?
    }


  }

  return self
}