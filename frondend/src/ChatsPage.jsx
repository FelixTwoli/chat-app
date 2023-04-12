import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const ChatProps = useMultiChatLogic('8e49a312-5b6d-4121-9852-9f666ec6b7ec', props.user.username, props.user.secret)
    return (<div style={{ height: '100vh' }}>
        <MultiChatSocket {...ChatProps} />
        <MultiChatWindow {...ChatProps} style={{ height: '100%' }} />
    </div>)
}

export default ChatsPage