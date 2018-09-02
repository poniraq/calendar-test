const redirect_uri = process.env.GOOGLE_WEB_REDIRECT_URI || 'http://localhost:3000/auth/callback';
const client_id = process.env.GOOGLE_WEB_CLIENT_ID;
const client_secret = process.env.GOOGLE_WEB_CLIENT_SECRET;

module.exports = {
    web: {
        client_id: client_id,
        client_secret: client_secret,
        redirect_uris: [ redirect_uri ]
    }
};