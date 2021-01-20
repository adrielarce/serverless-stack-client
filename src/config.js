const config = {
    STRIPE_KEY: "pk_test_51IBgYSHjTUCGW8LImNYecw6E41nMjmaqwucfHvK0Ysqeha88cQqPTJhHuoMRLHdlX6n8hCFxNazUPAiMpB3hlqIi00VJ7kPc6S",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-uploads-001",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://8gdye7m03a.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_6j05mJPFP",
        APP_CLIENT_ID: "7dpifjb7qmm2r3q97d6nc324ic",
        IDENTITY_POOL_ID: "us-east-2:0ecbbb38-07dd-48e2-aece-227df5604199",
    },
};
export default config;