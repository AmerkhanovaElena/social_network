const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {
            id: 1,
            ava: "https://www.treehugger.com/thmb/cCuTgDbViqbpGbVemWrNAnLqgDw=/660x660/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2014__08__reflective-sunset-be415c8fac164a69ac27a902f2ac835c.jpg",
            name: "Elena A",
        },
        {
            id: 2,
            ava: "https://sun1-85.userapi.com/s/v1/if2/HVyk7jD69-IKWYoxG7Z-J1XXI9mQaWlIYGwiM1AcPxcO2blEUnTiRppG_5dlUS9wX7GNtpQdOUAkK6zq28Orvqvb.jpg?size=50x50&quality=96&crop=261,146,201,201&ava=1",
            name: "Anastasia Z",
        },
        {
            id: 3,
            ava: "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg",
            name: "Anastasia S",
        },
        {
            id: 4,
            ava: "https://www.biotekinstruments.ru/images/imaging-contest/Kenyi-Saito-Diaz-Sensory-neuron2-univ-of-georgia-4x.jpg",
            name: "Darya K",
        },
    ],
    messagesData: [
        { id: 1, text: "Hi!!" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "20% done!" },
    ],
    newMessageBody: '',
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            // debugger;
            let newMessage = {
                id: 4,
                text: state.newMessageBody,
            }
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, newMessage],
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageBody: action.newText,
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default messagesReducer;