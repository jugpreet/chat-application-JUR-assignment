import {  Button, Input } from 'antd';
import { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { getALLMessages,  setMessages } from "../../api/apis"
import RenderList from "../../Components/RenderList";
const ChatRoom = () => {
    const [message, setMessageText] = useState('')
    const [messageList, setMessageList] = useState([])
    const [sent, setSent] = useState(false)
    //const selectedUsers = useSelector(state => state.data?.SelectedUsers)
    const userInfo = useSelector((state) => state?.data)
    const title = useSelector((state) => state?.data?.Title)
    const convId=useSelector((state) => state?.data?.Messages)
    // const selectedUsersIds = []
    // selectedUsers?.forEach(element => {
    //     selectedUsersIds.push(element?.id)
    // })
    const setConv = async () => {
        console.log(convId,78)
        const res = await getALLMessages(convId)
        console.log(res,21)
        setMessageList(res);
    }

    useEffect(() => {
        setConv()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSetMessage = (e) => {
        setMessageText(e.target.value)
    }
    const handleSendMessage = async () => {
        setMessageList((prev) => [...prev, message])
        setSent(true)
        await setMessages(userInfo?.userID, message).then((res) => {
            setSent(false)
            setMessageText('')
        })
    }
    return <div>
        <h1>{title}</h1>
        < div>
            {!!messageList?.length && <div>
                <RenderList dataArr={messageList}/>
                {sent ? <p>Sending...</p> : <p>Sent</p>}</div>}
        </div>

        <Input placeholder="Send Something..." onChange={(e) => handleSetMessage(e)} value={message} />
        <Button onClick={() => handleSendMessage()}>Send</Button>
    </div>
}
export default ChatRoom