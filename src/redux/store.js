let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "Hi, how are you?", likesCount: 21 },
            { id: 2, message: "It's my first post", likesCount: 16 }
        ],
    },
    messagesPage: {
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
        newMessageBody: ""
    },
    sidebar: {
        friendsData: [
            { 
                id: 1,
                ava: "https://www.treehugger.com/thmb/cCuTgDbViqbpGbVemWrNAnLqgDw=/660x660/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2014__08__reflective-sunset-be415c8fac164a69ac27a902f2ac835c.jpg",
                name: "Elena",
            },
            { 
                id: 2,
                ava: "https://sun1-85.userapi.com/s/v1/if2/HVyk7jD69-IKWYoxG7Z-J1XXI9mQaWlIYGwiM1AcPxcO2blEUnTiRppG_5dlUS9wX7GNtpQdOUAkK6zq28Orvqvb.jpg?size=50x50&quality=96&crop=261,146,201,201&ava=1",
                name: "Anastasia",
            },
            { 
                id: 3, 
                ava: "https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg", 
                name: "Anastasia",
            },
            {
                id: 4, 
                ava: "https://www.biotekinstruments.ru/images/imaging-contest/Kenyi-Saito-Diaz-Sensory-neuron2-univ-of-georgia-4x.jpg",
                name: "Darya",
            },
        ],
    },
}

export let addPost = (postText) => {
    let newPost = {
        id: 5,
        message: postText,
        likesCount: 0,
    };

    state.profilePage.postsData.push(newPost);
}

export default state;