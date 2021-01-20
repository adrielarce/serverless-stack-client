const config = {
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
        IDENTITY_POOL_ID: "us-east-2:6f0ca6df-a360-4127-a40f-a55b4698b9e0",
    },
};
export default config;